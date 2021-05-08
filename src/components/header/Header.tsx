import { Avatar, makeStyles, Typography, Button, ButtonGroup } from "@material-ui/core"
import { ShoppingCartOutlined } from "@material-ui/icons"
import { NavLink } from "react-router-dom"
import { theme } from "../../theme/theme"

const useStyles = makeStyles({
    root: {
        padding: theme.spacing(3),
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        borderBottom: '1px solid #f6f6f6'
    },
    title: {
        fontWeight: 600,
    },
    logoTitle: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        marginRight: theme.spacing(1.5),
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
    },
    cartButton: {
        '&:hover': {
            background: '#00666b',
        },
        background: theme.palette.primary.main,
        color: '#fff',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    }
})

const Header: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.logoTitle}>
                <Avatar className={classes.logo} src='/hookah-logo.png' alt='logo' />
                <div>
                    <Typography className={classes.title} variant='h5' component='h1'>HOOKAHSHOP</Typography>
                    <Typography color='textSecondary'>самые дымные кальянные во вселенной</Typography>
                </div>
            </div>
            <div>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button>44.13$</Button>
                    <NavLink to='/cart'>
                        <Button className={classes.cartButton}><ShoppingCartOutlined /> 3</Button>
                    </NavLink>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Header