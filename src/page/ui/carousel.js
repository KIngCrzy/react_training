import React from 'react'
import { Card, Button, Carousel } from 'antd'
import './ui.less'



export default class Carousels extends React.Component {

	render() {
		return (
			<div>
				<card>
					<Carousel autoplay>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
					</Carousel>,

				</card>

			</div>
		)
	}
} 