import React from 'react';
import Header from './Header.jsx';
import Calculadora from './Calculadora.jsx';

class App extends React.Component{
	render(){
		return (
			<React.Fragment>
				<Header/>
				<main className="container">
					<Calculadora />
				</main>
				<Footer/>
			</React.Fragment>
		)
	}
}
class Footer extends React.Component{
	render(){
		return(
			<div className="footer">
				<p> Gabriel Nascimento Lima</p>
				<p className="text-muted"> gabriel.lima13372@gmail.com</p>
			</div>
		);
	}
}
export default App;