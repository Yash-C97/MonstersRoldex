/*import "./App.css";
import React, { Component } from 'react';
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from './components/search-box/search-box.comonent.jsx';



class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      filteredmonsters:""
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => result.json())
      .then((user) => {
        this.setState(() => {
          return { monsters: user };
        });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value.toLowerCase() });
  };
  onSearchClick=()=>{}

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
  
      <div className="App">
        <h1 className="app-title">Monsters Roldex</h1>
        <SearchBox
          className="Search-box"
          type="search"
          placeholder="Search Monsters"
          onChangeHandler={onSearchChange}
        />
        <CardList fmonster={filteredmonsters} />
      </div>
    );
  }
}

export default App;*/

import { useState,useEffect } from "react";
import SearchBox from './components/search-box/search-box.comonent.jsx';
import CardList from "./components/card-list/card-list.component.jsx";
import './App.css'
const App=()=>{
  console.log('render');
  const [searchField, setSerachField]=useState('');
  console.log(searchField);
  const [monsters,setMonsters]=useState([]);

  useEffect(() => {
    console.log(`effect fired`);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {return response.json()})
      .then((users) => {
        setMonsters(users);
      });
  }, []);
  
  

const onSearchChange =(event)=>{
  const searchFieldString=event.target.value.toLocaleLowerCase();
  setSerachField(searchFieldString);
}
const filteredMonsters=monsters.filter((monster)=>{
  return monster.name.toLocaleLowerCase().includes(searchField)
})
  return(
    <>
    <div className="App">
      <h1 className='app-title'>Monsters Roldex</h1>
      <SearchBox className='monsters-searchbox'
      
      onChangeHandler={onSearchChange}
      placeholder='search monsters'></SearchBox>
    </div>
    <CardList monsters={filteredMonsters}></CardList>
    </>

  )
}

export default App;
