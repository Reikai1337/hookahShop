import { Container, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { theme } from '../theme/theme'
import Header from './header/Header'


const useStyles = makeStyles({
    mainPad: {
        marginTop: theme.spacing(4.5),
        marginBottom: theme.spacing(4.5),
        maxWidth: '1650px',
    },
    mainContent: {
        padding: theme.spacing(2),
    }
})

const Layout: React.FC = ({ children }) => {
    const classes = useStyles()

    return (
        <Container className={classes.mainPad} maxWidth={false}>
            <Paper>
                <Header />
                <div className={classes.mainContent}>
                    {children}
                </div>
            </Paper>
        </Container>
    )
}

export default Layout