import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Contact from './pages/Contact';
import About from './pages/About';
import DefaultLayout from './pages/DefaultLayout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/Book" element={<Book />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
