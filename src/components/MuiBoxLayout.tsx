import { Box } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'

const MuiBoxLayout = () => {
  return (
    <>
        <Box sx={{
            bgcolor: 'primary.main',
            height: '400px',
            width: '400px',
            p: 2,
            '&:hover': {
                backgroundColor: 'primary.light'
            },
            textAlign: 'center',
            alignItems: 'center'
        }}>This my Box</Box>

        <Box 
           display="flex"
           bgcolor="secondary.main"
           height="400px"
           width="400px"
           p={2}
           mt={3}
           alignItems="center"
           textAlign="center"
        >
            This my second box
        </Box>
    </>
  )
}

export default MuiBoxLayout