<template>
    <div class="playController" v-if="playlist[playCurrentIndex].al">
        <div class="left" @click="isShow = !isShow">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
            <div class="title">
                <div class="name">
                    {{ playlist[playCurrentIndex].al.name }}
                </div>
                <p>横滑可以切换上下首哦</p>
            </div>
        </div>
        <div class="right">
            <svg
                v-if="pause"
                @click="play"
                class="bofang icon"
                aria-hidden="true"
            >
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg v-else @click="play" class="bofang icon" aria-hidden="true">
                <use xlink:href="#icon-24gl-pause"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
            <audio
                ref="audio"
                :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
            ></audio>
            <PlayMusic
                :play="play"
                :pause="pause"
                @back="isShow = !isShow"
                v-show="isShow"
                :playDetail="playlist[playCurrentIndex]"
            ></PlayMusic>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PlayMusic from '@/components/playMusic.vue'
export default {
    data() {
        return {
            pause: true,
            isShow: false,
        }
    },
    methods: {
        play() {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play()
                this.pause = false
                this.UpdateTime()
            } else {
                this.$refs.audio.pause()
                this.pause = true
                clearInterval(this.$store.state.id)
            }
        },
        UpdateTime() {
            this.$store.state.id = setInterval(() => {
                this.$store.commit(
                    'setCurrentTime',
                    this.$refs.audio.currentTime
                )
            }, 1000)
        },
    },
    created() {
        this.$store.dispatch(
            'reqLyric',
            this.playlist[this.playCurrentIndex].id
        )
    },
    updated() {
        this.$store.dispatch(
            'reqLyric',
            this.playlist[this.playCurrentIndex].id
        )
    },
    computed: {
        ...mapState(['playlist', 'playCurrentIndex']),
    },
    components: { PlayMusic },
}
</script>
<style lang="less" scoped>
.playController {
    background-color: #fff;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    .left {
        display: flex;
        align-items: center;
        padding-right: 0.2rem;
        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }
        .title {
            padding: 0 0.2rem;
            .name {
                font-size: 0.28rem;
            }
            p {
                font-size: 0.2rem;
                color: #666;
            }
        }
    }
    .right {
        display: flex;
        margin-right: 0.1rem;
        .icon {
            .bofang {
                width: 0.7rem;
                height: 0.7rem;
            }
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 0.3rem;
        }
    }
}
</style>
