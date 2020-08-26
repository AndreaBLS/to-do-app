import React from 'react';
import "../css/App.scss"
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';

class App extends React.Component {

 
  constructor(props) {
    super(props) 
    this.state = {
       items:[
        { text: "Wash my face", done: false },
        { text: "Do live Coding", done: false },
        { text: "Pay my rent", done: false },
        { text: "Walk the Dog", done: true },
        { text: "create a website", done: false },
        { text: "Finish reading my book", done: false },
        { text: "Call my mom", done: false },
        { text: "Make a coffee", done: false },
       ]
    }
  }
  

  render(){

    const toDones = this.state.items.filter(item=>item.done===true)
    const toDos = this.state.items.filter(item=>item.done===false)

    return (
    <div className="app">
     <Navigation />
     <ToDosContainer toDosProps={toDos}/>
     <ToDonesContainer toDonesProps={toDones}/>
    </div>
  );
  }
  
}

export default App;
