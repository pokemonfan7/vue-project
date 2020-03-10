import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('dateFormat', function (value, formatStr='yyyy-MM-dd HH:mm:ss') {
	return format(value, formatStr)
})

Vue.filter('upperFirst', function (text) {
	return text.slice(0, 1).toUpperCase() + text.slice(1)
})
