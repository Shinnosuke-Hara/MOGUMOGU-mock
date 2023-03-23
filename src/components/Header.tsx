import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { useCommonContext } from '@/contexts/Common.context'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

export default function Header() {
  const { location, setLocation, setLoading } = useCommonContext()

  const handleChange = (event: SelectChangeEvent) => {
    setLoading(true)
    setLocation(Number(event.target.value))
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#ff7f50' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MOGUMOGU
          </Typography>
          <FormControl fullWidth sx={{ width: '40%', my: 1 }}>
            <InputLabel id="input-label" sx={{ color: 'white' }}>
              距離で絞る
            </InputLabel>
            <Select
              labelId="input-label"
              label="距離で絞る"
              onChange={handleChange}
              value={location === undefined ? undefined : String(location)}
              sx={{ color: 'white' }}
            >
              <MenuItem value={1}>1km</MenuItem>
              <MenuItem value={5}>5km</MenuItem>
              <MenuItem value={10}>10km</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
