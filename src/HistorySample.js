// import React, { useEffect } from "react";

// const HistorySample = ({ history }) => {
//   const handleGoBack = () => {
//     history.goBack();
//   };

//   const handleGoHome = () => {
//     history.push("/");
//   };

//   useEffect(() => {
//     const unblock = history.block("정말 떠나실껀가요?");

//     return () => {
//       if (unblock) {
//         unblock();
//       }
//     };
//   }, [history]);

//   return (
//     <div>
//       <button onClick={handleGoBack}>뒤로</button>
//       <button onClick={handleGoHome}>홈으로</button>
//     </div>
//   );
// };

// export default HistorySample;

import React, { Component } from "react";

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    this.unblock = this.props.history.block("정말 떠날래?");
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
