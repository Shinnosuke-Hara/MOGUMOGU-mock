import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { RESTAURANTS } from '@/constants/Restauants'
import DisplayCard from '@/components/DisplayCard'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ImageList
      sx={{ width: '100%', height: '100%' }}
      variant="quilted"
      cols={3}
    >
      {RESTAURANTS.map((restauant) => (
        <ImageListItem
          key={restauant.id}
          cols={restauant.id % 6 === 0 ? 2 : 1}
          rows={restauant.id % 6 === 0 ? 2 : 1}
        >
          <DisplayCard restauant={restauant} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
