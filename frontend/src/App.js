import React from 'react';
import { Typography, Grid, AppBar, Container, Grow } from '@material-ui/core';

import dejaview from './images/dejaview.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  
  return (
   <Container maxidth="lg">
     <AppBar position="static" color="inherit">
       <Typography variant="h2" align="center">DejaView</Typography>
       <img src={dejaview} alt="dejaview" height="60" />
     </AppBar>
     <Grow in>
       <Container>
         <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
         </Grid>
       </Container>
     </Grow>
   </Container>
  );
}

export default App;
