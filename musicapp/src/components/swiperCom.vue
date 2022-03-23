<template>
    <div class="swiper-container">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="(items, i) in imgs" :key="i">
                <img :src="items.pic" alt="" srcset="" />
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// 按需导入api中banner数据
import { getBanner } from '@/api/'
// Import Swiper Vue.js components
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            imgs: [],
        }
    },
    async created() {
        // 获取banner轮播图
        let { data: res } = await getBanner(1)
        this.imgs = res.banners
    },
    setup() {
        // swiper轮播图
        const onSwiper = (swiper) => {}
        const onSlideChange = () => {}
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination],
        }
    },
}
</script>
<style lang="less" scope>
.swiper-container {
    width: 7.1rem;
    height: 3rem;
    margin: 0 auto;
    border-radius: 0.2rem;
    overflow: hidden;
    .swiper-slide {
        height: 3rem;
        img {
            width: 100%;
            height: 100%;
            border-radius: 0.2rem;
        }
    }
    .swiper-pagination-bullet-active {
        background-color: orangered;
    }
}
</style>
