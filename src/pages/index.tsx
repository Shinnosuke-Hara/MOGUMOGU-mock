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
import Header from '@/components/Header'
import { useEffect } from 'react'
import { useCommonContext } from '@/contexts/Common.context'
import Loading from '@/components/Loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { location, loading, setLoading } = useCommonContext()
  const targetRestaurants =
    location === undefined
      ? RESTAURANTS
      : RESTAURANTS.filter((restauant) => restauant.location <= location)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [setLoading])

  return (
    <>
      <Box
        component="div"
        sx={{ position: 'fixed', top: 0, zIndex: 2, width: '100vw' }}
      >
        <Header />
      </Box>
      {loading ? (
        <Loading />
      ) : (
        <ImageList
          sx={{ width: '100%', height: '100%', pt: '56px' }}
          variant="quilted"
          cols={3}
        >
          {targetRestaurants.map((restauant) => (
            <ImageListItem
              key={restauant.id}
              cols={restauant.id % 6 === 0 ? 2 : 1}
              rows={restauant.id % 6 === 0 ? 2 : 1}
            >
              <DisplayCard restauant={restauant} />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  )
}
