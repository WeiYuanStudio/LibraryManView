<template>
    <div>
        <div v-if="userinfo == null" id="infobar">
            <el-alert title="You are not logged in yet !" type="warning" close-text="Go login" @close="to_login">
            </el-alert>
        </div>
        <div v-else id="infobar">
            <el-row justify="center">
                <el-avatar shape="square" :size="100" :src="userinfo.avatar"></el-avatar>
            </el-row>
            <div id="userinfobar">
                <div id="username">Welcome back, {{ userinfo.name }}</div>
                <div>{{ userinfo.email }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            userinfo: null
        }
    },
    methods: {
        get_userinfo() {
            axios
                .get('/api/userinfo')
                .then((response) => (this.userinfo = response.data))
        },
        to_login() {
            this.$router.push('/login')
        }
    },
    beforeMount() {
        this.get_userinfo();
    }
};
</script>

<style scoped>
#userinfobar div {
    margin-bottom: 10px;
}

#userinfobar {
    text-align: left;
    margin: 10px 20px;
}

#username {
    font-size: 1.5em;
    font-weight: 600;
    user-select: none;
}

#avatar {
    border: solid 1px black;
    margin: 10px;
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
}
</style>
