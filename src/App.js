import React from 'react';
import ImageGrid from './comps/ImageGrid';
import { Modal } from './comps/Modal';
import Title from './comps/Title';
import UserForm from './comps/UserForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './comps/Login';
import Register from './comps/Register';
import Reset from './comps/Reset';
function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Reset" element={<Reset />} />
        </Routes>
      </Router>
      <Title/>
      <UserForm/>
      <ImageGrid setselectedImage={setSelectedImage}/>
      {selectedImage&& <Modal selectedImage={selectedImage} setSelectedImage = {setSelectedImage} />}
    </div>
  );
}

export default App;
