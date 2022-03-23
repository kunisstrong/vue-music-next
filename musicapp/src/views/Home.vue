<template>
    <div class="home">
        <topNav></topNav>
        <swiperCom></swiperCom>
        <iconList></iconList>
        <musicList></musicList>
    </div>
</template>

<script>
import topNav from '@/components/topNav.vue'
import swiperCom from '@/components/swiperCom.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'
export default {
    name: 'Home',
    components: {
        topNav,
        swiperCom,
        iconList,
        musicList,
    },
}
</script>
<style lang="less" scoped></style>
