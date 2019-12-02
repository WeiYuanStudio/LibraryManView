<template>
  <div id="bottom-bar">
    <router-link to='./' id="home" class="bar-item">
      <font-awesome-icon icon="home" size="lg"></font-awesome-icon>
      <span>Home</span>
    </router-link>
    <router-link to='./discover' id="discover" class="bar-item">
      <font-awesome-icon icon="star" size="lg"></font-awesome-icon>
      <span>Discover</span>
    </router-link>
    <router-link to='./booklist' id="book-list" class="bar-item">
      <font-awesome-icon icon="book" size="lg"></font-awesome-icon>
      <span>Book List</span>
    </router-link>
    <router-link to='./user' id="user" class="bar-item">
      <font-awesome-icon icon="user" size="lg"></font-awesome-icon>
      <span>User</span>
    </router-link>
  </div>
</template>

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

a {
    text-decoration: none;
    text-decoration-color: black;
}

.router-link-active {
    text-decoration: none;
}

:link {
  color: #000;
}
</style>
