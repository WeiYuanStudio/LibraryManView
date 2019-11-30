<template>
  <div id="search-bar">
    <form id="query-panel">
      <input id="query-input" type="text" :placeholder="holder_info" />
      <input id="query-submit" type="submit" value="Search" />
    </form>
  </div>
</template>
<script>
export default {
  name: "search-bar",
  data: function() {
    return {
      holder_info: "Search your book title"
    };
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
