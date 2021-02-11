import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderFromUILib } from './components/Header-from-UI-lib';
import { ToggleButtonWithHook } from './components/Toggle-button-with-hook';
import { MUIComponentInUIlib } from './components/MUIComponent-in-UI-lib';

function App() {
	return (
		<div className="App">
			<HeaderFromUILib />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<ToggleButtonWithHook />
				<MUIComponentInUIlib />
			</header>
		</div>
	);
}

export default App;
