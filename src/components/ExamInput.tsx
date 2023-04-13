import React, { useState } from 'react'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const ExamInput = () => {

  return (
    <div>
      <Input placeholder='Name' prefix={<UserOutlined/>} allowClear></Input>
      <Input placeholder='Password' maxLength={10} type='password' allowClear></Input>
      <Input placeholder='Block input' disabled={true}></Input>
      <Input.Search placeholder='Search'></Input.Search>
    </div>
  )
}