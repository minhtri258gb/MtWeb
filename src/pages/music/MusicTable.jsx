import { useEffect, useState } from 'react'
import {
  Button,
  Dropdown,
  Input,
  Table,
  Tag,
} from 'antd'
import Icon, {
  MoreOutlined,
  CaretRightOutlined,
  EditOutlined,
  StepForwardOutlined,
} from '@ant-design/icons'
import axios from 'axios'
import moment from 'moment'
import { MusicMgr } from './MusicMgr'
import { MtInputTag } from '../../components/MtInputTag'

export default function MusicTable(props) {
  
  // Variable
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  // Change
  useEffect(() => {

    // Get list music
    if (MusicMgr.listMusic.length == 0) {
      axios.post("http://localhost/music/getListMusic")
        .then(res => {

          // Get list from response
          let data = res.data.rows;
          if (data != undefined && data != null && data.length > 0) {

            // Process Data
            for (let i=0; i<data.length; i++) {
              var e = data[i];

              // Add Key
              e.key = e.id;

              // Switch ID to index of array
              e.id = i;

              // Convert duration to string format
              e.duration *= 1000;
              e.durationFx = e.duration ? moment.utc(e.duration).format('m:ss') : null;

              // Split tag from string to array
              e.tag = e.tag.split(',');
            }
            
            // Set state
            MusicMgr.listMusic = data;
            setDataSource(data);
          }
        })
        .catch(error => console.error("page.music.MusicPage: useEffect ~ fetch ~ error", error))
        .finally(() => setLoading(false));
    }
  });

  // UI
  return (
    <Table
      loading={loading}
      dataSource={dataSource}
      size="small"
      pagination={false}
      scroll={{ y: 'calc(100vh - 8em)' }} // header 4em
      rowClassName={(r, i) => r.key == props.musicPlay?.key ? "table_row_cur" : ""}
      // rowSelection={{ type: 'radio' }}
      // onRow={(record, rowIndex: number | undefined) => {
      //   return {
      //     onClick: (event) => { setMusicPlayID(rowIndex == undefined ? -1 : rowIndex) },
      //     onDoubleClick: (event) => {},
      //     onContextMenu: (event) => {},
      //   };
      // }}
    >
      <Table.Column title='Id' key='index' width={40} align='center' render={(v, r, i) => i+1} className="table_column_id" />
      <Table.Column
        title='Name'
        dataIndex='name'
        key='name'
        filterDropdown={({setSelectedKeys, selectedKeys, confirm}) => (
          <Input
            placeholder='Search'
            autoFocus
            allowClear
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value?[e.target.value]:[])}
            onPressEnter={() => confirm()}
            onBlur={() => confirm()}
          >
          </Input>)}
        onFilter={(v, r) => {
          return r.name.toLowerCase().includes(v.toLowerCase());
        }}
      />
      <Table.Column title='Duration' dataIndex='durationFx' key='duration' width={80}
      />
      <Table.Column
        title='Rate'
        dataIndex='rate'
        key='rate'
        width={50}
        align='center'
        render={(v) => (<Icon component={() => (<img src={process.env.PUBLIC_URL+"/res/icons/rating"+v+".png"} />)} />)}
      />
      <Table.Column
        title='Decibel'
        dataIndex='decibel'
        key='decibel'
        width={80}
        render={(v) => v+'%'}
      />
      <Table.Column
        title='Tag'
        dataIndex='tag'
        key='tag'
        width={200}
        render={(tags) => (<>{tags.map((tag) => (<Tag key={tag}>{tag}</Tag>))}</>)}
        filterDropdown={({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
          // Đổi format cho kết quả
          if (selectedKeys.length == 0)
            selectedKeys.push({in:[],ex:[]});
          // UI Filter
          return (
            <div>
              <span>Include: </span>
              <MtInputTag
                value={selectedKeys[0].i}
                onChange={(value) => {
                  selectedKeys[0].in = value;
                  setSelectedKeys(selectedKeys);
                }}
              />
              <br/>
              <span>Exclude: </span>
              <MtInputTag
                value={selectedKeys[0].e}
                onChange={(value) => {
                  selectedKeys[0].ex = value;
                  setSelectedKeys(selectedKeys);
                }}
              />
              <br/>
              <Button block size='small' onClick={() => {clearFilters();confirm();setSelectedKeys(selectedKeys);confirm();}}>Search</Button>
            </div>
          )
        }}
        onFilter={(v, r) => {
          console.log(v)
          let tag = r.tag;
          // Exclude
          let lstEx = v.ex;
          for (let i=0; i<lstEx.length; i++)
            if (tag.includes(lstEx[i]))
              return false;
          // Include
          let lstIn = v.in;
          for (let i=0; i<lstIn.length; i++)
            if (tag.includes(lstIn[i]))
              return true;
          return lstIn.length == 0;
        }}
      />
      <Table.Column
        title='Action'
        dataIndex='action'
        key='action'
        width={58}
        align='center'
        render={(v, r, i) => (
          <Dropdown
            menu={{
              items: [
                { key: 'play', label: "Play", icon: (<CaretRightOutlined />) },
                { key: 'addnext', label: "Add next", icon: (<StepForwardOutlined />) },
                { key: 'playtrack', label: "Play Track", icon: (<CaretRightOutlined />) },
                { type: 'divider', },
                { key: 'edit', label: "Edit", icon: (<EditOutlined />) },
              ],
              onClick: ({key}) => {
                if (key === 'play') props.onPlay(r);
                else if (key === 'edit') props.onEdit(r);
              },
            }}
            placement="bottomRight"
          >
            <Button shape="circle" onClick={e => e.preventDefault()}>
              <MoreOutlined />
            </Button>
          </Dropdown>
        )}
      />
    </Table>
  );
}
