<template>
  <div class="container">
    <!--    <img src="../../assets/logo.png" alt="">-->
    <!--    <div>这是主要页面</div>-->
    <header>Header</header>
    <div class="content">
      <aside>Aside</aside>
      <main>
        <el-button type="primary">主要按钮</el-button>
      </main>
    </div>
  </div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
  }

  header {
    height: 50px;
    background-color: lightgreen;
  }

  .content {
    display: flex;
    width: 100%;
    height: 100%;

    aside {
      width: 200px;
      height: 100%;
      background-color: lightblue;
    }

    main {
      flex: 1 0 auto;
      height: 100%;
      background-color: lightgray;
    }
  }
</style>
