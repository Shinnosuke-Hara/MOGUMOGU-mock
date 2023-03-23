import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

function Loading() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10000,
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ bgcolor: 'black.main', height: '100vh' }}
      >
        <CircularProgress sx={{ color: 'red.main' }} />
        <Typography component="div" sx={{ color: 'white.main', mt: 4 }}>
          あなたにおすすめの飲食店を探しています
        </Typography>
      </Stack>
    </Container>
  )
}

export default Loading
