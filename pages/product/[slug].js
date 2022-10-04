import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utilities/data';
import useStyles from '../../utilities/styles';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Layout tittle={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            {' '}
            <Typography className={classes.brand}>back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            Layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              {' '}
              <Typography component="h1" variant='h1' className={classes.brand} >{product.name}</Typography>
            </ListItem>
            <ListItem>
              {' '}
              <Typography>Category:{product.category}</Typography>
            </ListItem>
            <ListItem>
              {' '}
              <Typography>Brand:{product.brand}</Typography>
            </ListItem>
            <ListItem>
              {' '}
              <Typography>
                Rating:{product.rating} stars({product.numReviews} reviews){' '}
              </Typography>
            </ListItem>
            <ListItem>
              Description:
              <Typography>{product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.brand}>${product.price} </Typography>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                <Grid>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.brand}>
                      {product.countInStock > 0 ? 'In stock' : 'Unavailable'}{' '}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                {' '}
                <Button fullWidth variant="contained" color="primary">
                  Add to Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
