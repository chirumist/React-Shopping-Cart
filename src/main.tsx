// Library
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, LinkProps } from 'react-router-dom'
import {ThemeProvider, createTheme} from '@mui/material'
// Components
import App from './App'

const LinkBehavior = React.forwardRef<
  any,
  Omit<LinkProps, 'to'> & { href: LinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <Link ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
