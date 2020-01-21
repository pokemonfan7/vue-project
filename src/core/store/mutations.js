
export const GET_DATE = 'getDate'

export default {
	[GET_DATE](state, payload) {
		state.date = payload
	}
}
