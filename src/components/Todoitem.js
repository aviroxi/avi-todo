import { Card, Typography } from 'antd'
import React, { Component } from 'react'

const { Title } = Typography;

const cardcss = { 
  width: 600, margin: '10px 0px', background: '#292929', color: 'white' ,
  

}

export default class Todoitem extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <Card 
          title={
            <Title level={5} style={{ color: 'white' }}>
              Avi-Todo - 1
            </Title>}
          bordered={false}
          style={cardcss}
          extra={<Title level={5} style={{ color: 'white' }}>16-April-22 10:25 AM</Title>}>
          <p>{this.props.ptodo}</p>
        </Card>

      </div>
    )
  }
}
