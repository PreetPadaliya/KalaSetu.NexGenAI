import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Catalog from './pages/Catalog'
import Story from './pages/Story'
import Coach from './pages/Coach'

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>Home </Link> {" "}
        <Link to="/upload" style={{ textDecoration: 'none' }}>Upload </Link> {" "}
        <Link to="/catalog" style={{ textDecoration: 'none' }}>Catalog </Link> {" "}
        <Link to="/story" style={{ textDecoration: 'none' }}>Story </Link> {" "}
        <Link to="/coach" style={{ textDecoration: 'none' }}>Coach </Link> {" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/story" element={<Story />} />
        <Route path="/coach" element={<Coach />} />
      </Routes>
    </div>
  )
}
