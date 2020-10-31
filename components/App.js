import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import FetcRandomQuotes from './fetchQuotes';
import AuthorQoutes from "./AuthorQoutes";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/author/:authorName">
						<AuthorQoutes />
					</Route>
					<Route path='/'>
						<FetcRandomQuotes />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App;
