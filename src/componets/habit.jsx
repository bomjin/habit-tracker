import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    //Lifecycle 기능들을 수행할 때 사용
    componentDidMount() {
        console.log(`habit : ${this.props.habit.name} mounted`);
    }
    componentWillUpdate() {
        console.log(`habit: ${this.props.habit.name} will unmount`);
        }
    handleIncrement = () => {
        //this.props.onIcrement >> 증가 함수
        //this.props.habit >> habit 증가하는 해당 값 
       this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
       const {name, count} = this.props.habit;
        return(
            <li className="habit">
            <span className='habit-name'>{name}</span>
            <span className='habit-count'>{count}</span>
            <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                <i className='fas fa-plus-square'></i>
            </button>
            <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
                <i className='fas fa-minus-square'></i>
            </button>
            <button className='habit-button habit-delete' onClick={this.handleDelete}>
                <i className='fas fa-trash'></i>
            </button>

            </li>
        )
        }
    
    }


export default Habit; 