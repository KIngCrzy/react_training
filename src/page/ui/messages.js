import React from 'react'
import { Card, message, Button } from 'antd'



export default class Messages extends React.Component {

	handleMessage = (type) => {
		message[type]({
			content: 'Notification Title',
		});
	}


	render() {
		return (
			<div>
				<Card title="全局提示框" style={{ marginBottom: '20px' }}>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleMessage('success') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleMessage('warning') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleMessage('info') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleMessage('error') }}>
						sadasdasd
					</Button>
				</Card>

			</div>
		)
	}
} 