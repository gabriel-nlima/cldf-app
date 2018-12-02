import React from 'react';

export default class Header extends React.Component{
	render(){
		return (
			<header className="container">
				<h3>Bem vindo</h3>
				<h5>Este app é uma ferramenta leve e simples para calcular a quantidade de deputados
				distritais na CLDF.</h5>
			</header>
		)
	}
}