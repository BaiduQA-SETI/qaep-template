<template>
    <header>
        <router-link to="home">
            <img class="logo" src="http://titans.baidu.com/img/titans_logo.png" />
        </router-link>
        <ul class="header-nav">
            <router-link class="nav-item" :key="item.id" v-for="item in list" tag="li" :to="'/' + item.id">{{item.name}}</router-link>
        </ul>
        <div class="user-help">
            <span>liushaopeng</span>
            <span>|</span>
            <a href="http://wiki.baidu.com/pages/viewpage.action?pageId=210683356">帮助</a>
            <img src="../img/git.png" />
        </div>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                list: [{
                    name: '首页',
                    id: 'home'
                }, {
                    name: '控制台',
                    id: 'workspace'
                }, {
                    name: '合作与生态',
                    id: 'collaborate'
                }]
            }
        }
    }

</script>
<style lang="scss" scoped>
    header {
        height: 50px;
        background: #437e9d;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            height: 30px;
            margin-left: 80px;
        }
        .header-nav {
            display: flex;
            justify-content: center;
            .nav-item {
                color: #fff;
                min-width: 90px;
                text-align: center;
                line-height: 50px;
                cursor: pointer;
            }
            .nav-item.active {
                background: #cad7e2;
                color: #4a7aa0;
            }
        }
        .user-help {
            display: flex;
            color: #fff;
            * {
                margin: 0 5px;
            }
            a {
                color: #fff;
            }
        }
    }

</style>
