import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'

export const ExamForm = () => {

  // Event
  const onFinishForm = (event: any) => {
    console.log(event);
  }

  return (
    <div>
      <Form onFinish={onFinishForm}>
        <Form.Item label='User Name' name='username'>
          <Input placeholder='User name' required></Input>
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input.Password placeholder='Password' required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block  >Log In</Button>
        </Form.Item>
      </Form>
    </div>
  )
}