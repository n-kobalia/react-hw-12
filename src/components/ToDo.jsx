import { Component } from "react";
import '../App.css';

class ToDo extends Component{
    
  state = {
        todo: '',
        done: []
      }
  
      // onChange=(event)=>{
      //   const value = event.target.value
      //   this.setState({
      //     todo: value
      //   })
      //   console.log(this.state.todo)
      // }
      
      

      addTask=(event)=>{
        // const val = event.target.value
        this.setState({
          done: [...this.state.todo]
        })
        console.log(this.state.done)
      }


      render(){
        return(
          <div className='container'>
            <input type="text" placeholder='type task' onChange={this.onChange} />
            <div className='block'>
              <div className='todo_container'>
                {/* {this.state.todo.map((task,index)=>(
                   <div key={index} className="task">
                   <p>{task.todo}</p>
                 </div>
                ))} */}
                <button onClick={this.addTask}>Done</button>
              </div>
              <div className='done_container'>
                <p>DONE:{this.state.done} </p>
                <button>mark as a undone</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
        )
      }
}

export default ToDo