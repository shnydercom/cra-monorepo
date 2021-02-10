import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors.module.scss';

export const theme = createMuiTheme({
	palette: {
		background: {
			default: colors.background,
		},
		primary: {
			main: colors.primary,
		},
		secondary: {
			main: colors.secondary,
		}
	}
});
