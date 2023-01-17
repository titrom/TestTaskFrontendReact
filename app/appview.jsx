const React = require("react");
const connect = require("react-redux").connect;
const actions = require("./actions.jsx");
const Task1And2 = require("./Tasks/task1And2.jsx").default;
const Task3 = require("./Tasks/task3.jsx").default;
const Task4 = require("./Tasks/task4.jsx").default;



class AppView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div> 
            <div><h1>Заданией 1 и 2</h1> <Task1And2 N={3}/> </div>
            <div><h1>Задание 3</h1> <Task3/> </div>
            <div><h1>Задание 4</h1> <Task4/> </div>


        </div>
        );
    }
}

export default AppView;