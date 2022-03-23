<template>
    <div class="iconList-container">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuijian"></use>
            </svg>
            <span> 每日推荐 </span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span> 歌单 </span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span> 排行榜 </span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhibo"></use>
            </svg>
            <span> 直播 </span>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.iconList-container {
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.4rem;
    .iconItem {
        display: flex;
        flex-flow: column;
        align-items: center;
        .icon {
            width: 0.6rem;
            height: 0.6rem;
        }
        span {
            font-size: 0.28rem;
        }
    }
}
</style>
