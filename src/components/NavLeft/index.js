import React from 'react'
import { Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu


export default class NavLeft extends React.Component {

	componentWillMount() {
		const MenuTreeNode = this.renderMenu(MenuConfig)
		this.setState({
			MenuTreeNode
		})

	}
	// 菜单渲染
	renderMenu = (data) => {
		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{this.renderMenu(item.children)}
					</SubMenu>
				)
			}
			return <Menu.Item title={item.title} key={item.key}>
				<NavLink to={item.key}>{item.title}</NavLink>
			</Menu.Item>
		})

	}

	render() {
		return (
			<div>
				<div className="logo">
					<img src="/assets/logo-ant.svg" alt=""></img>
					<h1>sadasdas</h1>
					<Menu theme="dark">
						{this.state.MenuTreeNode}
					</Menu>
				</div>
			</div>
		)
	}
} 