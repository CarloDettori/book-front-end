import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import Contact from './pages/Contact';
import About from './pages/About';
import DefaultLayout from './pages/DefaultLayout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/Books" >
              <Route index element={<BooksPage />} />
              <Route path=":id" element={<BookDetailsPage />} />
            </Route>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
