import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import './App.css'
import { Blog } from './components/Blog'
import { BlogDetails } from './components/BlogDetails'

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Search a blog"></input>
          </div>
          <button>Add New</button>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

