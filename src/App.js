import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }


  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  // ADD ITEM TO THE LIST
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    // console.log(newItem);

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      edit: false

    })

  }

  // CLEAR LIST
  clearList = () => {
    this.setState({
      items: []
    })
  }

  // REMOVE ITEM FROM THE LIST
  removeItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  }

  // EDIT SELECTED ITEM
  editItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id,
      edit: true

    })
  }


  render() {

    return (
      <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
                <h3 className="text-capitalize text-center">To-Do Input</h3>
                <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} edit={this.state.edit}/>
                <TodoList items={this.state.items} clearList={this.clearList} removeItem={this.removeItem} editItem={this.editItem}/>
            </div>
        </div>
      </div>

      );
  }

}

export default App;
