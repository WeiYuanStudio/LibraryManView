<template>
    <div id="login-panel">
    <div id="logo-l">Library Man</div>
        <table>
            <tr>
                <td>Username:</td>
                <td>
                    <input type="username" v-model="username" />
                </td>
            </tr>
            <tr>
                <td>Password:</td>
                <td>
                    <input type="password" v-model="password" />
                </td>
            </tr>
        </table>
        <div>
            <button v-on:click="register">Register</button>
            <button v-on:click="login">Log in</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
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
}

#logo-l {
  margin-top: 20vh;
  margin-bottom: 5vh;
  font-size: 3.5rem;
  font-weight: 500;
}

#login-panel td {
    padding: 5px 10px;
}

#login-panel input {
    padding: 10px 5px;
    border-radius: 5px;
    border: solid 2px gray;
    margin: 5px;
    -webkit-appearance: none;
}

#login-panel table {
    width: 50vw;
    margin: auto;
}

#login-panel button {
    width: 20vw;
    padding: 10px 5px;
    border-radius: 5px;
    border: solid 2px gray;
    margin: 10px 20px;
}
</style>
