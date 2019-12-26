import React from 'react'
import { Card, Spin, Icon, Alert, Button } from 'antd'



export default class Loadings extends React.Component {
	state = {
		loading: true,
		size: 'default'
	}

	render() {
		return (
			<div>
				<Card title="spin" style={{ marginBottom: '20px' }}>
					<Spin size="small" style={{ marginRight: '20px' }}></Spin>
					<Spin size="large" style={{ marginRight: '20px' }}></Spin>
					<Spin></Spin>
				</Card>

				<Card title="内容遮罩" style={{ marginBottom: '20px' }}>
					<Alert message="aewgwed" description="welcome" type="warning"></Alert>
					<Spin tip="sadasdas">
						<Alert message="asdasd" description="welcome" type="info" ></Alert>

					</Spin>

				</Card>

			</div>
		)
	}
} 