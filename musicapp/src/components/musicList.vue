<template>
    <div class="musicList">
        <div class="musicTop">
            <p class="left">发现好歌单</p>
            <p class="right">查看更多</p>
        </div>
        <div class="musicMain">
            <swiper
                :slides-per-view="3"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide v-for="(item, i) in state.musicList" :key="i">
                    <router-link
                        :to="{ path: '/listview', query: { id: item.id } }"
                    >
                        <img :src="item.picUrl" :alt="item.name" />
                        <p>{{ item.name }}</p>
                        <div class="count">
                            <span>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-bofang1"></use>
                                </svg>
                            </span>
                            <span>{{ changeValue(item.playCount) }}</span>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
// 按需引入获取musicList歌单列表的函数
import { getMusicList } from '@/api/'
import { reactive, onMounted } from 'vue'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const onSwiper = (swiper) => {}
        const onSlideChange = () => {}
        // 响应式数据
        let state = reactive({ musicList: [] })
        // setup就相当于created 获取数据直接在setup中写
        onMounted(async () => {
            let res = await getMusicList()
            state.musicList = res.data.result
        })

        const changeValue = (num) => {
            let res = 0
            if (num >= 100000000) {
                res = num / 100000000
                res = res.toFixed(2) + '亿'
            } else if (num > 10000) {
                res = num / 10000
                res = res.toFixed(2) + '万'
            }
            return res
        }

        return {
            onSwiper,
            onSlideChange,
            state,
            changeValue,
        }
    },
    /*  data() {
        return {
            musicList: [],
        }
    },
    methods: {
        changeValue(num) {
            let res = 0
            if (num >= 100000000) {
                res = num / 100000000
                res = res.toFixed(2) + '亿'
            } else if (num > 10000) {
                res = num / 10000
                res = res.toFixed(2) + '亿'
            }
            return res
        },
    },
    // 获取musicList
    async created() {
        let { data: res } = await getMusicList()
        this.musicList = res.result
        console.log(this.musicList)
    },
    components: {
        Swiper,
        SwiperSlide,
    }, */
}
</script>
<style lang="less" scoped>
.musicList {
    .musicTop {
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;
        padding: 0 0.4rem;
        .left {
            font-size: 0.3rem;
            font-weight: 900;
        }
        .right {
            border: 1px solid #ccc;
            border-radius: 0.3rem;
            font-size: 0.24rem;
            height: 0.5rem;
            width: 1.2rem;
            text-align: center;
            line-height: 0.5rem;
        }
    }
    .musicMain {
        width: 7.1rem;
        height: 3rem;
        margin: 0 auto;
        overflow: hidden;
        .swiper-slide {
            position: relative;
            height: 3rem;
            display: flex;
            flex-flow: column;
            img {
                width: 100%;
                height: auto;
                border-radius: 0.2rem;
            }
            p {
                height: 0.6rem;
                width: 100%;
                font-size: 0.24rem;
                line-height: 0.4rem;
            }
            .count {
                position: absolute;
                top: 0.1rem;
                right: 0.1rem;
                font-size: 0.24rem;
                color: #ccc;
                display: flex;
                align-items: center;
                .icon {
                    margin-top: 0.07rem;
                    fill: #ccc;
                }
            }
        }
    }
}
</style>
