<template>
    <div id="login-panel">
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
        <button v-on:click="login">Log in</button>
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
                document.cookie = response.data; //Fix cookie set
            });
        }
    }
};
</script>
<style scoped>
#login-panel {
    display: flex;
    flex-flow: column;

}

#login-panel table {
    width: 50vw;
    margin: auto;
}

#login-panel button {
    width: 20vw;
    margin: auto;
}
</style>
