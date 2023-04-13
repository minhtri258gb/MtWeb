import { useEffect, useState } from 'react'
import {
  Collapse,
  Layout,
} from 'antd'
import { MusicMgr } from './MusicMgr'
import MusicTable from './MusicTable'
import MusicForm from './MusicForm'
import './Music.css'

export default function MusicPage() {

  // Variable
  const [musicPlay, setMusicPlay] = useState(null);
  const [musicEdit, setMusicEdit] = useState(null);

  // Change
  useEffect(() => {

    // Web title
    document.title = musicPlay ? musicPlay.name : "Music";

    // Web icon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = '/res/logo/music.ico';

  });


  // UI
  return (
    <div className="App">
      <Layout>

        <Layout.Sider
          width='25%'
          style={{
            height:'100vh',
            backgroundColor:'#ffffcc',
          }}
        >
          Sider
        </Layout.Sider>

        <Layout>

          <Layout.Header style={{height:'4em', backgroundColor:'#ccffff'}}>
            <Collapse size="small">
              <Collapse.Panel header="This is small size panel header" key="1">
                <p>hasdklhasld</p>
              </Collapse.Panel>
            </Collapse>
          </Layout.Header>

          <Layout.Content>

            {/* Table */}
            <MusicTable
              musicPlay={musicPlay}
              onPlay={(music) => {
                setMusicPlay(music);
                MusicMgr.play(music);
              }}
              onEdit={(music) => setMusicEdit(music)}
            />

            {/* Form */}
            <MusicForm
              data={musicEdit}
              onSave={() => {
                setMusicEdit(null);
              }}
              onCancel={() => setMusicEdit(null)}
              onDelete={() => {}}
            />

          </Layout.Content>

        </Layout>
      </Layout>
    </div>
  );
}
