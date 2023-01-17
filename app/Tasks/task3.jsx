const React = require("react");
const InputNumber = require("../inputNumber.jsx").default;


class Task3 extends React.Component{

    constructor(props){
        super(props);

        this.state = {startRange: props.startRange,  stopRange: props.stopRange}

        this.handleSubmitTask = this.handleSubmitTask.bind(this);

    }

    validate(startRange, stopRange){
        return Number(stopRange) > Number(startRange);
    }

    onStartRangeChange(N){
        this.setState({startRange:N})
    }

    onStopRangeChange(N){
        this.setState({stopRange:N})
    }

    onStartRangeBlur(N){
        var val = this.validate(N, this.state.stopRange) ? N : 1;
        this.setState({startRange:val})
        return val;
    }

    onStopRangeBlur(N){
        var val = this.validate(this.state.startRange, N) ? N : Number(this.state.startRange) + 10;
        this.setState({stopRange:val});
        return val;
    }

    searchPrimeNumbers(start, stop){
        var result = [];
        for (let i = start; i < stop + 1; i++) {
            let x = new Set();
            for (let j = i; j >= i**0.5; j--) {
                if ( i % j == 0){
                    x.add(j);
                    x.add(Math.floor(i / j));
                }
                if(x.size > 2) break;
            }
            if (x.size == 2){
                result.push(Math.max(...x));
            }
        }
        return result;
    }

    handleSubmitTask(e) {
        e.preventDefault();
        var startRange = this.state.startRange;
        var stopRange = this.state.stopRange;
        alert(
            `В промежутке с ${startRange} до ${stopRange} есть такие простые как ${this.searchPrimeNumbers(Number(startRange), Number(stopRange))}`
        );
    }

    render(){

        return(
            <form className="task3Form" onSubmit={this.handleSubmitTask}>
                <InputNumber N={this.state.startRange} title="Введите начало диапазона:" onChange={(N) => this.onStartRangeChange(N)} onBlur={(N) => this.onStartRangeBlur(N)}/>
                <InputNumber N={this.state.stopRange} title="Введите конец диапазона:" onChange={(N) => this.onStopRangeChange(N)} onBlur={(N) => this.onStopRangeBlur(N)}/>
                <input className="form-btn" type="submit" value={"Найти простые числа в диапозоне"} />
            </form>
        );
    }
}
Task3.defaultProps = {startRange:1,stopRange:10};

export default Task3;