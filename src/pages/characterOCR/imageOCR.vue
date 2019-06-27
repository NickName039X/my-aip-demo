<template>
    <div>
        <Header></Header>
        <div class="upload-area">
            <label :class="(img ? 'uploaded' : '') + ' upload-img'" for="upload-input">
                <i>＋</i>
                <p>Please click to upload img</p>
                <img :src="img" v-if="img">
            </label>
            <input type="file" accept="image/*"  @change="uploadImg" id="upload-input" class="upload-input"/>
            <cube-button type="submit" @click="recognition" class="recognition">识别</cube-button>
						<p class="notice">*注：图片仅支持jpg/jpeg/png/bmp格式</p>
        </div>

        <div class="result">
            <p>识别结果：</p>
            <ul>
							<li v-for="(w, index) in words" :key="index">{{w.words}}</li>
						</ul>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header'
import { createImage } from '@/common/js/uploadPic'
import {accurateBasic} from '@/api/ocr'
export default {
  name: "imageOCR",
  components: {Header},
	data() {
		return {
			img: '',
			words: []
		}
	},
	methods: {
    uploadImg(e) {
			let files = e.target.files
			console.log('files', files)
			if (!files.length) return
			createImage(files[0], this.uploadImgToServer)
    },
    uploadImgToServer (file) {
			this.img = file
    },
		//识别
		recognition(){
			// accurateBasic(this.img).then((res) => {
			// 	console.log(res.data);
			// 	this.words = res.data.words_result
			// }).catch((err) => {
			// 	console.log(err)
			// });
			
			accurateBasic({
				data: {
					image: this.img
				},
				call: (res) => {
					this.words = res.words_result
				}
			})
		}
	}
}
</script>

<style lang="stylus">
    .upload-img{
        border: 1px solid #ddd;
        margin: 20px auto;
        width: 80%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        i {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            margin-bottom: 20px;
            font-size: 32px;
            line-height: 1;
            font-style: normal;
            color: #fff;
            background-color: #333;
            border-radius: 50%;
        }
        img {
            max-width: 100%;
            max-height: 100%;
        }

    }
		.notice{
			font-size: 12px;
			color: #333;
			margin-left: 40px;
		}
    .recognition{
        margin: 20px auto 10px;
        width: 80%;
    }
    .upload-input{display: none;}
    .uploaded{
        i, p {
            display:none;
        }
    }
		.upload-area{
			border-bottom: 1px solid #ccc;
			padding-bottom: 20px;
		}
    .result{
				margin-left: 20px;
				font-size: 14px;
				line-height: 2;
				p {font-size: 16px; line-height: 2.5;}
				ul{
					text-indent: 20px;
					li{
						list-style-type: disc;
						list-style-position: inside;
					}
				}
    }

</style>