<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">确认删除</el-button>

    <el-dialog
        title="删除确认"
        :visible.sync="dialogVisible"
        :modal="true"
        width="30%">
      <div class="delete-message">{{deleteMessage}}</div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
	export default {
		props: {
			deleteMsg: {
				type: String,
				default: '确认删除吗？'
			}
        },
		data() {
			return {
				dialogVisible: false,
				deleteMessage: this.deleteMsg
			};
		},
		methods: {
			confirm() {
				this.$emit('delete')
				this.dialogVisible = false
            }
		}
	}
</script>

<style lang="less" scoped>
  .delete-message {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
</style>
