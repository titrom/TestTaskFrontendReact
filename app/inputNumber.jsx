
const React = require("react");
class InputNumber extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);

        this.state = {N: props.N, NValid: this.validateN(props.N) , title: props.title}
    }

    validateN(N){
        return Number(N) >= 0;
    }

    onChange(e){
        var val = e.target.value;
        var valid = this.validateN(val)

        this.setState({N:val, NValid: valid})
        this.props.onChange( valid===true ? val : 1);

    }
    onBlur(e){
        var val = e.target.value;
        var valid = this.validateN(val);
        this.setState({N:this.props.onBlur(valid ? val : 1)});

    }
    
    render(){
        return (
        <label> <h2>{this.state.title}</h2>
        <input type="text" name="N" value={this.state.NValid===true ? this.state.N : 1} onChange={this.onChange} onBlur={this.onBlur}/>
        </label>
        );
    };
}

InputNumber.defaultProps = {N:0,onChange:(N)=>{return N},onBlur:(N)=>{ return N}}

export default InputNumber;