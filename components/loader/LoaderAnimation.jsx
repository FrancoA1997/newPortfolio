import * as React from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function LinearProgressWithLabel (props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column-reverse' }}>
      <Box sx={{ width: '200%', mr: 1, mb: 2 }}>
        <LinearProgress variant='determinate' color='success' {...props} />
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

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
}

export default function LinearWithValueLabel () {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 20 : prevProgress + 20))
    }, 1200)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  )
}
