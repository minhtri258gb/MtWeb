import { useState, useRef } from 'react'
import {
  Button,
  Form,
  Input,
  Modal,
  TimePicker,
  Rate,
  InputNumber,
} from 'antd'
import {
  SaveOutlined,
  CloseOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { MtInputTag } from '../../components/MtInputTag'
import './Music.css'
import dayjs from 'dayjs';

export default function MusicForm(props) {

  // Form
  const onOk = () => {
    props.onSave();
  }
  const onCancel = () => {
    props.onCancel();
  }
  const onFormFinish = () => {

  }

  const formRef = useRef(null);

  // Fill data
  formRef.current?.resetFields();
  formRef.current?.setFieldsValue({
    name: props.data?.name,
    duration: dayjs(props.data?.durationFx, 'm:ss'),
    rate: props.data?.rate,
    decibel: props.data?.decibel,
    tag: props.data?.tag,
  });

  // UI
  return (
    <Modal
      title="Music detail"
      open={props.data != null}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button type="primary" form="music_form" key="submit" htmlType="submit" icon={<SaveOutlined />}>Save</Button>,
        <Button type='default' key="back" icon={<CloseOutlined />} onClick={onCancel}>Back</Button>,
        <Button type='text' key="delete" danger icon={<DeleteOutlined />}>Delete</Button>,
        ]}
    >
      <Form
        ref={formRef}
        onFinish={onFormFinish}
        initialValues={{
          decibel: 100,
        }}
      >
        <Form.Item label='Name' name='name'>
          <Input placeholder='Name' required></Input>
        </Form.Item>
        <Form.Item label='Duration' name='duration'>
          <TimePicker disabled/>
        </Form.Item>
        <Form.Item label='Rate' name='rate'>
          <Rate />
        </Form.Item>
        <Form.Item label='Decibel' name='decibel'>
          <InputNumber
            style={{ width: 100 }}
            min={0}
            max={300}
            addonAfter="%"
            // onChange={onChange}
          />
        </Form.Item>
        <Form.Item label='Tag' name='tag'>
          <MtInputTag />
        </Form.Item>
      </Form>
    </Modal>
  );
}
