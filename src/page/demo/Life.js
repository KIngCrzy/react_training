import React from 'react'
import { Button } from 'antd'

export default class Life extends React.Component {

	state = {
		count: 0
	}

	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		}
		)
	}

	render() {
		return (
			<div>
				<p>撒大苏打大撒</p>
				<Button onClick={this.handleClick}>点击一下</Button>
				<p>{this.state.count}</p>
			</div>
		)
	}
}