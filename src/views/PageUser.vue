<template>
    <div>
        <div v-if="uid == 0" id="infobar">
            <el-alert title="You are not logged in yet !" type="warning" close-text="Go login" @close="to_login">
            </el-alert>
        </div>
        <div v-else id="infobar">
            <el-col>
                <el-row justify="center">
                    <el-avatar shape="square" :size="100" :src="avatarLink"></el-avatar>
                </el-row>
                <div id="userinfobar">
                    <div id="username">Welcome, {{ userName }}</div>
                    <div>邮箱：{{ mail }}，UID：{{ uid }}</div>
                    <div>书币： {{ bookCoin }}</div>
                    <div>用户组：{{ userGroup }}</div>
                </div>
                <el-col>
                    <div v-for="(menuItem, index) in menu" :key="index" v-on:click="$router.push(menuItem.link)">
                        <el-card class="nav-card" shadow="never">
                            {{ menuItem.title }}
                        </el-card>
                    </div>
                </el-col>
            </el-col>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            uid: 0,
            userName: '',
            bookCoin: 0,
            mail: '',
            avatarLink: '',
            userGroup: '',
            menu: [
                {
                    title: '更改个人信息',
                    link: ''
                },
                {
                    title: '全部订单',
                    link: ''
                },
                {
                    title: '提交书籍信息',
                    link: '/user/submit-book'
                },
                {
                    title: '发布资源',
                    link: '/user/submit-sale'
                },
                {
                    title: '问题反馈',
                    link: ''
                }
            ]
        }
    },
    methods: {
        get_userinfo: function() {
            axios
                .get('/api/my')
                .then((response) => {
                    this.uid = response.data.id;
                    this.userName = response.data.userName;
                    this.bookCoin = response.data.bookCoin;
                    this.mail = response.data.mail;
                    this.avatarLink = response.data.avatar;
                    this.userGroup = response.data.userGroup;
                })
        },
        to_login: function() {
            this.$router.push('/login')
        }
    },
    beforeMount() {
        this.get_userinfo();
    }
};
</script>

<style scoped>
#infobar {
    margin: 10px 10px;
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

.nav-card {
    margin: 10px 5px;
}
</style>
