<template>
    <div id="search-bar">
        <form>
            <input type="text" :placeholder="holder-info">
        </form>
    </div>
</template>
<script>
export default {
    name: 'search-bar'
}
</script>
<style scoped>
#search-bar {
    width: 100%;
}
</style>
