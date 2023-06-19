import Skeleton from '@mui/material/Skeleton';

export default function LoadingSkeleton({ state }) {
  return (
    <div className='loading-skeleton'>
      { state
          ? new Array(20).fill('').map(() => (
            <div className='loading-skeleton__item'>
              <Skeleton
                variant="text"
                sx={{ fontSize: '1rem' }}
                height={47}
              />
            </div>
          ))
          : ''
        }
    </div>
  )
}
