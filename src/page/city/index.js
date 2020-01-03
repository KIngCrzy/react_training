import React from 'react'
import { Card, Button, Form, message, Input, InputNumber, Checkbox, Radio, Select, Switch, DatePicker, Table, Modal } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'


export default class City extends React.Component {
	state = {
		list: [],
		isShowOpenCity: false
	}
	params = {
		page: 1
	}

	componentDidMount() {
		this.requestList()
	}

	requestList = () => {
		axios.ajax({
			url: '/open_city',
			data: {
				params: {
					page: this.params.page
				}
			}
		}).then((res) => {
			let list = res.result.item_list.map((item, index) => {
				item.key = index;
				return item;
			});
			this.setState({
				list: list,
				pagination: Utils.pagination(res, (current) => {
					this.params.page = current;
					this.requestList();
				})
			})
		})
	}

	handleOpenCity = () => {
		this.setState({
			isShowOpenCity: true
		})

	}

	handleSubmit = () => {
		let cityInfo = this.cityForm.props.form.getFieldsValue()
		console.log(cityInfo);



	}

	render() {

		const columns = [
			{
				title: '城市id',
				dataIndex: 'id',
				key: 'id',
			},
			{
				title: '城市名称',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: '用车模式',
				dataIndex: 'mode',
				key: 'mode',
				render(mode) {
					return mode == 1 ? '停车点' : '禁停区'
				}
			},
			{
				title: '营运模式',
				dataIndex: 'op_mode',
				key: 'op_mode',
				render(op_mode) {
					return op_mode == 1 ? '自营' : '加盟'
				}
			},
			{
				title: '授权加盟商',
				dataIndex: 'franchisee_name',
				key: 'franchisee_name',
			},
			{
				title: '城市管理员',
				dataIndex: 'city_admins',
				key: 'city_admins',
				render(arr) {
					return arr.map((item) => {
						return item.user_name
					}).join(',')
				}

			},
			{
				title: '城市开通时间',
				dataIndex: 'open_time',
				key: 'open_time',
			},
			{
				title: '操作时间',
				dataIndex: 'update_time',
				key: 'update_time',
			},
			{
				title: '操作人',
				dataIndex: 'sys_user_name',
				key: 'sys_user_name',
			},
		];

		return (
			<div>
				<Card>
					<FilterForm></FilterForm>
				</Card>

				<Card>
					<Button type="primary" onClick={() => this.handleOpenCity()}>开通城市</Button>
				</Card>

				<Modal title="开通城市"
					visible={this.state.isShowOpenCity}
					onCancel={() => { this.setState({ isShowOpenCity: false }) }}
					onOk={() => { this.handleSubmit() }}
				>
					<OpenCityForm wrappedComponentRef={(info) => { this.cityForm = info }}></OpenCityForm>

				</Modal>

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

				<Form.Item label='用车模式' >
					{
						getFieldDecorator('mode', {
							initialValue: "1"

						})
							(
								<Select style={{ width: '140px' }}>
									<Option value="1">全部</Option>
									<Option value="2">指定停车点模式</Option>
									<Option value="3">禁停区模式</Option>

								</Select>
							)
					}

				</Form.Item>

				<Form.Item label='营运模式' >
					{
						getFieldDecorator('op_mode', {
							initialValue: "1"
						})
							(
								<Select style={{ width: '100px' }}>
									<Option value="1">全部</Option>
									<Option value="2">自营</Option>
									<Option value="3">加盟</Option>
								</Select>
							)
					}

				</Form.Item>

				<Form.Item label='加盟商授权状态' >
					{
						getFieldDecorator('auth_status', {
							initialValue: "1"
						})
							(
								<Select style={{ width: '100px' }}>
									<Option value="1">全部</Option>
									<Option value="2">已授权</Option>
									<Option value="3">未授权</Option>
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

class OpenCityForm extends React.Component {

	render() {
		const { getFieldDecorator } = this.props.form
		const { Option } = Select;
		const formItemLayout = {
			labelCol: {
				xs: 24,
				sm: 4
			},
			wrapperCol: {
				xs: 24,
				sm: 18
			}
		}

		return (
			<Form layout="horizontal">
				<Form.Item label='选择城市' {...formItemLayout}>
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

				<Form.Item label='营运模式' {...formItemLayout}>
					{
						getFieldDecorator('op_mode', {
							initialValue: "1"
						})
							(
								<Radio.Group>
									<Radio value="1">自营</Radio>
									<Radio value="2">加盟</Radio>
								</Radio.Group>
							)
					}

				</Form.Item>

				<Form.Item label='用车模式' {...formItemLayout}>
					{
						getFieldDecorator('mode', {
							initialValue: "1"

						})
							(
								<Radio.Group>
									<Radio value="1">指定停车点模式</Radio>
									<Radio value="2">禁停区模式</Radio>
								</Radio.Group>
							)
					}

				</Form.Item>

			</Form>
		)
	}
}
OpenCityForm = Form.create({})(OpenCityForm)

