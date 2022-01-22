import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    padding: '16px',
    backgroundColor:'#e4e4e4',
    borderRadius:'10px',
    marginTop:'30px',
    marginBottom:'30px',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '100%',
 
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton:{
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', /////////////
    color:'#000',
    backgroundColor:'#99a1d1',
    opacity:0.5,


  },
  pages:{
    marginTop:'20px',
    marginBottom:'20px',
    backgroundColor:'#e4e4e4',
    padding:'10px',
    
  },

}));