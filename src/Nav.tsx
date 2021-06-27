import {
	AppBar,
	createStyles,
	IconButton,
	makeStyles,
	Theme,
	Toolbar,
	Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { FC } from 'react'
import { TitleContextConsumer } from './TitleContextProvider'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})
)

const Nav: FC = () => {
	const classes = useStyles()

	return (
		<TitleContextConsumer>
			{(context) => (
				<AppBar position="static">
					<Toolbar>
						<IconButton
							aria-label="menu"
							className={classes.menuButton}
							color="inherit"
							edge="start"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							{context.title}
						</Typography>
					</Toolbar>
				</AppBar>
			)}
		</TitleContextConsumer>
	)
}

export { Nav }
