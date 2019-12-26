import React from 'react'
import { Card, Tabs, message, Icon } from 'antd'
const TabPane = Tabs.TabPane



export default class Tab extends React.Component {

	callback = (key) => {
		message.info("asdada" + key);

	}

	render() {
		return (

			<div>
				<Card title="Tabs" style={{ marginBottom: '20px' }}>
					<Tabs defaultActiveKey="1" onChange={this.callback}>
						<TabPane tab="Tab 1" key="1">dasdwaf</TabPane>
						<TabPane tab="Tab 2" key="2">dasdwaf</TabPane>
						<TabPane tab="Tab 3" key="3">dasdwaf</TabPane>

					</Tabs>
				</Card>

				<Card title="带页签的" style={{ marginBottom: '20px' }}>
					<Tabs defaultActiveKey="1" onChange={this.callback}>
						<TabPane tab={<span><Icon type="edit"></Icon>Tab 1</span>} key="1">dasdwaf</TabPane>
						<TabPane tab="Tab 2" key="2">dasdwaf</TabPane>
						<TabPane tab="Tab 3" key="3">dasdwaf</TabPane>

					</Tabs>
				</Card>

			</div>
		)
	}
} 