import React, { useState } from 'react'
import { Alert, Button, message } from 'antd'

export const ExamNotify = () => {
  
  // State
  const [showAlert, setShowAlert] = useState(false);

  // Event
  const onClickSuccess = () => message.success("Click success");
  const onClickError = () => message.error("Click error");
  const onClickWarning = () => message.warning("Click warning");

  const onClickAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div>
      <Button onClick={onClickSuccess}>Message Success</Button>
      <Button onClick={onClickError}>Message error</Button>
      <Button onClick={onClickWarning}>Message warning</Button>

      <Button onClick={onClickAlert}>Alert</Button>
      {
        showAlert && <Alert type='error' message="Lỗi alert" description="Lỗi đăng nhập phần mềm" closable></Alert>
      }
    </div>
  )
}