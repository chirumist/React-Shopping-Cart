// Library
import React from 'react';
import {Routes, Route} from 'react-router-dom'

// UI Components
import {Container, Box, Toolbar } from '@mui/material'

// Custom Components
import {Navbar} from './components/Navbar'

// Context
import {ShoppingCartProvider} from './context/ShoppingCartContext'

// Pages Components
import {Home} from './pages/Home'
import {Store} from './pages/Store'
import {About} from './pages/About'

interface Props {
}

function App(props: Props) {
  return (
    <React.Fragment>
      <ShoppingCartProvider>
        <Navbar />
        <Box component="main">
          <Toolbar />
          <Container maxWidth="xl" sx={{py: 3}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </Box>
      </ShoppingCartProvider>
    </React.Fragment>
  )
}

export default App
