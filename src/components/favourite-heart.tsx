import { Heart } from 'lucide-react'

import { cn } from '@/lib/utils'

type Props = {
  favourite: boolean
  movieId: number
}

export function FavouriteHeart({ favourite, movieId }: Props) {
  return (
    <Heart
      aria-label={favourite ? 'Remove from favourites' : 'Add to favourites'}
      className={cn('cursor-pointer text-green-500', {
        'fill-green-500': favourite,
      })}
    />
  )
}