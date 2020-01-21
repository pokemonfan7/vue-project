import {GET_DATE} from './mutations'

export default {
	async threeHoursChangeDate({commit, state}) {
		await new Promise((resolve) => {
			setTimeout(function () {
				resolve()
			}, 3000)
		})
		commit(GET_DATE, state.date + 3 * 60 * 60 *1000)
	}
}
