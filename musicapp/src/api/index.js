// 请求数据的操作全放在这里
// 引入axios
import axios from 'axios'

let baseUrl = 'http://music.cpengx.cn'
// 获取轮播图的api，type 资源类型，对应以下类型，默认为0，即pc
// 1 ：android 2：iphone 3：ipad
export function getBanner(type = 0) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

// 获取推荐歌单
// 可选参数 : limit: 取出数量 , 默认为10
export function getMusicList(limit = 10) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// 获取歌单详情
export function getMusicListDetail(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

// 获取歌词
export const getLyric = (id) => {
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}
// 搜索歌单
export const getKeywords = (keywords) => {
    return axios.get(`${baseUrl}/search?keywords=${keywords}`)
}
