import { BubbleGrid } from '@/components/BubbleGrid'
import { genreList } from '@/constants/genre-list'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

export default function SelectGenre() {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Typography textAlign={'center'} variant="h6" sx={{ marginTop: 16 }}>
        今日はどんな気分ですか？
      </Typography>
      <BubbleGrid dataset={genreList} />
    </Box>
  )
}
