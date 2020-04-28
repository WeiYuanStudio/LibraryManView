<template>
    <div>
    <div id="logo-l">Library Man</div>
        <el-row type="flex" class="row-bg" justify="center" id="login-input">
            <el-col :span="16">
                <el-input placeholder="User Name" v-model="username"></el-input>
                <el-input placeholder="Mail" v-model="mail"></el-input>
                <el-input placeholder="Password" v-model="password" show-password></el-input>
                <el-input placeholder="Password again" v-model="passwordAgain" show-password></el-input>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" id="login-button">
            <el-button type="primary" v-on:click="register">Register</el-button>
        </el-row>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data: function() {
        return {
            username: "",
            mail: "",
            password: "",
            passwordAgain: ""
        };
    },
    methods: {
        register() {
            axios({
                method: "post",
                url: "/api/user/info",
                data: {
                    userName: this.username,
                    mail: this.mail,
                    password: this.password
                }
            }).then(function(response) {
                if (response.data.statusCode == 200) {
                    this.$alert('注册成功啦🎉，现在带你去登录~', response.data.message, {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$router.push('/login');
                        }
                    });
                } else if (response.data.statusCode == 400) {
                    this.$alert('注册失败QWQ，换个用户名或者邮箱再试试吧~', response.data.message, {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.$router.push('/register');
                        }
                    });
                }
            }.bind(this)).catch(function (error) {
                window.console.log(error)
                window.alert('Login Failed');
            });
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

#logo-l {
    margin-top: 20vh;
    margin-bottom: 5vh;
    font-size: 3.5rem;
    font-weight: 500;
}

#login-input * {
    margin: 5px 0px;
}

#login-button * {
    margin: 2vh 5vw;
}
</style>
