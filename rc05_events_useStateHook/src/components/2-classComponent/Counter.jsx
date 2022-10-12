//* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================

import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    //! count state ine baslangıç degeri atadık
    this.state = {
      count: props.count || 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="container text-center mt-4">
        <h1>CLASSFUL COMPONENTS</h1>
        <h2 className="display-4 text-danger">COUNT:{this.state.count}</h2>
        <button onClick={this.increment} className="btn btn-success">
          INC
        </button>
        <button className="btn btn-dark">CLR</button>
        <button onClick={this.decrement} className="btn btn-danger">
          DEC
        </button>
      </div>
    );
  }
}

export default Counter;
