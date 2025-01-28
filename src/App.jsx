import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutUsPage } from './pages/AboutUsPage';
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
