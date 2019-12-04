<template>
    <div id="search-bar">
        <form id="query-panel">
            <input id="query-input" type="text" v-bind:placeholder="holder_info" v-model="title" />
            <input id="query-submit" type="submit" value="Search" v-on:click="search_book" />
        </form>
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
$base-width: 0.8; //搜索框总长度

input {
    padding: 10px 5px;
    border-radius: 5px;
    border: solid 2px gray;
    margin: 5px;
    -webkit-appearance: none;
}

#query-input {
    width: 80% * $base-width;
}

#query-submit {
    width: 20% * $base-width;
}
</style>
