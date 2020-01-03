export default {
	formateDate(time) {
		if (!time) return ''
		let date = new Date(time)
		return date.getFullYear() + '-' + (date.getMonth() + 1)
	},
	pagination(data, callback) {
		return {
			onChange: (current) => {
				callback(current)
			},
			current: data.result.page,
			pageSize: data.result.page_size,
			total: data.result.total_count,
			showTotal: () => {
				return `共${data.result.total_count}条`
			},
			showQuickJumper: true
		}
	},
}