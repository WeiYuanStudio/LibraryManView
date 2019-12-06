<template>
    <div>
        <div v-if="userinfo == null" id="infobar">
            Plese Login
        </div>
        <div v-else id="infobar">
            <img id="avatar" v-bind:src="userinfo.avatar"/>
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
        }
    },
    beforeMount() {
        this.get_userinfo();
    }
};
</script>

<style scoped>

#infobar {
    display: flex;
    flex-direction: row;
    border-top: solid 1px gray;
    border-bottom: solid 1px gray;
}

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
