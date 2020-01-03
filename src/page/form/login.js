import React from 'react'
import { Card, Input, Form, Button, message, Icon } from 'antd'


class Logins extends React.Component {
	handleSubmit = () => {
		// let userinfo = this.props.form.getFieldValue()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				message.success(values.password);
			}
		})


	}

	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<div>
				<Card >
					<Form layout="inline" >
						<Form.Item >
						</Form.Item>
						<Form.Item >
							<Input placeholder="密码">
							</Input>
						</Form.Item>
						<Form.Item>
							<Button htmlType="submit">登陆</Button>
						</Form.Item>
					</Form>
				</Card>

				<Card >
					<Form layout="horizontal" style={{ marginTop: '20px' }}>
						<Form.Item >
							{
								getFieldDecorator('username', {
									initialValue: 'JACK',
									rules: [{
										required: true,
										message: '用户名不能为空'
									}]
								})(
									<Input prefix={<Icon type='user'></Icon>} placeholder="用户名">
									</Input>
								)
							}

						</Form.Item>

						<Form.Item >
							{
								getFieldDecorator('password', {
									initialValue: '123456',
									rules: []
								})(
									<Input prefix={<Icon type='lock'></Icon>} placeholder="密码">
									</Input>
								)
							}
						</Form.Item>
						<Form.Item>
							<Button onClick={this.handleSubmit}>登陆</Button>
						</Form.Item>
					</Form>
				</Card>

			</div >
		)
	}
}
export default Form.create()(Logins)