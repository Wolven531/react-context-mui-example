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
import { FC, useContext } from 'react'
import { TitleContext } from './TitleContext'

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
	const { title } = useContext(TitleContext)

	const classes = useStyles()

	return (
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
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export { Nav }
