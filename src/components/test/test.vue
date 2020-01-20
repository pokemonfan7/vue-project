<template>
  <div>
    <span @click="toggleSeen">{{name}}</span>
    <div v-bind:title="name">hahaha</div>
    <div>{{total}}</div>
    <div v-if="seen">you see me</div>
    <div v-for="num in nums" v-bind:key="num">{{num}}</div>
  </div>
</template>

<script>
	export default {
		data: function () {
			return {
				name: 'luca',
				total: 1,
				seen: true,
				nums: [2, 4, 6, 8, 10]
			}
		},
		methods: {
			toggleSeen: function () {
				this.seen = !this.seen
				this.nums = [1, 3, 5, 7, 9]
			}
		},
		mounted() {
			const that = this
			setInterval(function () {
				that.total++
			}, 1000)
		}
	}
</script>

<style scoped>

</style>
