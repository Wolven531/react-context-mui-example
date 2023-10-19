import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import {
	Route,
	BrowserRouter as Router,
	// HashRouter as Router,
	Routes,
} from 'react-router-dom'
import { Home } from './Home'
import { Nav } from './Nav'
import { OtherPage } from './OtherPage'
import { TitleContextProvider } from './contexts/TitleContext'
import './App.css'

export const App: FC = () => {
	return (
		<TitleContextProvider>
			<Grid container>
				<Grid item xs={12}>
					<Nav />
				</Grid>
				<Grid item container direction="column" xs={12}>
					<Grid item xs={2} />
					<Grid item xs={8}>
						<Router basename="/">
							<Routes>
								<Route element={<Home />} path="/" />
								<Route
									element={<OtherPage />}
									path="/other-page"
								/>
							</Routes>
						</Router>
					</Grid>
					<Grid item xs={2} />
				</Grid>
				<Grid item xs={12}>
					<Typography>Footer</Typography>
				</Grid>
			</Grid>
		</TitleContextProvider>
	)
}

export default App
