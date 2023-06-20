import { Component } from 'react';
import './App.css';


class App extends Component{

    state = {
      todo: '',
      done: ''
    }

    onChange=(event)=>{
      const value = event.target.value
      this.setState({
        todo: value
      })
    }

    render(){
      return(
        <div className='container'>
          <input type="text" placeholder='type task' onChange={this.onChange} />
          <div className='block'>
            <div className='todo_container'>
              <p>{this.state.todo}</p>
              <button>Done</button>
            </div>
            <div className='done_container'>
              <p>Done</p>
              <button>mark as a undone</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
      )
    }
}

export default App