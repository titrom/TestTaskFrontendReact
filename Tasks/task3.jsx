class Task3 extends React.Component{

    constructor(props){
        super(props);
        
        var startRange =  this.validateStartRange(props.startRange) ? props.startRange : 1;
        var stopRange =  this.validateStartRange(props.stopRange, startRange) ? props.stopRange : startRange + 10;


        this.state = {startRange: startRange,  stopRange: stopRange}

        this.onStartRangeChange = this.onStartRangeChange.bind(this);
        this.onStopRangeChange = this.onStopRangeChange.bind(this);

        this.onStartRangeBlur = this.onStartRangeBlur.bind(this);
        this.onStopRangeBlur = this.onStopRangeBlur.bind(this);

        this.handleSubmitTask = this.handleSubmitTask.bind(this);

    }

    validateStartRange(startRange){
        return Number(startRange) >= 1;
    }
    validateStopRange(stopRange,startRange){
        return Number(stopRange) > Number(startRange);
    }

    onStartRangeChange(e){
        this.setState({startRange:e.target.value})
    }

    onStopRangeChange(e){
        this.setState({stopRange:e.target.value})
    }

    onStartRangeBlur(e){
        var val = this.validateStartRange(e.target.value) ? e.target.value : 1;
        var valS = this.validateStopRange(this.state.stopRange, val) ? this.state.stopRange : Number(val) + 10;
        this.setState({startRange:val, stopRange: valS})
    }

    onStopRangeBlur(e){
        var val = this.validateStopRange(e.target.value, this.state.startRange) ? e.target.value : Number(this.state.startRange) + 10;
        this.setState({stopRange:val})
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
            <form onSubmit={this.handleSubmitTask}>
                <p>
                    <label>Введите начало диапазона:
                        <input type="text" name="start" value={this.state.startRange} onChange={this.onStartRangeChange} onBlur={this.onStartRangeBlur}/></label><br/>
                    <label>Введите конец диапазона:
                        <input type="text" name="stop" value={this.state.stopRange} onChange={this.onStopRangeChange} onBlur={this.onStopRangeBlur}/></label>
                    
                </p>
                <input type="submit" value={"Найти простые числа в диапозоне"} />
            </form>
        );
    }
}
Task3.defaultProps = {startRange:1,stopRange:10}
// rootTask3.render(
//     <Task3/>
// );
