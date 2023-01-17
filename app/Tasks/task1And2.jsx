const React = require("react");
const InputNumber = require("../inputNumber.jsx").default;

class Vector extends React.Component{
    constructor(props){
        super(props);   
        this.state = {vector: props.vector};
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);


    }
    vectorItemIsValid(vectorItem){
        return !isNaN(vectorItem) && 
         !isNaN(parseFloat(vectorItem))
    }
    onChange(e,position){
        var val = e.target.value;
        var vector = this.state.vector;
        vector[position] = val
        this.setState({vector: vector});
    }

    onBlur(e, position){
        var val = e.target.value;
        var vector = this.state.vector;
        vector[position] = this.vectorItemIsValid(val)===true ? val : 0
        this.setState({vector: vector});
    }

    onFocus(e){
        var val = e.target.value;
        if(val=="0") e.target.value = "";
    }

    render(){
        var vectorInput = [];
        for (let i = 0; i < this.state.vector.length; i++) {
            if(this.state.vector[i]=== undefined) this.state.vector[i] = 0
            vectorInput.push(
                <li key={i+1}><label><input type="text"   value={this.state.vector[i]} onChange={(e) => this.onChange(e,i)}
                    onBlur={(e) => this.onBlur(e,i)} onFocus={this.onFocus}></input>
                </label></li>
            );
        }
        return( 
            <div>
                <h3>{this.props.title}</h3>
                <ol> {vectorInput}</ol>
            </div>
        );
    }
}


class Task1And2 extends React.Component{

    constructor(props){
        super(props);

        this.vector1 = React.createRef();
        this.vector2 = React.createRef();
        this.state = {N: props.N}
        this.handleSubmitTask = this.handleSubmitTask.bind(this);

    }



    onChange(N){
        this.vector1.current.state.vector.length = N;
        this.vector2.current.state.vector.length = N;

        this.setState({N:N})
    }

    scalarProduct(vectors){
        return vectors[0].reduce(function(s,aItme,i){return s + aItme * vectors[1][i]},0);
    }

    handleSubmitTask(e) {
        e.preventDefault();

        var vector1 = this.vector1.current.state.vector;
        var vector2 = this.vector2.current.state.vector;
        alert(
            `Скалярное произведение двух векторов [${vector1}] и [${vector2}] = ${this.scalarProduct([vector1,vector2])}`
        );

    }

    render(){
        return(
            <form className="task1And2Form" onSubmit={this.handleSubmitTask}>
                <InputNumber N={this.state.N} title="Введите размер векторов:" onChange={(N) => this.onChange(N)}/>
                <Vector title="Вектор 1" vector={[...Array(this.state.N).fill(0)]} ref={this.vector1}/>
                <Vector title="Вектор 2" vector={[...Array(this.state.N).fill(0)]} ref={this.vector2}/>

                <input className="form-btn" type="submit" value={"Сложить"} />
            </form>
        );
    }
}

export default Task1And2