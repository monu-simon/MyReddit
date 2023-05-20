import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import './Header.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography variant='h6' component='div' >
          MyReddit
        </Typography>
        <div>
        <NavLink  to="/" className="nav-link" >
            Home
          </NavLink>
          <NavLink to="/user" className="nav-link" >
            User
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
