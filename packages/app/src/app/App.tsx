import { theme } from '../../../components/src/mui/theme';
import { Thing } from '@cra-monorepo/components/Thing';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Thing />
		</ThemeProvider>
	);
}

export default App;
