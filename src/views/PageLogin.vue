<template>
    <div>
        <LogoBig />
        <el-row type="flex" class="row-bg" justify="center" id="login-input">
            <el-col :span="16">
                <el-input placeholder="User Name" v-model="username"></el-input>
                <el-input placeholder="Password" v-model="password" show-password></el-input>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" id="login-button">
                <el-button v-on:click="register">Register</el-button>
                <el-button type="primary" v-on:click="login">Log in</el-button>
        </el-row>
    </div>
</template>
<script>
import axios from "axios";
import LogoBig from '@/components/LogoBig';

export default {
    components: {
        LogoBig
    },
    data: function() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            axios({
                method: "post",
                url: "/api/login",
                data: {
                    username: this.username,
                    password: this.password
                }
            }).then(function(response) {
                document.cookie = 'session=' + response.data; //Fix cookie set
                this.$router.push('/user');
            }.bind(this)).catch(function (error) {
                window.console.log(error)
                window.alert('Login Failed');
            });
        },
        register() {
            window.alert('In progress');
        }
    }
};
</script>
<style scoped>
#login-panel {
    display: flex;
    flex-flow: column;
    width: 80%;
}

#login-input * {
    margin: 5px 0px;
}

#login-button * {
    margin: 2vh 5vw;
}
</style>
