import Vue from 'vue'
import format from 'date-fns/format'
Vue.filter('date-format', function (value, formatStr='yyyy-mm-dd HH:mm:ss') {
	return format(value, formatStr)
})
