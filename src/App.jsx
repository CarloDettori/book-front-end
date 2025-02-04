import { BrowserRouter, Routes, Route } from 'react-router-dom' // Dopo aver installato react-router-dom ci importiamo "BrowserRouter", "Routes", "Route"
import BooksPage from './pages/booksPages/BooksPage'                      // Importiamo i vari componenti e le pagine necessarie per il rendering delle pagine
import BookDetailsPage from './pages/booksPages/BookDetailsPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import DefaultLayout from './components/layout/DefaultLayout'; // Importiamo il layout di default per le varie rotte web
import { GlobalProvider } from './context/GlobalContext';  // Importiamo 
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>                                                   {/* BrowserRouter gestisce il routing dell'app */}
          <Routes>                                                        {/* Definisce le rotte dell'app */}

            <Route element={<DefaultLayout />}>                           {/* Layout di default per tutte le rotte */}
              <Route path="/" element={<HomePage />} />

              <Route path="/books">                                            {/* Rotta principale con annidamento rotte */}
                <Route index element={<BooksPage />} />                   {/* Nested Route: Pagina dei libri */}
                <Route path=":id" element={<BookDetailsPage />} />        {/* Nested Route: Dettagli libro (id dinamico) */}
              </Route>

              <Route path="/contact" element={<ContactPage />} />         {/* Pagina di contatto */}
              <Route path="/about" element={<AboutUsPage />} />           {/* Pagina "Chi siamo" */}

            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  );
}

export default App; // Esportiamo con la sintassi default ( con in quale possiamo importare in maniera diretta il componente ). 
// Ps: Se dovessimo usare la esportazione named Es. ( export const app = ...) avremmo dovuto usare le { componente } per importare il nostro componente

