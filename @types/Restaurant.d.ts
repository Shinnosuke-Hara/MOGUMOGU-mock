import { StaticImageData } from 'next/image'

export interface Restauant {
  id: string
  name: string
  location: number
  src: StaticImageData
  description: string
}
