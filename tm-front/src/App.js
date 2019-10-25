import React from 'react';
import './App.css';
import Header from './components/header.component';
import { Route, Switch } from 'react-router-dom';
import StartPage from './pages/start-page.component';
import TaskPage from './pages/task-page.component';

class App extends React.Component {
	render() {
		return (
			<div className="t-wrapper">
				<Header />
				<Switch>
					<Route exact path="/" component={StartPage} />
					<Route exact path="/tasks" component={TaskPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
