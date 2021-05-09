import { Grid, makeStyles, Typography } from "@material-ui/core"
import { useRouteMatch } from "react-router";
import { urlToProduct } from "../../../common/urlToProduct";
import { theme } from "../../../theme/theme"
import GoodsTile from "./goodsTile/GoodsTile";


const useStyles = makeStyles({
    root: {
        padding: theme.spacing(3),
    },
    goodsMedia: {
        height: '320px',
        width: '305px',
    },
    goodsTitle: {
        fontWeight: 'bolder',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    hookahVariability: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    goodsVariability: {
        marginTop: theme.spacing(1.5),
        marginBottom: theme.spacing(3),
    }
})
interface urlParams {
    [key:string]: any,
}
const GoodsList: React.FC = (props:any) => {
    const classes = useStyles()
    const { params }:urlParams = useRouteMatch()
    const exArr = [0, 0, 0, 0, 0, 0, 0, 0]
    return (
        <div className={classes.root}>
            <Typography gutterBottom variant='h4' component='h2'>{urlToProduct(params.product)}</Typography>
            <Grid justify='center' container spacing={6}>
                {exArr.map(item => <GoodsTile />)}
            </Grid>
        </div>
    )
}

export default GoodsList