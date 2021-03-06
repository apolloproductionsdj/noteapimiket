import React from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <Nav />
      <List />
      <Note />
    </div>
  );
}
}

export default App;
