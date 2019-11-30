<template>
  <div id="page-frame">
    <div id="main-frame">
      <div id="logo-l">
        Library Man
      </div>
      <SearchBar></SearchBar>
    </div>
    <div id="bottom-bar">
      <div id="home" class="bar-item">
        <font-awesome-icon icon="home" size="lg"></font-awesome-icon>
        <span>Home</span>
      </div>
      <div id="discover" class="bar-item">
        <font-awesome-icon icon="star" size="lg"></font-awesome-icon>
        <span>Discover</span>
      </div>
      <div id="book-list" class="bar-item">
        <font-awesome-icon icon="book" size="lg"></font-awesome-icon>
        <span>Book List</span>
      </div>
      <div id="user" class="bar-item">
        <font-awesome-icon icon="user" size="lg"></font-awesome-icon>
        <span>User</span>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'page-frame',
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

#main-frame {
  flex: 1;
}

.bar-item {
  align-items: center;
  line-height: 1rem;
  margin: auto;
  margin-bottom: 0px;
  display: flex;
  flex-flow: column;
}

.bar-item span {
  padding: 2px;
  font-size: 0.8rem;
}

#bottom-bar {
  border-top: solid 1px gray;
  position: fixed;
  width: 100%;
  height: 3rem;
  bottom: 0px;
  display: flex;
}

#page-frame {
  display: flex;
  flex-direction: column;
}
</style>
