<template>
  <div class="container">
    <header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/main">处理中心</el-menu-item>
        <el-menu-item index="/test">测试页面</el-menu-item>
      </el-menu>
    </header>
    <div class="content">
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
			};
		},
		methods: {
			handleSelect(key) {
				if (this.$route.path !== key) {
					this.$router.push(key)
				}
			}
		}
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

    main {
      width: 100vw;
      height: calc(100vh - 62px);
      overflow: auto;
      background-color: #777;
    }
  }
</style>
