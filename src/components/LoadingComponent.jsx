import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingComponent({ state }) {
  return (
    <div>
      { state
          ? <div className='loading'>
              <CircularProgress />
            </div>
          : ''
        }
    </div>
  )
}
