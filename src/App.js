import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
    <Button Primary> hi </Button>
    <Progress percent = {33} indicating/>
    </div>
    <p> 안녕하세요 </p>
  );
}

export default App;
