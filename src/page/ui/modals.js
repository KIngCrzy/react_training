import React from 'react'
import { Modal, Button } from 'antd'


export default class Modals extends React.Component {
	state = {
		loading: false,
		modal1: false,
		modal2: false,
	}

	showModal = (type) => {

		this.setState({
			[type]: true
		})
	}

	handleOk = (e) => {
		console.log(e);
		this.setState({
			loading: true
		})
		setTimeout(() => {
			this.setState({
				loading: false,
				modal2: false
			})
		}, 3000)
	}

	handleCancel = (type) => {
		this.setState({
			[type]: false
		})
	}

	render() {
		return (
			<div>
				<Button type="primary" onClick={() => this.showModal('modal1')}>Open Modal</Button>
				<Modal title="BASIC" visible={this.state.modal1}
					onOk={this.handleOk}
					onCancel={() => this.handleCancel('modal1')}
				>
					<p>dsadasd</p>
					<p>dsadasd</p>
				</Modal>

				<Button type="primary" onClick={() => this.showModal('modal2')}>自定义页脚</Button>
				<Modal title="dsadasd" visible={this.state.modal2}
					onCancel={() => this.handleCancel('modal2')}
					footer={[
						<Button key="back" onClick={() => this.handleCancel('modal2')}>
							back
						</Button>,
						<Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
							submit
					</Button>,
					]}
				>
					<p>sadasdasdasdasdasdad</p>
					<p>dsrqwgqwfgqwfqwfqd</p>
				</Modal>
			</div>
		)
	}
} 