<template>
    <div>
        <el-page-header class="page-head" @back="$router.go(-1)" content="提交书籍信息">
        </el-page-header>
        <el-form class="form" ref="form" :model="form" label-width="12vw">
            <el-form-item label="isbn">
                <el-input v-model="form.isbn"></el-input>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="form.author"></el-input>
            </el-form-item>
            <el-form-item label="封面">
                <el-input v-model="form.coverImg"></el-input>
            </el-form-item>
            <el-form-item label="介绍">
                <el-input type="textarea" v-model="form.intro"></el-input>
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
                isbn: '',
                title: '',
                author: '',
                coverImg: '',
                intro: ''
            }
        };
    },
    methods: {
        onSubmit: function() {
            axios({
                method: "post",
                url: "/api/book",
                data: {
                    ...this.form
                }
            })
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
