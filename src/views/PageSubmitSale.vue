<template>
    <div>
        <el-page-header class="page-head" @back="$router.go(-1)" content="发布资源">
        </el-page-header>
        <el-form class="form" ref="form" :model="form" label-width="20vw">
            <el-form-item label="bid">
                <el-input v-model="form.bid"></el-input>
            </el-form-item>
            <el-form-item label="出售价格">
                <el-input v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="出售标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="出售介绍">
                <el-input type="textarea" v-model="form.intro"></el-input>
            </el-form-item>
            <el-form-item label="链接密码">
                <el-input type="textarea" v-model="form.secretLink"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            form: {
                bid: '',
                price: '',
                title: '',
                intro: '',
                secretLink: '',
            }
        };
    },
    methods: {
        onSubmit: function() {
            axios({
                method: "post",
                url: "/api/salebook",
                data: {
                    ...this.form
                }
            }).then(response => {
                if (response.data.statusCode == 200) {
                    this.$alert('资源信息提交成功🎉', response.data.message, {
                        confirmButtonText: '确定'
                    });
                } else {
                    this.$alert('资源信息提交失败', response.data.message, {
                        confirmButtonText: '确定'
                    });
                }
            }).catch(function (error) {
                this.$alert('资源信息提交失败', error, {
                        confirmButtonText: '确定'
                });
            }.bind(this));
        }
    }
};
</script>
<style scoped>
.form {
    margin: 20px;
}
.page-head {
    margin: 15px 20px;
}
</style>
