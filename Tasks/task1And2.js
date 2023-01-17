const root = ReactDOM.createRoot(document.getElementById("task1And2"));
class Vector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vector: props.vector
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  vectorItemIsValid(vectorItem) {
    return !isNaN(vectorItem) && !isNaN(parseFloat(vectorItem));
  }
  onChange(e, position) {
    var val = e.target.value;
    var vector = this.state.vector;
    vector[position] = val;
    this.setState({
      vector: vector
    });
  }
  onBlur(e, position) {
    var val = e.target.value;
    var vector = this.state.vector;
    vector[position] = this.vectorItemIsValid(val) === true ? val : 0;
    this.setState({
      vector: vector
    });
  }
  onFocus(e) {
    var val = e.target.value;
    if (val == "0") e.target.value = "";
  }
  render() {
    var vectorInput = [];
    for (let i = 0; i < this.props.N; i++) {
      if (this.state.vector[i] === undefined) this.state.vector[i] = 0;
      vectorInput.push( /*#__PURE__*/React.createElement("label", null, " ", i + 1, " ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.vector[i],
        onChange: e => this.onChange(e, i),
        onBlur: e => this.onBlur(e, i),
        onFocus: this.onFocus
      })));
    }
    return /*#__PURE__*/React.createElement("ul", null, vectorInput);
  }
}
class Task1 extends React.Component {
  constructor(props) {
    super(props);
    var N = this.validateN(props.N) ? props.N : 1;
    this.state = {
      N: N,
      vector1: [...Array(N).fill(0)],
      vector2: [...Array(N).fill(0)]
    };
    this.onNChange = this.onNChange.bind(this);
    this.handleSubmitTask = this.handleSubmitTask.bind(this);
  }
  validateN(N) {
    return Number(N) >= 0;
  }
  onNChange(e) {
    var val = this.validateN(e.target.value) ? e.target.value : 1;
    var vector1 = this.state.vector1;
    var vector2 = this.state.vector2;
    vector1.length = val;
    vector2.length = val;
    this.setState({
      N: val,
      vector1: vector1,
      vector2: vector2
    });
  }
  scalarProduct(vectors) {
    return vectors[0].reduce(function (s, aItme, i) {
      return s + aItme * vectors[1][i];
    }, 0);
  }
  handleSubmitTask(e) {
    e.preventDefault();
    var vector1 = this.state.vector1;
    var vector2 = this.state.vector2;
    alert(`Скалярное произведение двух векторов [${vector1}] и [${vector2}] = ${this.scalarProduct([vector1, vector2])}`);
  }
  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmitTask
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u043D\u043E\u0441\u0442\u044C \u0432\u0435\u043A\u0442\u043E\u0440\u043E\u0432:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "N",
      value: this.state.N,
      onChange: this.onNChange
    }))), /*#__PURE__*/React.createElement("p", null, "\u041F\u0435\u0440\u0432\u044B\u0439 \u0432\u0435\u043A\u0442\u043E\u0440  ", /*#__PURE__*/React.createElement(Vector, {
      N: this.state.N,
      vector: this.state.vector1
    })), /*#__PURE__*/React.createElement("p", null, "\u0412\u0442\u043E\u0440\u043E\u0439 \u0432\u0435\u043A\u0442\u043E\u0440  ", /*#__PURE__*/React.createElement(Vector, {
      N: this.state.N,
      vector: this.state.vector2
    })), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "Сложить"
    }));
  }
}
root.render( /*#__PURE__*/React.createElement(Task1, {
  N: 2
}));
