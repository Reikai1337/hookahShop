import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Layout from './components/Layout'
import MainPage from './pages/mainPage'
import { theme } from './theme/theme'
import CartPage from './pages/cartPage'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout >
            <Switch>
              <Route path='/' component={MainPage} />
              <Route path='/:category' component={MainPage} />
              <Route exact path='/cart' component={CartPage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}
export default App