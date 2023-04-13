import React, { useState } from 'react'
import { Button } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'

export const ExamButton = () => {

  // State
  const [loading, setLoading] = useState(false);

  // Event
  const onClickButton = (event: any) => {
    console.log("Button click")
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <Button type="link" href='https://www.google.com'>Link Button</Button>
      <Button
        type="primary"
        icon={<PoweroffOutlined/>}
        block
        loading={loading}
        onClick={onClickButton}
        style={{backgroundColor:'orange', color:'red'}}
      >
        Block Button
      </Button>
    </div>
  )
}