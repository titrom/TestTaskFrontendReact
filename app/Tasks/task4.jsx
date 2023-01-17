
const React = require("react");
const InputNumber = require("../inputNumber.jsx").default;

class Task4 extends React.Component{

    constructor(props){
        super(props);
        this.state = {N: props.N}
        this.handleSubmitTask = this.handleSubmitTask.bind(this);

    }

    validateN(N){
        return Number(N) >= 1;
    }

    onNChange(N){
        var val = this.validateN(N) ? N : 1
        this.setState({N : val});
    }

    handleSubmitTask(e) {
        e.preventDefault();
        var N = Number(this.state.N)
        alert(`Это цифра ${[...Array(N).keys()].map(i => i + 1).join('')[N-1]}`)
    }

    render(){

        return(
            <form onSubmit={this.handleSubmitTask}>
                <InputNumber N={this.state.N} title="Введите номер цифры в ряду натуральных чисел" onChange={(N) => this.onNChange(N)}/>
                <input type="submit" value={"Найти цифру"} />
            </form>
        );
    }
}

Task4.defaultProps = {N:1};

export default Task4