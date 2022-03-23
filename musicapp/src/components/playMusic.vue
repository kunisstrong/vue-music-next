<template>
    <div class="playMusic">
        <div
            class="bg"
            :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"
        ></div>
        <div class="playTop">
            <div class="back" @click="$emit('back')">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-flow"></use>
                </svg>
            </div>
            <div class="title">
                <marquee behavior="scroll" direction="left">
                    {{ playDetail.al.name }}
                </marquee>
            </div>
            <div class="share">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <div class="playContent" v-show="!islyrc">
            <img
                :class="{ active: !pause }"
                class="needle"
                src="@/assets/needle-ab.png"
                alt=""
            />
            <img
                class="disc"
                src="@/assets/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
            />
            <img class="playImg" :src="playDetail.al.picUrl" alt="" />
        </div>
        <div class="playLyric" v-show="islyrc" ref="playLyrc">
            <p
                :class="{
                    active:
                        currentTime * 1000 >= item.pre &&
                        currentTime * 1000 < item.time,
                }"
                v-for="(item, i) in $store.getters.lyricList"
                :key="i"
            >
                {{ item.lyric }}
            </p>
        </div>
        <div class="progress"></div>
        <div class="playFooter">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="changeMusic(-1)">
                <use xlink:href="#icon-shangyishoushangyige"></use>
            </svg>
            <svg
                v-if="pause"
                @click="play"
                class="play icon"
                aria-hidden="true"
            >
                <use xlink:href="#icon-bofang3"></use>
            </svg>
            <svg v-else @click="play" class="play icon" aria-hidden="true">
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="changeMusic(1)">
                <use xlink:href="#icon-xiayigexiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['playDetail', 'pause', 'play'],
    data() {
        return {
            islyrc: true,
        }
    },

    computed: {
        ...mapState(['lyric', 'currentTime', 'playCurrentIndex', 'playlist']),
    },
    methods: {
        changeMusic(num) {
            let index = this.playCurrentIndex + num
            if (index < 0) {
                index = this.playlist.length - 1
            } else if (index === this.playlist.length - 1) {
                index = 0
            }
            this.$store.commit('setPlayIndex', index)
        },
    },
    watch: {
        // currentTime(newValue) {
        //     let p = document.querySelector('p.active')
        //     let offsetTop = p.offsetTop
        //     this.$refs.playLyrc.scrollTop = offsetTop
        // },
    },
}
</script>
<style lang="less" scoped>
.playMusic {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-size: auto 100%;
        background-position: center;
        filter: blur(60px);
    }
    .playTop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 7.5rem;
        height: 1.2rem;
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        padding: 0 0.4rem;
        .icon {
            fill: #fff;
            width: 0.4rem;
            height: 0.4rem;
        }
        marquee {
            width: 5rem;
        }
    }
    .playContent {
        position: absolute;
        width: 7.5rem;
        height: 7.5rem;
        left: 0;
        top: 1.5rem;
        .needle {
            width: 2.5rem;
            height: auto;
            position: absolute;
            left: 3.5rem;
            transform-origin: 0.3rem 0;
            transform: rotate(-20deg);
            transition: all 1s;
            z-index: 10;
        }
        .needle.active {
            width: 2.5rem;
            height: auto;
            position: absolute;
            left: 3.5rem;
            transform-origin: 0.3rem 0;
            transform: rotate(7deg);
            transition: all 1s;
            z-index: 10;
        }
        .disc {
            width: 5.5rem;
            height: auto;
            position: absolute;
            left: calc(50% - 2.75rem);
            top: 2.5rem;
        }
        .playImg {
            width: 3.4rem;
            height: 3.4rem;
            border-radius: 1.7rem;
            position: absolute;
            left: calc(50% - 1.7rem);
            top: 3.55rem;
        }
    }
    .playLyric {
        position: absolute;
        width: 7.5rem;
        height: 8rem;
        left: 0;
        top: calc(50% - 4rem);
        overflow: scroll;
        text-align: center;
        color: #fff;
        padding: 0.2rem 0;
        .active {
            color: red;
        }
    }
    .playFooter {
        width: 7.5rem;
        height: 1.5rem;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.4rem;
        .icon {
            fill: #fff;
            width: 0.5rem;
            height: 0.5rem;
        }
        .play.icon {
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>
