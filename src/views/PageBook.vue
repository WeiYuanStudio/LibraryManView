<template>
    <div>
        <el-row>
            <el-col>
                <el-card :body-style="{ padding: '10px' }">
                <img v-bind:src="bookInfo.coverImg" class="image">
                <div style="padding: 14px;">
                    <span> {{ bookInfo.title }} </span>
                    <div class="bottom clearfix">
                    <time class="time">{{ bookInfo.author }}</time>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
        <!--SaleBook-->
        <div v-if="saleBookList != null">
            <el-row>
                <ul>
                    <li class="saleBookPanel" v-for="(saleBook, index) in saleBookList" :key="index">
                        <el-card>
                            <div class="info-misc">
                                <h3>{{ saleBook.title }}</h3>
                                <div>Publish by user uid: {{ saleBook.uid}}</div>
                                <div>Price: {{ saleBook.price }} <i class="el-icon-coin"></i></div>
                                <div>{{ saleBook.intro }}</div>
                                <el-button type="text" class="button" @click="buy(saleBook.sbid)">点击购买</el-button>
                            </div>
                        </el-card>
                    </li>
                </ul>
            </el-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            bookInfo: null,
            saleBookList: null
        }
    },
    methods: {
        getBookInfo: function(getParams) {
            axios
                .get('/api/bookinfo', {params: getParams})
                .then(response => {
                    this.bookInfo = response.data;
                })
        },
        getSaleBookList: function(getParams) {
            axios
                .get('/api/salebook', {params: getParams})
                .then(response => {
                    this.saleBookList = response.data;
                })
        },
        buy: function(sbid) {
            window.console.log(sbid);
            this.$alert('购买啦🎉，快去订单查看吧', '购买成功', {
                confirmButtonText: '确定',
            });
        }
    },
    beforeMount() {
        this.getBookInfo({bid: this.$route.query.bid});
        this.getSaleBookList({bid: this.$route.query.bid});
    }
}
</script>

<style scoped>
.salebookinfo-panel {
    display: flex;
    flex-flow: row;
}

.info-misc {
    text-align: left;
    padding: 0px 10px;
}

.saleBookPanel {
    text-align: left;
    padding: 10px 10px;
}

ul {
    list-style-position: unset;
    list-style: none;
    padding: 0px;
    margin: 0px;
    margin-bottom: 3rem;
}
</style>
