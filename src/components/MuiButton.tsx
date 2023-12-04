import { Button, IconButton, Stack } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import React from 'react'

const MuiButton = () => {
  return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contain</Button>
                <Button variant='outlined'>Outline</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'> Primary </Button>
                <Button variant='contained' color='secondary'> secondary </Button>
                <Button variant='contained' color='info'> info </Button>
                <Button variant='contained' color='success'> success </Button>
                <Button variant='contained' color='warning'> warning </Button>
            </Stack>

            <Stack spacing={2} direction='row' display='block'>
                <Button variant='contained' color='primary' size="small"> Primary </Button>
                <Button variant='contained' color='secondary' size="medium"> secondary </Button>
                <Button variant='contained' color='info' size="large"> info </Button>
            </Stack>

            <Stack spacing={2} direction='row' display='block'>
                <Button variant='contained' color='primary' size="small" startIcon={<RemoveRedEyeIcon/>}> Primary </Button>
                <Button variant='contained' color='secondary' size="medium" endIcon={<RemoveRedEyeIcon/>}> secondary </Button>
                <IconButton aria-label='send' color='success'>
                    <RemoveRedEyeIcon/>
                </IconButton>
            </Stack>
        </Stack>
  )
}

export default MuiButton