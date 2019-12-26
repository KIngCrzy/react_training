import React from 'react'
import { Card, notification, Alert, Button } from 'antd'



export default class Notifications extends React.Component {

	handleNotification = (type, placement) => {
		if (placement) {
			notification.config({
				placement,
			})
		}
		notification[type]({
			message: 'Notification Title',
			placement,
			description:
				'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
		});

	}

	render() {
		return (
			<div>
				<Card title="notifications" style={{ marginBottom: '20px' }}>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleNotification('success') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleNotification('warning') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleNotification('info') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleNotification('error') }}>
						sadasdasd
					</Button>
				</Card>

				<Card title="notifications" style={{ marginBottom: '20px' }}>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleNotification('success', 'topLeft') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleNotification('warning', 'topRight') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleNotification('info', 'bottomLeft') }}>
						sadasdasd
					</Button>
					<Button type="primary" style={{ marginRight: '20px' }} onClick={() => { this.handleNotification('error', 'bottomRight') }}>
						sadasdasd
					</Button>
				</Card>

			</div>
		)
	}
} 