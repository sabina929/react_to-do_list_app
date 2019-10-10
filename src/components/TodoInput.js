import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {

    const {item, handleChange, handleSubmit, edit} = this.props;
    return (
      <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book"/>
                            </div>
                        </div>

                        <input type="text" placeholder="Add a to-do item..." className="form-control" value={item} onChange={handleChange}/>   
                    </div>

                    <button type="submit" className={edit ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>{edit ? "Edit Item" : "Add Item"}</button>
                </form>
            </div>
    )
  }
}
