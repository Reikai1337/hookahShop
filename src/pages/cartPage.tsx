import { makeStyles, Button, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { theme } from '../theme/theme'
import emptyCartImg from './../assets/images/emptyCartImg.png'


const useStyles = makeStyles({
    cartContainer: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    cartMedia: {
        display: 'block',
        maxWidth: '100%',
    }
})

const CartPage: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid container alignItems='center' justify='center' direction='column' className={classes.cartContainer}>
            <Typography variant='h3' gutterBottom>Корзина пустая</Typography>
            <Typography color='textSecondary'>Вероятней всего, вы забыли добавить сюда товар</Typography>
            <Typography color='textSecondary'>Для того, чтобы сделать заказ, перейдите на главную страницу</Typography>
            <Grid ><img className={classes.cartMedia} src={emptyCartImg}></img></Grid>
            <NavLink to='/'>
                <Button size='large' variant='contained' color='secondary'>Вернуться на главную</Button>
            </NavLink>
        </Grid>
    )
}
export default CartPage