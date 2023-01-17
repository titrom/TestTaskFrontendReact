const rootTask3 = ReactDOM.createRoot(document.getElementById("task3"));
class Task3 extends React.Component {
  constructor(props) {
    super(props);
    var startRange = this.validateStartRange(props.startRange) ? props.startRange : 1;
    var stopRange = this.validateStartRange(props.stopRange, startRange) ? props.stopRange : startRange + 10;
    this.state = {
      startRange: startRange,
      stopRange: stopRange
    };
    this.onStartRangeChange = this.onStartRangeChange.bind(this);
    this.onStopRangeChange = this.onStopRangeChange.bind(this);
    this.onStartRangeBlur = this.onStartRangeBlur.bind(this);
    this.onStopRangeBlur = this.onStopRangeBlur.bind(this);
    this.handleSubmitTask = this.handleSubmitTask.bind(this);
  }
  validateStartRange(startRange) {
    return Number(startRange) >= 1;
  }
  validateStopRange(stopRange, startRange) {
    return Number(stopRange) > Number(startRange);
  }
  onStartRangeChange(e) {
    this.setState({
      startRange: e.target.value
    });
  }
  onStopRangeChange(e) {
    this.setState({
      stopRange: e.target.value
    });
  }
  onStartRangeBlur(e) {
    var val = this.validateStartRange(e.target.value) ? e.target.value : 1;
    var valS = this.validateStopRange(this.state.stopRange, val) ? this.state.stopRange : Number(val) + 10;
    this.setState({
      startRange: val,
      stopRange: valS
    });
  }
  onStopRangeBlur(e) {
    var val = this.validateStopRange(e.target.value, this.state.startRange) ? e.target.value : Number(this.state.startRange) + 10;
    this.setState({
      stopRange: val
    });
  }
  searchPrimeNumbers(start, stop) {
    var result = [];
    for (let i = start; i < stop + 1; i++) {
      let x = new Set();
      for (let j = i; j >= i ** 0.5; j--) {
        if (i % j == 0) {
          x.add(j);
          x.add(Math.floor(i / j));
        }
        if (x.size > 2) break;
      }
      if (x.size == 2) {
        result.push(Math.max(...x));
      }
    }
    return result;
  }
  handleSubmitTask(e) {
    e.preventDefault();
    var startRange = this.state.startRange;
    var stopRange = this.state.stopRange;
    alert(`В промежутке с ${startRange} до ${stopRange} есть такие простые как ${this.searchPrimeNumbers(Number(startRange), Number(stopRange))}`);
  }
  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmitTask
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0447\u0430\u043B\u043E \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "start",
      value: this.state.startRange,
      onChange: this.onStartRangeChange,
      onBlur: this.onStartRangeBlur
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043D\u0435\u0446 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430:", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "stop",
      value: this.state.stopRange,
      onChange: this.onStopRangeChange,
      onBlur: this.onStopRangeBlur
    }))), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Найти простые числа в диапозоне"
    }));
  }
}
Task3.defaultProps = {
  startRange: 1,
  stopRange: 10
};
rootTask3.render( /*#__PURE__*/React.createElement(Task3, null));
