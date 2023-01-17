const rootTask4 = ReactDOM.createRoot(document.getElementById("task4"));
class Task4 extends React.Component {
  constructor(props) {
    super(props);
    var N = this.validateN(props.N) ? props.N : 1;
    this.state = {
      N: N
    };
    this.onNChange = this.onNChange.bind(this);
    this.handleSubmitTask = this.handleSubmitTask.bind(this);
  }
  validateN(N) {
    return Number(N) >= 1;
  }
  onNChange(e) {
    var val = this.validateN(e.target.value) ? e.target.value : 1;
    this.setState({
      N: val
    });
  }
  handleSubmitTask(e) {
    e.preventDefault();
    var N = Number(this.state.N);
    alert(`Это цифра ${[...Array(N).keys()].map(i => i + 1).join('')[N - 1]}`);
  }
  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmitTask
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0446\u0438\u0444\u0440\u044B \u0432 \u0440\u044F\u0434\u0443 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "N",
      value: this.state.N,
      onChange: this.onNChange
    }))), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Найти цифру"
    }));
  }
}
rootTask4.render( /*#__PURE__*/React.createElement(Task4, {
  N: 1
}));
