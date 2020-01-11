<template>
    <div id="bottom-bar">
        <router-link to='/' id="home" class="bar-item">
            <i class="el-icon-house" />
            <span>Home</span>
        </router-link>
        <router-link to='/discover' id="discover" class="bar-item">
            <i class="el-icon-discover" />
            <span>Discover</span>
        </router-link>
        <router-link to='/favorite' id="favorite" class="bar-item">
            <i class="el-icon-collection" />
            <span>Favorite</span>
        </router-link>
        <router-link to='/user' id="user" class="bar-item">
            <i class="el-icon-user" />
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
  background-color: white;
  border-top: solid 1px gray;
  position: fixed;
  width: 100%;
  height: 2.8rem;
  bottom: 0px;
  display: flex;
}

a {
    text-decoration: none;
    text-decoration-color: black;
    color: #000;
}

.router-link-active {
    text-decoration: none;
}
</style>
