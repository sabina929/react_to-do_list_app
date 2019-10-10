import React, { Component } from 'react'
import TodoItem from "./TodoItem";


export default class TodoList extends Component {
  render() {

    const {items, clearList, removeItem, editItem} = this.props;
    return (
      <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">To-Do List</h3>
          
          {
      items.map(item => {
        return (
          <TodoItem key={item.id} title={item.title} removeItem={() => removeItem(item.id)} editItem={() => editItem(item.id)}/>
        )
      })
      }


          <button type="button" className="btn bt-block btn-danger text-capitalize mt-3" onClick={clearList}>Clear List</button>
      </ul>
    )
  }
}
