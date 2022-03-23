<template>
    <div class="searchTop">
        <div class="top">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-flow"></use>
            </svg>
            <div class="text">
                <input
                    type="text"
                    :placeholder="placeholder"
                    v-model="searchKeyword"
                    @keydown.enter="saveKeyword"
                />
            </div>
        </div>
        <div class="history" v-show="searchSongs.length == 0">
            <div class="historyLeft">历史</div>
            <div class="historyRight">
                <div
                    @click="searchItem(item)"
                    class="keywordItem"
                    v-for="(item, i) in keywordList"
                    :key="i"
                >
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="searchSongs" v-show="searchSongs.length !== 0">
            <div class="searchSongsTop">
                <div class="left">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang2"></use>
                    </svg>
                    <div class="title">播放全部</div>
                    <div class="num">(共{{ searchSongs.length }}首)</div>
                </div>
            </div>
            <div class="searchSongsMain">
                <div class="palyItem" v-for="(item, i) in searchSongs" :key="i">
                    <div class="left">
                        <div class="index">{{ i + 1 }}</div>
                        <div class="title">
                            <div class="name">{{ item.name }}</div>
                            <div class="author">
                                <span
                                    class="tag"
                                    v-for="(tag, index) in searchSongs.tags"
                                    :key="index"
                                >
                                    {{ tag }}
                                </span>
                                <span>{{ item.album.name }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <svg
                            class="icon"
                            aria-hidden="true"
                            @click="setPlay(item, i)"
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
    </div>
</template>
<script>
import { getKeywords } from '@/api/'
export default {
    data() {
        return {
            placeholder: '陈奕迅',
            searchKeyword: '',
            keywordList: [],
            searchSongs: [],
        }
    },
    created() {
        this.keywordList = localStorage.keywordList
            ? JSON.parse(localStorage.keywordList)
            : []
    },
    methods: {
        async saveKeyword() {
            this.keywordList.push(this.searchKeyword)
            this.keywordList = Array.from(new Set(this.keywordList))
            if (this.keywordList.length > 10) {
                this.keywordList = this.keywordList.slice(
                    this.keywordList.length - 10,
                    this.keywordList.length
                )
            }
            localStorage.keywordList = JSON.stringify(this.keywordList)
            let res = await getKeywords(this.searchKeyword)
            this.searchSongs = res.data.result.songs
        },
        searchItem(item) {
            this.searchKeyword = item
            this.saveKeyword()
        },
        setPlay(item, i) {
            item.al = item.album
            item.al.picUrl = item.album.artist.img1v1Url
            this.$store.commit('pushPlaylist', item)
            this.$store.commit(
                'setPlayIndex',
                this.$store.state.playlist.length - 1
            )
        },
    },
}
</script>
<style lang="less" scoped>
.searchTop {
    width: 7.5rem;
    padding: 0 0.4rem;
    .top {
        display: flex;
        width: 100%;
        height: 1.2rem;
        align-items: center;
        .icon {
            width: 0.5rem;
            height: 0.5rem;
        }
        .text {
            padding: 0 0 0 0.4rem;
            flex: 1;
            input {
                width: 100%;
                height: 0.8rem;
                border: none;
                outline: none;
                border-bottom: 1px solid #666;
            }
        }
    }
    .history {
        display: flex;
        .historyLeft {
            width: 1.2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            font-weight: 900;
            margin: 0.2rem 0;
        }
        .historyRight {
            color: #666;
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            .keywordItem {
                background-color: #eee;
                height: 0.6rem;
                padding: 0 0.2rem;
                border-radius: 0.4rem;
                line-height: 0.6rem;
                margin: 0.2rem 0.1rem 0.2rem 0;
            }
        }
    }
    .searchSongs {
        background-color: #fff;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        margin-top: 0.4rem;
        .searchSongsTop {
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
        .searchSongsMain {
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
}
</style>
