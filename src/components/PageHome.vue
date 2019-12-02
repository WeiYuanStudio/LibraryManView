<template>
  <div id="page-frame">
    <div id="logo-l">Library Man</div>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
export default {
  components: {
    SearchBar
  }
};
</script>

<style scoped>
#logo-l {
  margin-top: 20vh;
  margin-bottom: 5vh;
  font-size: 3.5rem;
  font-weight: 500;
}
</style>
