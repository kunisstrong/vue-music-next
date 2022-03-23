<template>
    <listViewTop :playlist="state.playlist"></listViewTop>
    <playList :playlist="state.playlist"></playList>
</template>

<script>
import { getMusicListDetail } from '@/api/'
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import listViewTop from '@/components/listViewTop.vue'
import playList from '@/components/playList.vue'
import $store from '@/store/index.js'

export default {
    setup() {
        const route = useRoute()

        let state = reactive({
            list: [],
            playlist: {
                creator: {},
                tracks: [],
            },
        })
        const getPlayList = (async () => {
            const id = route.query.id
            let res = await getMusicListDetail(id)
            state.playlist = res.data.playlist
            $store.commit('setPlaylist', state.playlist.tracks)
            console.log(state.playlist)
        })()

        return {
            state,
        }
    },
    components: {
        listViewTop,
        playList,
    },
}
</script>

<style></style>
