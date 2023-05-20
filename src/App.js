import logo from './logo.svg'
import './App.css'
import Header from '../src/components/Header/Header'
import { useRoutes, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import {Container} from '@mui/material'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/user',
    element: <Profile />
  }
]

function App () {
  const routing = useRoutes(routes)

  return (
    <div className='App'>
      <Header />
      <Container sx={{minHeight:'400px'}} maxWidth='lg'>{routing}</Container>
      <Footer />
    </div>
  )
}

export default App
