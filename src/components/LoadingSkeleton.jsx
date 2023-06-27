export default function LoadingSkeleton({ state }) {
  return (
    <div className='loading-skeleton'>
      { state
          ? new Array(20).fill('').map((_, index) => (
            <div className='loading-skeleton__item' key={index} />
          ))
          : ''
        }
    </div>
  )
}
