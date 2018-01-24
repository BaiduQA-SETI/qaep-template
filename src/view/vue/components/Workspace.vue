<template>
    <div>
        <v-header></v-header>
        <el-form ref="form" label-width="80px">
            <el-form-item label="job_id">
                <el-input id="jobId" name="jobId" v-model="jobId"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select id="jobStatus" v-model="status">
                    <el-option :key="item.id" :label="item.name" :value="item.id" v-for="item in statusList"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="pageinfo.page = 1, getList()" type="primary" element-loading-background="rgba(0, 0, 0, 0.8)" v-loading.fullscreen.lock="fullscreenLoading">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="list-wrap">
            <el-table style="width:100%;" :data="tableList" stripe>
                <el-table-column :key="item.prop" v-for="(item, index) in listTableInfo" :show-overflow-tooltip="true" :prop="item.prop"
                    :label="item.label">
                </el-table-column>
            </el-table>
            <el-pagination @current-change="getList" :current-page.sync="pageinfo.page" :page-size="10" layout="prev, pager, next, jumper"
                :total="pageinfo.totalcount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import Header from './Header'
    import * as api from '../api/index'
    export default {
        components: {
            'vHeader': Header
        },
        data() {
            return {
                status: '',
                jobId: '',
                fullscreenLoading: false,
                statusList: [],
                pageinfo: {
                    page: 1,
                    totalcount: 998
                },
                tableList: [],
                listTableInfo: [{
                    label: 'job_id',
                    prop: 'jobId'
                }, {
                    label: '产品线',
                    prop: 'productName'
                }, {
                    label: '资源类型',
                    prop: 'resourceType'
                }, {
                    label: '创建时间',
                    prop: 'createTime'
                }, {
                    label: '更新时间',
                    prop: 'updateTime'
                }, {
                    label: '状态',
                    prop: 'status'
                }]
            }
        },
        mounted() {
            api.searchplace().then(res => {
                this.statusList = res.result;
                this.status = res.result[0].id;
            })
            this.getList();
        },

        methods: {
            getList() {
                this.fullscreenLoading = true;
                api.getJobList({
                    'page': this.pageinfo.page,
                    'jobId': this.jobId,
                    'pagecount': 10,
                    'productId': 'all',
                    'jobStatus': 'all',
                    'resourceType': 'all'
                }).then(res => {
                    this.tableList = res.result.listinfo;
                    this.pageinfo.totalcount = res.result.pageinfo.totalcount;
                    this.fullscreenLoading = false;
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .el-form {
        display: flex;
        margin: 20px;
    }

    .list-wrap {
        margin: 20px;
        .el-pagination {
            margin: 20px 0;
            text-align: right;
        }
    }

</style>
