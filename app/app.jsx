const React = require("react");
const ReactDOM = require("react-dom/client");
const redux = require("redux");
const Provider = require("react-redux").Provider;
const reducer = require("./reducer.jsx");
const AppView = require("./appview.jsx").default;
const Task1And2 = require("./Tasks/task1And2.jsx").default;
 
// const store = redux.createStore(reducer);
 
// store.dispatch({
//   type: "SET_STATE",
//   state: {
//     phones: [ "Xiaomi Mi 10", "Samsung Galaxy Note20" ]
//   }
// });
 
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <AppView></AppView>
);