import React, { useState } from 'react'
import { Button, Progress, Spin } from 'antd'

export const ExamLoading = () => {

  const [isSpin, setIsSpin] = useState(false);

  return (
    <div>
      <Spin spinning={isSpin}>
        <p>content loading 1</p>
        <p>content loading 2</p>
        <p>content loading 3</p>
      </Spin>
      <Button onClick={() => setIsSpin(!isSpin)}>Toogle Spin</Button>

      <Progress percent={33}></Progress>
      <Progress percent={33} type='circle'></Progress>
      <Progress percent={33} type='line' strokeColor='red' status='active'></Progress>
      <Progress percent={33} type='line' strokeColor='red' strokeWidth={50} status='active'></Progress>
      <Progress percent={33} type='circle' status='exception'></Progress>
      <Progress percent={33} type='circle' status='success'></Progress>
      <Progress percent={33} type='line' status='exception'></Progress>
      <Progress percent={33} type='line' status='success' steps={3}></Progress>
    </div>
  )
}