<template>
    <el-container class="xxx">
        <el-header>
            <v-header></v-header>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <v-sidebar :nav="nav"></v-sidebar>
            </el-aside>
            <el-container class="aaaaaa">
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>

</template>

<script>
    import {
        mapActions
    } from 'vuex'
    import Header from '@/components/header/header.vue'
    import Sidebar from '@/components/sidebar/sidebar.vue'
    import $ from 'jquery'
    export default {
        components: {
            'vHeader': Header,
            'vSidebar': Sidebar
        },
        computed: {},
        mounted() {
            $(window).resize(() => {})
        },
        data() {
            return {
                nav: [{
                    name: '拓扑模版',
                    children: [{
                        name: '我的拓扑',
                        id: 'myTemplate',
                        icon: 'shouyi'
                    }, {
                        name: '工作台',
                        id: 'allTemplate',
                        icon: 'shenhe'
                    }]
                }]
            }
        }
    }

</script>

<style lang="scss" scoped>
    .el-header,
    .el-footer {
        background-color: #136826;
        color: #333;
        height: 60px;
    }

    .xxx {
        min-width: 1320px;
    }

    .el-aside {
        height: calc(100vh - 60px);
        margin-right: 20px;
        border-right: 2px solid #e6e7e4;
    }

    .el-main {
        height: calc(100vh - 60px);
    } // .el-container {
    //     overflow: auto;
    //     border-left: 2px solid #e6e7e4;
    // }
    .aaaaaa {
        border-left: 2px solid #e6e7e4;
    }

</style>
