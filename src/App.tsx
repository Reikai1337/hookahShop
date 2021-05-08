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
              <Route exact path='/'>
                <MainPage />
              </Route>
              <Route exact path='/cart'>
                <CartPage />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}
export default App