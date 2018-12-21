import React, { Component, Fragment } from "react";
import Result from "../components/Result";

export default class DepsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depsDistritais: 24,
      message: ""
    };
  }

  handleInputChange = event => {
    this.calculaDistritais(event.target.value);
  };

  calculaDistritais = depsFederais => {
    if (depsFederais < 8) {
      this.setState({
        message:
          "Por lei, o numero de representantes da Câmara Federal não pode ser menor que 8."
      });
    } else if (depsFederais >= 8 && depsFederais <= 12) {
      this.setState({ depsDistritais: depsFederais * 3 });
      this.setState({
        message:
          "De acordo com artigo 27 da CF, a quantidade de deputados distritais é o triplo da qtd de representantes na Câmara Federal."
      });
    } else if (depsFederais <= 72) {
      this.setState({
        depsDistritais: 36 + (depsFederais - 12)
      });
      this.setState({
        message:
          "Quando o numero de deps federais é maior que 12, o numero de distritais é 36 acrescido dos representantes federais acima de 12."
      });
    } else if (depsFederais > 72) {
      this.setState({
        message:
          "Não pode ter mais que 72 representantes do DF na Câmara Federal"
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="federais">Deputados Federais: </label>
            <input
              className="form-control"
              type="number"
              name="federais"
              onChange={this.handleInputChange}
              id="federais"
              placeholder="Deps Federais"
            />
          </div>
        </div>
        <Result
          depsDistritais={this.state.depsDistritais}
          message={this.state.message}
        />
      </Fragment>
    );
  }
}
