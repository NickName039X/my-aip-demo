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
        </div>


    </div>
</template>

<script>
import Header from '@/components/header'
import { createImage } from '@/common/js/uploadPic'
import ocr from '@/common/js/ocr'
export default {
  name: "imageOCR",
  components: {Header},
	data() {
		return {
            img: ''
		}
	},
	methods: {
        uploadImg(e) {
            let files = e.target.files
            console.log('files', files)
            if (!files.length) return
            createImage(files[0], this.uploadImgToServer);
            this.loading = true
        },
        uploadImgToServer (file) {
            let formData = new FormData()
            formData.append('files', file)
            this.img = file.src || file
            console.log(file)
        },

        //识别
        recognition(e){
            console.log(ocr);
            ocr.generalCharBasic(this.img);
        }
	}
}
</script>

<style lang="stylus">
    .upload-img{
        border: 1px solid red;
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
    .recognition{
        margin: 20px auto;
        width: 80%;
    }
    .upload-input{display: none;}
    .uploaded{
        i, p {
            display:none;
        }
    }

</style>