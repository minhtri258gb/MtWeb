import React, { useState } from 'react'
import {
	Menu,
  MenuProps,
} from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'

export const ExamMenu = () => {

  // State
  const [current, setCurrent] = useState('mail');

  // Event
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  // Data
  const items: MenuProps['items'] = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

  return (
	<div style={{ display:'flex', flexDirection:'row' }}>
	  <Menu
    mode="horizontal"
		items={items}
    selectedKeys={[current]}
    onClick={onClick}
	  ></Menu>
	</div>
  )
}