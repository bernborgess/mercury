import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import { Blog } from './components/Blog';
import { BlogDetails } from './components/BlogDetails';
import { Modal } from './components/Modal';

export default function App() {

  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Search a blog"></input>
          </div>
          <button onClick={handleOpenModal}>Add New</button>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
      <Modal
        {...{
          showModal,
          setShowModal
        }}
      />
    </div>
  )
}

