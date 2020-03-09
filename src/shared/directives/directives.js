import Vue from 'vue'

Vue.directive('delete-confirm', {
	bind: function (el, binding) {
		el.addEventListener('click', function () {
			binding.value.alert('是否确认删除', '删除', {
				confirmButtonText: '确定',
				callback: () => {
					binding.value.message({
						type: 'success',
						message: '已成功删除'
					});
				}
			})
		})
	}
})
