export default {
	yesterdayDate (state) {
		return state.date - 24 * 60 * 60 *1000
	},
}
