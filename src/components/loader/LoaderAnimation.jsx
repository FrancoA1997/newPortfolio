import * as React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function CircularProgressWithLabel (props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column-reverse' }}>
      <Box sx={{ width: '200%', mr: 1, mb: 2 }}>
        <CircularProgress color='success' variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35, marginTop: '10px' }}>
        <Typography variant='subtitle1' color='#03C988'>{`${Math.round(
          props.value
        )}%`}
        </Typography>
      </Box>
    </Box>
  )
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
}

export default function CircularStatic () {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 25 : prevProgress + 25))
    }, 2000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box>
      <CircularProgress color='success' value={progress} />
    </Box>
  )
}
