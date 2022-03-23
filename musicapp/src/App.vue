<template>
    <router-view />
    <PlayController></PlayController>
</template>
<script>
import PlayController from '@/components/playController.vue'
export default {
    setup() {},
    components: { PlayController },
}
</script>
<style lang="less">
.icon {
    width: 0.3rem;
    height: 0.3rem;
}
/*清除元素默认的内外边距  */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: '微软雅黑';
}
/*让所有斜体 不倾斜*/
em,
i {
    font-style: normal;
}
/*去掉列表前面的小点*/
li {
    list-style: none;
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
    border: 0; /*ie6*/
    vertical-align: middle;
}
/*让button 按钮 变成小手*/
button {
    cursor: pointer;
}
/*取消链接的下划线*/
a {
    color: #666;
    text-decoration: none;
}

a:hover {
    color: #e33333;
}

button,
input {
    font-family: 'Microsoft YaHei', 'Heiti SC', tahoma, arial,
        'Hiragino Sans GB', \\5b8b\4f53, sans-serif;
    /*取消轮廓线 蓝色的*/
    outline: none;
}
</style>
