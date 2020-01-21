<template>
  <div class="container">
    <!--    <img src="../../assets/logo.png" alt="">-->
    <!--    <div>这是主要页面</div>-->
    <header>Header</header>
    <div class="content">
      <aside>Aside</aside>
      <main>
        <router-link to="/test">
          <el-button type="primary">去test页面</el-button>
        </router-link>
        <div>今天：{{todayNow | date-format}}</div>
        <div>昨天：{{yesterdayDate | date-format}}</div>
      </main>
    </div>
  </div>
</template>

<script>
	import {mapState, mapGetters, mapActions} from 'vuex'
    import {GET_DATE} from '../../core/store/mutations'

	export default {
		computed: {
			...mapState({'todayNow': 'date'}),
			...mapGetters(['yesterdayDate']),
		},
        mounted() {
			this.$store.commit(GET_DATE, Date.now())
            this.threeHoursChangeDate()
        },
        methods: {
			...mapActions(['threeHoursChangeDate'])
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
