<template>
  <div>
    <div>今天：{{todayNow | dateFormat}}</div>
    <div>昨天：{{yesterdayDate | dateFormat}}</div>
    <div class="btn-group mr-2">
      <el-button
          type="primary"
          v-delete-confirm="{alert: $alert, message: $message}">测试指令</el-button>
      <delete-btn class="delete-btn" v-on:delete="deleteItem"></delete-btn>
    </div>
  </div>
</template>

<script>
	import {mapActions, mapGetters, mapState} from "vuex";
	import {GET_DATE} from "../../core/store/mutations";
	import deleteBtn from "../../shared/component/delete-btn";

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
			deleteItem: function () {
				alert('父组件接收到了删除确认的信息')
			}
		},
        components: {deleteBtn}
	}
</script>

<style lang="less" scoped>
  .btn-group {
    display: flex;

    .delete-btn {
      margin-left: 10px;
    }
  }
</style>
