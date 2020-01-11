<template>
    <div id="search-bar">
        <el-col :span="19">
            <el-input v-bind:placeholder="holder_info" type="text" v-model="title" id="query-input" />
        </el-col>
        <el-button type="primary" icon="el-icon-search" v-on:click="search_book" />
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "search-bar",
    data: function() {
        return {
            holder_info: "Search your book by title",
            title: ""
        };
    },
    methods: {
        update_motto() {
            axios
                .get('/api/motto')
                .then(response => (this.holder_info = response.data));
        },
        search_book() {
            if (this.title) {
                this.$router.push({
                    path: './books',
                    query: { title: this.title }
                });
            }
        }
    },
    mounted() {
        this.update_motto();
    }
};
</script>
<style scoped lang="scss">
#search-bar {
    margin: 5%;
}
</style>
