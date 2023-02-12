// import { useState } from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'

const itemData = [
  {
    img: 'https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-gau-truc-panda-weibo.jpg',
    title: 'meme 1'
  },
  {
    img: 'https://cdn.luatminhkhue.vn/lmk/article/e874aca8f1e818b641f9.jpg',
    title: 'meme 2'
  },
  {
    img: 'https://file.tinnhac.com/resize/600x-/2019/12/17/20191217175344-6383.png',
    title: 'meme 3'
  },
  {
    img: 'https://cdn.luatminhkhue.vn/lmk/article/Roll-Safe-meme.jpg',
    title: 'meme 4'
  },
  {
    img: 'https://tiengdong.com/wp-content/uploads/www_tiengdong_com-meme-xin-loi-duoc-chua.jpg',
    title: 'meme 5'
  },
  {
    img: 'https://i.pinimg.com/564x/2e/06/8e/2e068e8a4321e0a086ee5316db83e655.jpg',
    title: 'meme 6'
  }
]

export const MuiImageList = () => {

  // const [expanded, setExpaned] = useState(false)

  // const handleChange = (isExpanded, panel) => {
  //   setExpaned(isExpanded ? panel : false)
  // }

  return (
    <Stack spacing={4}>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={164}
      >
        {
          itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))
        }
      </ImageList>
    </Stack>
  )
}