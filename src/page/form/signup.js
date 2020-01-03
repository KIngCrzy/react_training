import React from 'react'
import { Card, Button, Form, message, Input, InputNumber, Checkbox, Radio, Select, Switch, DatePicker } from 'antd'
import moment from 'moment'

class Signups extends React.Component {
	state = {}

	handleSubmit = () => {
		// this.props.form.validateFields((err, values) => {
		// 	if (!err) {
		// 		console.log('数据:', values);
		// 	}
		// });
		let userInfo = this.props.form.getFieldsValue();
		console.log(JSON.stringify(userInfo))

	}

	render() {
		const { getFieldDecorator } = this.props.form
		const formItemLayout = {
			labelCol: {
				xs: 24,
				sm: 4
			},
			wrapperCol: {
				xs: 24,
				sm: 8
			}
		}

		const offsetLayout = {
			wrapperCol: {
				xs: 24,
				sm: {
					span: 8,
					offset: 4
				}
			}
		}
		const { Option } = Select;
		const Textarea = Input.TextArea

		return (
			<div>
				<Card title="注册表单">
					<Form layout="horizontal" style={{ marginTop: '20px' }}>
						<Form.Item label="用户名" {...formItemLayout}>
							{
								getFieldDecorator('username', {
									initialValue: 'JACK',
									rules: [{
										required: true,
										message: '用户名不能为空'
									}]
								})(
									<Input placeholder="用户名">
									</Input>
								)
							}

						</Form.Item>

						<Form.Item label="密码" {...formItemLayout}>
							{
								getFieldDecorator('password', {
									initialValue: '',
									rules: [{
										required: true,
									}]
								})(
									<Input type="password" placeholder="密码">
									</Input>
								)
							}
						</Form.Item>

						<Form.Item label="性别" {...formItemLayout}>
							{
								getFieldDecorator('gender', {
									initialValue: '1',
									rules: []
								})(
									<Radio.Group>
										<Radio value="1">男</Radio>
										<Radio value="2">女</Radio>
									</Radio.Group>

								)
							}
						</Form.Item>

						<Form.Item label="年龄" {...formItemLayout}>
							{
								getFieldDecorator('age', {
									initialValue: 18,
									rules: []
								})(
									<InputNumber>
									</InputNumber>
								)
							}
						</Form.Item>

						<Form.Item label="当前状态" {...formItemLayout}>
							{
								getFieldDecorator('status', {
									initialValue: '2',
									rules: []
								})(
									<Select>
										<Option value="1">东</Option>
										<Option value="2">南</Option>
										<Option value="3">西</Option>
										<Option value="4">北</Option>
									</Select>
								)
							}
						</Form.Item>

						<Form.Item label="爱好" {...formItemLayout}>
							{
								getFieldDecorator('hobby', {
									rules: []
								})(
									<Select mode="multiple">
										<Option value="1">吃饭</Option>
										<Option value="2">睡觉</Option>
										<Option value="3">打豆豆</Option>
									</Select>
								)
							}
						</Form.Item>

						<Form.Item label="婚姻状态" {...formItemLayout}>
							{
								getFieldDecorator('marrige', {
									valuePropName: 'checked',
									initialValue: true
								})(
									<Switch />
								)
							}
						</Form.Item>

						<Form.Item label="生日" {...formItemLayout}>
							{
								getFieldDecorator('birthday', {
									initialValue: moment('2019-10-20'),
									rules: []
								})(
									<DatePicker
										showTime
										format="YYYY-MM-DD HH:mm:ss">
									</DatePicker>
								)
							}
						</Form.Item>

						<Form.Item label="联系地址" {...formItemLayout}>
							{
								getFieldDecorator('address', {
									initialValue: '北京',
									rules: []
								})(
									<Textarea>
									</Textarea>
								)
							}
						</Form.Item>

						<Form.Item {...offsetLayout}>
							{
								getFieldDecorator('agree', {
									initialValue: true,
									valuePropName: 'checked',
									rules: []
								})(
									<Checkbox>我已同意<a href="#">协议</a></Checkbox>
								)
							}
						</Form.Item>

						<Form.Item {...offsetLayout}>

							<Button onClick={this.handleSubmit}>注册</Button>
						</Form.Item>
					</Form>

				</Card>

			</div >
		)
	}
}
export default Form.create()(Signups)