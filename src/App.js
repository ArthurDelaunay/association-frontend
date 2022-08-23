import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Association from "./pages/Association"
import Associations from "./pages/Associations"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/associations">
            <h2>Associations</h2>
          </Link>
          <Link to="/contact">
            <h2>Contact</h2>
          </Link>
          <Link to="/admin">
            <h2>Admin</h2>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/associations" element={<Associations />} />
        <Route path="/associations/:slug" element={<Association />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
