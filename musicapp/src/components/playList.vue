<template>
    <div class="playList">
        <div class="playListTop">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang2"></use>
                </svg>
                <div class="title">播放全部</div>
                <div class="num">(共{{ playlist.tracks.length }}首)</div>
            </div>
            <div class="right">
                + 收藏({{ changeValue(playlist.subscribedCount) }})
            </div>
        </div>
        <div class="playListMain">
            <div
                class="palyItem"
                v-for="(item, i) in playlist.tracks"
                :key="i"
                @click="setPlayIndex(i)"
            >
                <div class="left">
                    <div class="index">{{ i + 1 }}</div>
                    <div class="title">
                        <div class="name">{{ item.name }}</div>
                        <div class="author">
                            <span
                                class="tag"
                                v-for="(tag, index) in playlist.tags"
                                :key="index"
                            >
                                {{ tag }}
                            </span>
                            <span>{{ item.al.name }}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <svg
                        class="icon"
                        aria-hidden="true"
                        @click="setPlayIndex(i)"
                    >
                        <use xlink:href="#icon-bofangshu"></use>
                    </svg>
                    <svg class="more icon" aria-hidden="true">
                        <use xlink:href="#icon-sandian"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: ['playlist'],
    methods: {
        ...mapMutations(['setPlayIndex']),
    },
    setup() {
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
            changeValue,
        }
    },
}
</script>

<style lang="less" scoped>
.playList {
    background-color: #fff;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0.4rem;
    .playListTop {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem;
        .left {
            display: flex;
            align-items: center;
            justify-content: space-around;
            .icon {
                width: 0.45rem;
                height: 0.45rem;
                margin-right: 0.2rem;
            }
            .title {
                font-size: 0.3rem;
                font-weight: 600;
            }
            .num {
                color: #666;
                font-size: 0.25rem;
            }
        }
        .right {
            font-size: 0.2rem;
            color: #fff;
            background-color: orangered;
            height: 0.6rem;
            line-height: 0.6rem;
            border-radius: 0.3rem;
            padding: 0 0.2rem;
        }
    }
    .playListMain {
        .palyItem {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.2rem 0.4rem;
            .left {
                display: flex;
                align-items: center;
                color: #666;
                .index {
                    width: 0.4rem;
                    text-align: center;
                }
                .title {
                    margin-left: 0.3rem;
                    font-size: 0.28rem;

                    .name {
                        font-weight: 900;
                        color: #000;
                        margin-bottom: 0.1rem;
                    }
                    .author {
                        color: #666;
                        .tag {
                            font-size: 0.2rem;
                            color: orangered;
                            border: 1px solid orangered;
                            border-radius: 0.05rem;
                        }
                    }
                }
            }
            .right {
                display: flex;
                align-items: center;
                .icon {
                    margin: 0 0.2rem;
                    width: 0.4rem;
                    height: 0.4rem;
                    fill: #666;
                }
                .more {
                    height: 0.5rem;
                    margin-right: 0rem;
                }
            }
        }
    }
}
</style>
