// const rootTask4 = ReactDOM.createRoot(document.getElementById("task4"));
class Task4 extends React.Component{

    constructor(props){
        super(props);
        
        var N =  this.validateN(props.N) ? props.N : 1;

        this.state = {N: N}

        this.onNChange = this.onNChange.bind(this);
        this.handleSubmitTask = this.handleSubmitTask.bind(this);

    }

    validateN(N){
        return Number(N) >= 1;
    }

    onNChange(e){
        var val = this.validateN(e.target.value) ? e.target.value : 1
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
                <p>
                    <label>Введите номер цифры в ряду натуральных чисел<br/>
                    <input type="text" name="N" value={this.state.N} onChange={this.onNChange}/>
                    </label>
                </p>
                <input type="submit" value={"Найти цифру"} />
            </form>
        );
    }
}


// rootTask4.render(
//     <Task4 N={1}/>
// );