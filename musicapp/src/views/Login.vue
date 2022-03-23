<template>
    <div class="login">
        <div class="logo">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangyiyunyinle"></use>
            </svg>
        </div>
        <div class="main">
            <div class="number"></div>
            <div class="password"></div>
        </div>
        <div class="otherWays"></div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.path)
    },
}
</script>

<style lang="less" scoped>
.login {
    width: 100vh;
    height: 100vh;
    z-index: 10;
    // background-color: rgb(221, 0, 27);
    .logo {
        width: 7.5rem;
        height: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
            width: 3rem;
            height: 3rem;
        }
    }
}
</style>
