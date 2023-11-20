import { Component } from "react";
import React from "react";
import './searchbox.style.css'
class SearchBox extends Component{
    render(){
        return (
            <input className={`serachbox ${this.props.classname}`}
            type='search'
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}>
            </input>
        )
    }

}

export default SearchBox;


