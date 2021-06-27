import { Container, Link, Typography } from '@material-ui/core'
import { FC } from 'react'
import { TitleContextConsumer } from './TitleContextProvider'

const OtherPage: FC = () => {
	return (
		<TitleContextConsumer>
			{(context) => {
				context.setTitle('Other Page')

				return (
					<Container>
						<Typography>Other page</Typography>
						<Link href="/">To Home</Link>
					</Container>
				)
			}}
		</TitleContextConsumer>
	)
}

export { OtherPage }
