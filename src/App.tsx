import { Grid, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Home } from './Home'
import { Nav } from './Nav'
import { OtherPage } from './OtherPage'
import { TitleContextProvider } from './TitleContextProvider'

const App: FC = () => {
	return (
		<TitleContextProvider>
			<Grid container>
				<Grid item xs={12}>
					<Nav />
				</Grid>
				<Grid item container direction="column" xs={12}>
					<Grid item xs={2} />
					<Grid item xs={8}>
						<BrowserRouter>
							<Switch>
								<Route path="/" exact>
									<Home />
								</Route>
								<Route path="/other-page">
									<OtherPage />
								</Route>
							</Switch>
						</BrowserRouter>
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

export { App }
