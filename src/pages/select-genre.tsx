import { BubbleGrid } from '@/components/BubbleGrid'
import { genreList } from '@/constants/genre-list'

export default function SelectGenre() {
  return (
    <div>
      <BubbleGrid dataset={genreList} />
    </div>
  )
}
