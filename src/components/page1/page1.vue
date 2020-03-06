<template>
  <div>
    <div>今天：{{todayNow | date-format}}</div>
    <div>昨天：{{yesterdayDate | date-format}}</div>
    <router-link to="/test">
      <el-button type="primary">去test页面</el-button>
    </router-link>
    <ul class="list-content">
      <li class="item-list" v-for="pokemon of pkmData" :key="pokemon.id">
        <pkm-item :pokemon="pokemon"></pkm-item>
      </li>
    </ul>
  </div>
</template>

<script>
	import {mapActions, mapGetters, mapState} from "vuex";
	import {GET_DATE} from "../../core/store/mutations";
	import PkmItem from "../../shared/component/pkmItem";
	import {pkmGen1Data} from "../../core/pkmData";

	export default {
		data: function() {
			return {
				pkmData: pkmGen1Data
            }
        },
		components: {PkmItem},
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
