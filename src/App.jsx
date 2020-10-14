// import React, { Component } from "react";
// import { connect } from "react-redux";

// export class App extends Component {

//   render() {
//     return <h1>{this.props.state.greeting}</h1>;
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     state: state,
//   };
// };

// export default connect(mapStateToProps)(App);

import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  let greeting = useSelector((state) => state.greeting);
  let currentUser = useSelector((state) => state.currentUser);

  return (
    <>
      <h1>{greeting}</h1>
      <h2>{currentUser.email}</h2>
      <h2>{currentUser.name}</h2>
      <h2>{currentUser.role}</h2>
    </>
  );
};

export default App;
