<template>
    <div>
        <div v-if="books== null">
            Book not found
        </div>
        <div v-else>
            <ul id="book-ulist">
                <li v-for="(book, index) in books" :key="index">
                    <el-card>
                        <router-link class="bookinfo-panel" :to="{path: '/bookinfo', query: {bid: book.bid}}">
                            <el-image style="width: 100px; height: 100px" :src="book.coverImg" :fit="fit"/>
                            <div class="info-misc">
                                <h3>{{ book.title }}</h3>
                                <div>{{ book.publisher }}</div>
                                <div>{{ book.author }}</div>
                                <div>{{ book.publish_date }}</div>
                            </div>
                        </router-link>
                    </el-card>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            books: [Object]
        };
    },
    mounted() {
        let query_title = this.$route.query.title; //Get query title parameter
        if (!query_title) { //if param null, turn to home
            this.$router.push({ path: "/" });
        }
        axios
            .get(('/api/books'), {params: {title: query_title}})
            .then(response => (this.books = response.data))
    }
};
</script>

<style scoped>
#book-ulist li {
    margin: 2vh 2vw;
}

.bookinfo-panel {
    display: flex;
    flex-flow: row;
}

.bookinfo-panel img {
    width: auto;
	height: auto;
    max-width: 30vw;
}

.bookinfo-panel img::after {
    content: "";
    width: auto;
	height: auto;
    max-width: 30vw;
    position: absolute;
    background-color: gray;
}

.info-misc {
    text-align: left;
    padding: 0px 10px;
}

.info-misc h3 {
    margin: 0;
}

a {
    text-decoration: none;
    text-decoration-color: black;
    color: #000;
}

.router-link-active {
    text-decoration: none;
}

ul {
    list-style-position: unset;
    list-style: none;
    padding: 0px;
    margin: 0px;
    margin-bottom: 3rem;
}
</style>
