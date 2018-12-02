import React from 'react';

export default class Calculadora extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			depsDistritais: 24,
			message:''
		}
		this.handleDepFederaisChange = this.handleDepFederaisChange.bind(this);
	}

	handleDepFederaisChange = event => {
		this.calculaDistritais(event.target.value);
	}
	calculaDistritais(federais){
		if (federais < 8) {
			this.setState({message: "Por lei, o numero de representantes da Câmara Federal não pode ser menor que 8."})
		}else if ((federais >= 8) && (federais <= 12)) {
			this.setState({depsDistritais: federais * 3});
			this.setState(
				{message:"De acordom com artigo 27 da CF, a quantidade de deputados distritais é o triplo qtd de representantesna Câmara Federal."});
		}else {
			this.setState({
				depsDistritais: 36 + (federais - 12)
			});
			this.setState({
				message: "Quando o numero de deps federais é maior que 12, o numero de distritais é 36 acrescido dos representantes federais acima de 12."
			});
		}
	}

	render(){
		return(
			<React.Fragment>
				<div class="form-group col-md-2">
					<label htmlFor="federais">Deputados Federais: </label>
					<input className="form-control"type="number" name="federais" onChange={this.handleDepFederaisChange} id="federais" placeholder="Deps Federais"/>
				</div>	
				<p>Numero de deputados distritais: {this.state.depsDistritais}</p>
				<p>{this.state.message}</p>
			</React.Fragment>
		)
	}
}