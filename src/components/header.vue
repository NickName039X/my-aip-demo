<template>
    <header class="header">
        <h1>识别文字</h1>
        <i class="cubeic-back"></i>
    </header>
</template>

<script>
	export default {
		name: "aip-header"
	}
</script>

<style scoped>
    .header {
        position: relative;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #edf0f4;
        box-shadow: 0 1px 6px #ccc;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 5
    }
    .header h1 {
        font-size: 16px;
        font-weight: 700
    }
    .header .cubeic-back {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 15px;
        color: #fc9153
    }
</style>