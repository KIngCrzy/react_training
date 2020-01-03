import React from 'react'
import { Card, Button, Form, message, Radio, Select, Switch, DatePicker, Table, Modal } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'
const { RangePicker } = DatePicker


export default class Order extends React.Component {
	state = {}
	params = {
		page: 1
	}
	componentDidMount() {
		this.requestList()
	}

	handleOrderDetail = () => {
		let item = this.state.selectedItem;
		if (!item) {
			Modal.info({
				title: '信息',
				content: '请先选择一条订单'
			})
			return;
		}
		window.open(`/#/common/order/detail/${item.id}`, '_blank')

	}

	requestList = () => {
		axios.ajax({
			url: '/order/list',
			data: {
				params: this.params
			}
		}).then((res) => {
			let list = res.result.item_list.map((item, index) => {
				item.key = index;
				return item;
			});
			this.setState({
				list,
				pagination: Utils.pagination(res, (current) => {
					this.params.page = current;
					this.requestList();
				})
			})
		})
	}

	render() {
		const columns = [
			{
				title: '订单编号',
				dataIndex: 'order_sn'
			},
			{
				title: '车辆编号',
				dataIndex: 'bike_sn'
			},
			{
				title: '用户名',
				dataIndex: 'user_name'
			},
			{
				title: '手机号',
				dataIndex: 'mobile'
			},
			{
				title: '里程',
				dataIndex: 'distance',
				render(distance) {
					return distance / 1000 + 'Km';
				}
			},
			{
				title: '行驶时长',
				dataIndex: 'total_time'
			},
			{
				title: '状态',
				dataIndex: 'status'
			},
			{
				title: '开始时间',
				dataIndex: 'start_time'
			},
			{
				title: '结束时间',
				dataIndex: 'end_time'
			},
			{
				title: '订单金额',
				dataIndex: 'total_fee'
			},
			{
				title: '实付金额',
				dataIndex: 'user_pay'
			}
		]

		return (
			<div>
				<Card>
					<FilterForm></FilterForm>
				</Card>
				<Card>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={this.handleOrderDetail}>订单详情</Button>
					<Button type="primary" >结束订单</Button>

				</Card>
				<Table
					bordered
					columns={columns}
					dataSource={this.state.list}
					pagination={this.state.pagination}
				></Table>

			</div >
		)
	}
}

class FilterForm extends React.Component {



	render() {
		const { getFieldDecorator } = this.props.form
		const { Option } = Select;
		function onChange(date, dateString) {
			console.log(date, dateString);
		}

		return (
			<Form layout="inline">
				<Form.Item label='城市' >
					{
						getFieldDecorator('city', {
							initialValue: "1"

						})
							(
								<Select style={{ width: '100px' }}>
									<Option value="1">全部</Option>
									<Option value="2">天津市</Option>
									<Option value="3">北京市</Option>


								</Select>
							)
					}

				</Form.Item>

				<Form.Item >
					{
						getFieldDecorator('mode', {

						})
							(
								<RangePicker onChange={onChange} />
							)
					}

				</Form.Item>

				<Form.Item label='订单状态' >
					{
						getFieldDecorator('op_mode', {
							initialValue: "1"
						})
							(
								<Select style={{ width: '100px' }}>
									<Option value="1">全部</Option>
									<Option value="2">进行中</Option>
									<Option value="3">结束行程</Option>
								</Select>
							)
					}

				</Form.Item>

				<Form.Item >

					<Button type="primary">
						查询
					</Button>


				</Form.Item >

				<Form.Item >

					<Button type="primary">
						重置
					</Button>

				</Form.Item>

			</Form>
		)
	}
}
FilterForm = Form.create({})(FilterForm)
