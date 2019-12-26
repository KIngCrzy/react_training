import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'



export default class Buttons extends React.Component {
	state = {
		loading: true,
		size: 'default'
	}

	handleCloseLoading = () => {
		this.setState({
			loading: !this.state.loading
		})
	}

	handleChange = (e) => {
		this.setState({
			size: e.target.value
		})
	}

	render() {
		return (
			<div>
				<Card style={{ marginBottom: '10px' }} title="基础按钮">
					<Button type="primary">IMASASD</Button>
					<Button type="dashed">IMASASD</Button>
					<Button type="danger">IMASASD</Button>
					<Button disabled>IMASASD</Button>
				</Card>

				<Card style={{ marginBottom: '10px' }} title="图形按钮">
					<Button icon="plus">创建</Button>
					<Button icon="edit" type="dashed">编辑</Button>
					<Button icon="delete" type="danger">删除</Button>
					<Button shape="circle" icon="search"></Button>
				</Card>

				<Card style={{ marginBottom: '10px' }} title="Loading按钮">
					<Button type="primary" loading={this.state.loading}>确定</Button>
					<Button shape="circle" type="primary" loading={this.state.loading}></Button>
					<Button loading={this.state.loading}>点击加载</Button>
					<Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
				</Card>

				<Card style={{ marginBottom: '10px' }} title="按钮组">
					<Button.Group>
						<Button type="primary" icon="left" style={{ marginRight: '0px' }}>返回</Button>
						<Button type="primary" icon="right">前进</Button>
					</Button.Group>
				</Card>

				<Card style={{ marginBottom: '10px' }} title="按钮尺寸">
					<Radio.Group value={this.state.size} onChange={this.handleChange}>
						<Radio value="small">小</Radio>
						<Radio value="default" >中</Radio>
						<Radio value="large">大</Radio>
					</Radio.Group>
					<Button size={this.state.size}>创建</Button>
					<Button size={this.state.size} type="dashed" >编辑</Button>
					<Button size={this.state.size} type="danger">删除</Button>
					<Button size={this.state.size} >asdasd</Button>
				</Card>

			</div>
		)
	}
} 