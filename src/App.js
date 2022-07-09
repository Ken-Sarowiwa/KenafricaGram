import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UserForm from './comps/UserForm';

function App() {
  return (
    <div className="App">
      <Title/>
      <UserForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
