import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book"/>
                            </div>
                        </div>

                        <input type="text" placeholder="Add a to-do item..." className="form-control"/>   
                    </div>

                    <button type="submit" className="btn btn-block btn-primary mt-3">Add Item</button>
                </form>
            </div>
    )
  }
}
