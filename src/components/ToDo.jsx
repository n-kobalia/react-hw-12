import { Component } from "react";
import '../App.css';

class ToDo extends Component{
    
  state = {
        todo: '',
        done: []
      }
  
      onChange=(event)=>{
        const value = event.target.value
        this.setState({
          todo: value
        })
        console.log(this.state.todo)
      }
      
      
      
      addTask=(event)=>{
        event.preventDefault()

        const task ={
          task: this.state.todo 
        }

        this.setState({
          done: [...this.state.todo, task]
        })
        console.log(this.state.done)
      }


      render(){
        return(
          <div className='container'>
              <form onSubmit={this.addTask}>
                <input type="text" />
                <button type="submit">DONE</button>
                <p>DONE: {this.state.done}</p>
              </form>
          </div>    
        )
      }
}

export default ToDo