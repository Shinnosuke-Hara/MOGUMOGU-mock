import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import { Restaurant } from '../../@types/Restaurant'

interface Props {
  restauant: Restaurant
}

export default function DisplayCard({ restauant }: Props) {
  return (
    <Box sx={{ width: '100%', aspectRatio: 1, borderRadius: 1 }}>
      <img
        src={`/restauants/${restauant.id}.png`}
        alt=""
        style={{
          aspectRatio: 1,
          objectFit: 'cover',
          width: '100%',
        }}
      />
    </Box>
  )
}
