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
                url: "/api/sessions",
                data: {
                    userName: this.username,
                    password: this.password
                }
            }).then(function(response) {
                if (response.data.statusCode == 200) {
                    localStorage.Authorization = response.data.session;
                    this.$alert('登录成功啦🎉，现在带你去首页~', '登录成功', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$router.push('/user');
                        }
                    });
                } else {
                    this.$alert(response.data.message, '登录失败', {
                        confirmButtonText: '确定'
                    });
                }
            }.bind(this)).catch(function (error) {
                window.console.log(error)
                this.$alert('未知错误，请联系开发者', error, {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$router.push('/');
                        }
                    });
            });
            axios.defaults.headers.common['Authorization'] = localStorage.Authorization;
        },
        register() {
            this.$router.push('/register');
        }
    },
    beforeMount() {
        if (localStorage.Authorization != undefined) {
            axios.defaults.headers.common['Authorization'] = localStorage.Authorization;
            console.log('Found local storage Authorization');
            this.$router.push('/user');
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
