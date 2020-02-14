import React from 'react';
import logo from './logo.svg';
import './App.css';
import CKEditor from 'ckeditor4-react';


function App() {
  return (
    <div className="App">
      <h2>Using CKEditor 4 in React</h2>
      <CKEditor
        data="<p>Hello from CKEditor 4!</p>"
        type="classic"
      />
    </div>
  );
}

export default App;
