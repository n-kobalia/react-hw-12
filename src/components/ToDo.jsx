import { Component } from "react";
import '../App.css';

class ToDo extends Component{
    state = {
        todo: [],
        done: ''
      }
  
      onChange=(event)=>{
        const value = event.target.value
        this.setState({
          todo: [value]
        })
      }
      
      addTask=(event)=>{
        const val = event.target.value
        this.setState({
          done: [...val]
        })
      }


      render(){
        return(
          <div className='container'>
            <input type="text" placeholder='type task' onChange={this.onChange} />
            <div className='block'>
              <div className='todo_container'>
                <p>TO DO: {this.state.todo}</p>
                <button onClick={this.addTask}>Done</button>
              </div>
              <div className='done_container'>
                <p>DONE: {this.state.done}</p>
                <button>mark as a undone</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
        )
      }
}

export default ToDo