import React from "react";


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
        for (let i = 0; i < this.props.N; i++) {
            if(this.state.vector[i]=== undefined) this.state.vector[i] = 0
            vectorInput.push(<label> {i + 1} <input type="text" value={this.state.vector[i]} onChange={(e) => this.onChange(e,i)}
            onBlur={(e) => this.onBlur(e,i)} onFocus={this.onFocus}></input></label>);
        }
        return( <ul>{vectorInput}</ul>);
    }
}


class Task1And2 extends React.Component{

    constructor(props){
        super(props);
        
        var N =  this.validateN(props.N) ? props.N : 1;

        this.state = {N: N, vector1:[...Array(N).fill(0)],vector2:[...Array(N).fill(0)]}

        this.onNChange = this.onNChange.bind(this);
        this.handleSubmitTask = this.handleSubmitTask.bind(this);

    }

    validateN(N){
        return Number(N) >= 0;
    }

    onNChange(e){
        var val = this.validateN(e.target.value) ? e.target.value : 1
        var vector1 = this.state.vector1;
        var vector2 = this.state.vector2;
        
        vector1.length = val
        vector2.length = val
        this.setState({N : val, vector1:vector1, vector2:vector2 });
    }

    scalarProduct(vectors){
        return vectors[0].reduce(function(s,aItme,i){return s + aItme * vectors[1][i]},0);
    }

    handleSubmitTask(e) {
        e.preventDefault();
        var vector1 = this.state.vector1;
        var vector2 = this.state.vector2;
        alert(
            `Скалярное произведение двух векторов [${vector1}] и [${vector2}] = ${this.scalarProduct([vector1,vector2])}`
        );

    }

    render(){

        return(
            <form onSubmit={this.handleSubmitTask}>
                <p>
                    <label>Введите размерность векторов:<br/>
                    <input type="text" name="N" value={this.state.N} onChange={this.onNChange}/>
                    </label>
                </p>
                <p>
                  Первый вектор  {<Vector N={this.state.N} vector={this.state.vector1}/>} 
                </p>
                <p>
                  Второй вектор  {<Vector N={this.state.N} vector={this.state.vector2}/>}
                </p>

                <input type="submit" value={"Сложить"} />
            </form>
        );
    }
}

export default Task1And2