<template>
  <div>
    <div>今天：{{todayNow | date-format}}</div>
    <div>昨天：{{yesterdayDate | date-format}}</div>
    <router-link to="/test">
      <el-button type="primary">去test页面</el-button>
    </router-link>
  </div>
</template>

<script>
	import {mapActions, mapGetters, mapState} from "vuex";
	import {GET_DATE} from "../../core/store/mutations";

	export default {
		computed: {
			...mapState({'todayNow': 'date'}),
			...mapGetters(['yesterdayDate']),
		},
		mounted() {
			this.$store.commit(GET_DATE, Date.now())
			this.$store.dispatch('threeHoursChangeDate')
		},
		methods: {
			...mapActions(['threeHoursChangeDate']),
		}
	}
</script>

<style scoped>

</style>
