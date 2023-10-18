import { Grid, Typography } from '@material-ui/core'
import { FC, useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Nav } from './Nav'
import { OtherPage } from './OtherPage'
import { TitleContext } from './TitleContext'
import './App.css'

const App: FC = () => {
	const titleContext = useContext(TitleContext)

	return (
		<TitleContext.Provider value={titleContext}>
			<Grid container>
				<Grid item xs={12}>
					<Nav />
				</Grid>
				<Grid item container direction="column" xs={12}>
					<Grid item xs={2} />
					<Grid item xs={8}>
						<BrowserRouter>
							<Routes>
								<Route element={<Home />} path="/" />
								<Route
									element={<OtherPage />}
									path="/other-page"
								/>
							</Routes>
						</BrowserRouter>
					</Grid>
					<Grid item xs={2} />
				</Grid>
				<Grid item xs={12}>
					<Typography>Footer</Typography>
				</Grid>
			</Grid>
		</TitleContext.Provider>
	)
}

export { App }
