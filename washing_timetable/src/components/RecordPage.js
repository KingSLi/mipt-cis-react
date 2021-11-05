import React, { Component } from 'react'
import { Form, Input, Button, Typography } from 'antd';
import moment from 'moment';
import { DatePicker } from 'antd';
import FormView from './FormView';


export class RecordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null, 
      time: null
    }
  }

  render() {
    const onFinish = (values) => {
      this.setState(values)
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div class='record-container'>
        <Typography.Title >Записаться на стирку!</Typography.Title>
        <Typography.Paragraph>Здесь вы можете записаться на стирку. Введите имя и время стирки. Счастливых вам чистых стирок!!!</Typography.Paragraph>
        <Form
          name="basic"
          labelCol={{ span: 25 }}
          wrapperCol={{ span: 25 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
              label="Ваше имя: "
              name="name"
              wrapperCol={{ span: 10 }}
              rules={[{ required: true, message: 'Введите ваше имя!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
              label="Выберите время: "
              name="time"
              rules={[{ required: true, message: 'Выберите время' }, ]}
          > 
            <DatePicker
                format="YYYY-MM-DD HH:mm"
                showToday={false}
                showNow={false}
                disabledDate={(current) => { return current && current < moment().startOf('day') }}
                showTime={{ 
                    minuteStep: 30 
                }}           
            /> 
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">Записаться!</Button>
          </Form.Item>
        </Form>

        <FormView name={ this.state.name } time={ this.state.time }/>          
      </div>
    )
  }
}

export default RecordPage
