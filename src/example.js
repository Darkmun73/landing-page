// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

class GetTemp extends React.Component {

  KtoC(kNum) {
    return (kNum - 273.15).toFixed(2);
  }

  FtoC(fNum) {
    return ((fNum - 32) * (5/9)).toFixed(2);
  }

  pressK(num) {
    alert(`${num}\u00BAK = ${this.KtoC(num)}\u00BAC`);
  }

  pressF(num) {
    alert(`${num}\u00BAF = ${this.KtoC(num)}\u00BAC`);
  }

  render() {
    return(
      <>
        <p onClick={() => this.pressK(+this.props.valueK)}>
          Температура <strong>{this.props.valueK}&deg;K</strong>.
        </p>
        <p onClick={() => this.pressF(+this.props.valueF)}>
          Температура <strong>{this.props.valueF}&deg;F</strong>.
        </p>
      </>
    );
  }
}

// root.render(<GetTemp valueK="225" valueF="-22"/>);