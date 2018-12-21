import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import withContainer from "./components/withContainer";
import DepsContainer from "./containers/DepsContainer";

class App extends React.Component {
  render() {
    const Container = withContainer(DepsContainer);
    return (
      <React.Fragment>
        <Header />
        <Container />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
