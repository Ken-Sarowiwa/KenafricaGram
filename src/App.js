import React from 'react';
import ImageGrid from './comps/ImageGrid';
import { Modal } from './comps/Modal';
import Title from './comps/Title';
import UserForm from './comps/UserForm';

function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  return (
    <div className="App">
      <Title/>
      <UserForm/>
      <ImageGrid setselectedImage={setSelectedImage}/>
      <Modal selectedImage={selectedImage}/>
    </div>
  );
}

export default App;
