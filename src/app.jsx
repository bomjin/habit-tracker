import React, { Component } from 'react';
import './app.css';
import Habits from './componets/habits';
import Navbar from './componets/navbar';


class App extends Component {
  state = {
    habits : [
        {id : 1, name : 'Reading' , count : 0},
        {id : 2, name : 'Running' , count : 0},
        {id : 3, name : 'Coding' , count : 0},
      ],
}; 

handleIncrement = habit => {
  const habits = this.state.habits.map(item => {
    if(item.id === habit.id) {
      return {...habit, count: habit.count + 1 }
    }
    return item;
  })
  this.setState({habits : habits});
}
handleDecrement = habit => {
  const habits = this.state.habits.map(item => {
    if(item.id === habit.id) {
      const count = habit.count-1;
      return {...habit, count: count < 0 ? 0 : count  };
    }
    return item;
  })
  this.setState({habits : habits});
}
handleDelete = habit => {
   //item.id !== habits 값이 같이 않은것만 화면에 출력 
   const habits = this.state.habits.filter(item => item.id !== habit.id);
   this.setState({habits : habits});
}
handleAdd = name => {
  const habits = [...this.state.habits, {id : Date.now(), name , count : 0}];
  this.setState({habits : habits});
}
handleReset = () => {
  const habits = this.state.habits.map(habit => {
    if(habit.count !== 0) {
      return {...habit, count : 0 }
    }
    return habit;

  });
  this.setState({habits});
}

  render() {
    return (
    <>
  
    <Navbar totalCount={this.state.habits.filter
      (item => item.count > 0).length}/>
      {/* 필터될 아이템을 지정후 그 item.count > 0보다 커지면 그 것의 길이를 화면에 출력해라 */}
   
    <Habits 
              habits={this.state.habits}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement} 
              onDelete = {this.handleDelete}
              onAdd = {this.handleAdd}
              onReset = {this.handleReset}
              />
    </>
    );
  }
}

export default App;


