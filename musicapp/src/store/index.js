import { createStore } from 'vuex'
import { getLyric } from '@/api/'

export default createStore({
    state: {
        // 当前歌单
        playlist: [
            {
                name: '爱的回归线（旺仔小乔）',
                id: 1924044072,
                al: {
                    id: 141066751,
                    name: '爱',
                    pic: 109951167098670100,
                    picUrl: 'http://p4.music.126.net/uli_aWsXZE5klv_Gg83IUA==/109951167098670102.jpg',
                    pic_str: '109951167098670102',
                },
            },
        ],
        // 当前歌曲在歌单的索引值
        playCurrentIndex: 0,
        // 当前歌曲
        lyric: '',
        currentTime: 0,
        intervalId: 0,
        user: {
            isLogin: false,
            userInfo: '未登录',
        },
    },
    getters: {
        lyricList(state) {
            let arr = state.lyric.split(/\n/gis).map((item, i, arr) => {
                let min = parseInt(item.slice(1, 3))
                let sec = parseInt(item.slice(4, 6))
                let mill = parseInt(item.slice(7, 10))
                return {
                    min,
                    sec,
                    mill,
                    lyric: item.slice(11, item.length),
                    content: item,
                    time: mill + sec * 1000 + min * 60 * 1000,
                }
            })
            arr.forEach((item, i) => {
                if (i == 0) {
                    item.pre = 0
                } else {
                    item.pre = arr[i - 1].time
                }
            })
            return arr
        },
    },
    mutations: {
        setPlaylist: function (state, value) {
            state.playlist = value
        },
        pushPlaylist(state, value) {
            state.playlist.push(value)
        },
        setPlayIndex(state, value) {
            state.playCurrentIndex = value
        },
        setLyric(state, value) {
            state.lyric = value
        },
        setCurrentTime(state, value) {
            state.currentTime = value
        },
    },
    actions: {
        async reqLyric({ commit }, id) {
            let res = await getLyric(id)
            commit('setLyric', res.data.lrc.lyric)
            // console.log(res.data.lrc.lyric)
        },
    },
    modules: {},
})
