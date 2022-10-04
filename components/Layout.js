import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import React, { children } from 'react';
import Head from 'next/head';
import useStyles from '../utilities/styles';
import NextLink from 'next/link';
import { light } from '@material-ui/core/styles/createPalette';

export default function Layout({ tittle, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1 rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1 rem 0-',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
      palette: {
        type: 'light',
        primary: {
          main: '#f0c000',
        },
        secondary: {
          main: '#208080',
        },
      
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{tittle ? ` ${tittle} -Ecc Mall` : 'Ecc Mall'} </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Ecc Mall</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/Login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Ecc Mall</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
