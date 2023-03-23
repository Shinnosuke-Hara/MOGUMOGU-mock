import { BubbleGrid } from '@/components/BubbleGrid'
import { genreList } from '@/constants/genre-list'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Link from 'next/link'

export default function SelectGenre() {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Typography textAlign={'center'} variant="h6" sx={{ marginTop: 10 }}>
        今日はどんな気分ですか？
      </Typography>
      <Link href="/">
        <BubbleGrid dataset={genreList} />
      </Link>
    </Box>
  )
}
