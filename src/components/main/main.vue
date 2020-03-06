<template>
  <div class="container">
    <header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/main">口袋妖怪</el-menu-item>
        <el-menu-item index="/test">测试页面</el-menu-item>
      </el-menu>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '/main',
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
  .el-menu.el-menu--horizontal {
    border: none;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  header {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 60px;
    border-bottom: 1px solid #dddddd;
  }

  main {
      width: 100vw;
      height: calc(100vh - 62px);
      overflow: auto;
    }
</style>
