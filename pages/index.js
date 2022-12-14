import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import data from '../utilities/data'
import NextLink from "next/link"

export default function Home() {
  return (
      <Layout>
        <div>
          <h1>Products</h1>
          <Grid container spacing={3}>
            {data.products.map((product)=> (
              <Grid item md ={4} key={product.name}>
                <Card>
                  <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia         
                    componenent="img"
                    image={product.image}
                    tittle={product.name}>

                    </CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>
                      ${product.price}
                    </Typography>
                    <Button size='small' color='primary'>Add to cart</Button>
                  </CardActions>
                </Card>
                </Grid>
            ))}

          </Grid>
        </div>
      </Layout>
  )
}
