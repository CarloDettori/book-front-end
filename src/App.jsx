import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import Contact from './pages/Contact';
import About from './pages/About';
import DefaultLayout from './components/layout/DefaultLayout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" >
              <Route index element={<BooksPage />} />
              <Route path=":id" element={<BookDetailsPage />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
