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
import { useTitleContext } from './TitleContext'

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

export const Nav: FC = () => {
	const { title } = useTitleContext()

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
				<Typography className={classes.title} variant="h6">
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Nav
