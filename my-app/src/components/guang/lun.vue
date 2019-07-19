<template>
    <div class="item">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="(v,i) in arr1" :key="i" class="swiper-slide" >
                    <img  :src="v.imgurl">
                </div>
                <!-- <div class="swiper-slide" >
                    <img  src="../../../static/wy/youhuo/page/guang/3.jpg">
                </div>
                <div class="swiper-slide" >
                    <img  src="../../../static/wy/youhuo/page/guang/4.jpg">
                </div>
                <div class="swiper-slide" >
                    <img  src="../../../static/wy/youhuo/page/guang/5.jpg">
                </div>
                <div class="swiper-slide" >
                    <img  src="../../../static/wy/youhuo/page/guang/6.jpg">
                </div> -->
                
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
    mounted(){
        //实现中间居中左右显示一点的布局
        var mySwiper =new Swiper(".swiper-container", {
            autoplay: {
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        
         });
        },

        props:{
           arr1:Array
        }
}
</script>
<style scoped>
    .item{
        width: 100%;
        margin-top: .015rem;
    }
    .swiper-container {
        width: 100%;
    } 
    .swiper-wrapper{
        width: 100%;
    }
    .swiper-slide{
        width: 100%;
    }
    .swiper-pagination{
        margin: -.3rem 0;
    }
    img{
        width: 100%;
        height: 2rem;
    }
    
</style>