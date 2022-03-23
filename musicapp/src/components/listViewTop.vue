<template>
    <div class="listViewTop">
        <img
            class="backgroundImg"
            :src="playlist.coverImgUrl"
            alt=""
            srcset=""
        />
        <div class="listViewTopNav">
            <div class="left">
                <svg
                    class="back icon"
                    aria-hidden="true"
                    @click="$router.go(-1)"
                >
                    <use xlink:href="#icon-flow"></use>
                </svg>
                <div class="title">歌单</div>
            </div>
            <div class="right">
                <svg class="search icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo1"></use>
                </svg>
                <svg class="more icon" aria-hidden="true">
                    <use xlink:href="#icon-sandian"></use>
                </svg>
            </div>
        </div>
        <div class="content">
            <div class="contentLeft">
                <img :src="playlist.coverImgUrl" alt="" srcset="" />
                <div class="count">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang1"></use>
                        </svg>
                    </span>
                    <span class="num">
                        {{ changeValue(playlist.playCount) }}
                    </span>
                </div>
            </div>

            <div class="contentRight">
                <h3>{{ playlist.name }}</h3>
                <div class="author">
                    <img :src="playlist.creator.avatarUrl" class="header" />
                    <span>{{ playlist.creator.nickname }}</span>
                </div>
                <div class="description">
                    {{ playlist.description }}
                </div>
            </div>
        </div>
        <div class="iconList">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liaotian"></use>
                </svg>
                <span>{{ playlist.commentCount }}</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{ playlist.shareCount }}</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon_duoxuankuangzu"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['playlist'],
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
.listViewTop {
    width: 7.5rem;
    padding: 0 0.4rem;
    .backgroundImg {
        position: fixed;
        left: 0;
        top: 0;
        width: 7.5rem;
        height: auto;
        z-index: -1;
        filter: blur(40px);
    }
    .listViewTopNav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.4rem;
        font-size: 0.3rem;
        .left,
        .right {
            display: flex;
            align-items: center;
            color: #fff;
            .title {
                margin-left: 0.4rem;
            }
            .icon {
                fill: #fff;
            }
            .back {
                width: 0.4rem;
                height: 0.4rem;
            }
            .search {
                width: 0.45rem;
                height: 0.45rem;
                margin-right: 0.4rem;
            }
            .more {
                width: 0.6rem;
                height: 0.64rem;
                margin-right: -0.2rem;
            }
        }
    }
    .content {
        padding: 0.1rem 0;
        display: flex;
        justify-content: space-between;
        .contentLeft {
            position: relative;
            img {
                width: 3rem;
                height: 3rem;
                border-radius: 0.1rem;
            }
            .count {
                position: absolute;
                top: 0.1rem;
                right: 0.1rem;
                font-size: 0.24rem;
                color: #ccc;
                display: flex;
                align-items: center;
                font-weight: 500;
                .icon {
                    margin-top: 0.07rem;
                    fill: #ccc;
                }
            }
        }
        .contentRight {
            margin-left: 0.4rem;
            width: 3.5rem;
            h3 {
                color: #fff;
            }
            .author {
                display: flex;
                align-items: center;
                margin: 0.2rem 0;
                .header {
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 0.3rem;
                    margin-right: 0.2rem;
                }
                span {
                    color: #ccc;
                    font-size: 0.26rem;
                }
            }
            .description {
                font-size: 0.24rem;
                color: #aaa;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
    .iconList {
        display: flex;
        justify-content: space-around;
        padding-top: 0.2rem;
        .iconItem {
            display: flex;
            flex-flow: column;
            align-items: center;
            .icon {
                width: 0.5rem;
                height: 0.5rem;
                fill: #fff;
            }
            span {
                font-size: 0.23rem;
                padding-top: 0.26rem;
                color: #fff;
            }
        }
    }
}
</style>
