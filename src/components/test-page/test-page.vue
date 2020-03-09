<template>
  <div>
    <div>今天：{{todayNow | date-format}}</div>
    <div>昨天：{{yesterdayDate | date-format}}</div>
    <el-button
        type="primary"
        v-delete-confirm="{alert: $alert, message: $message}">测试指令</el-button>
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
