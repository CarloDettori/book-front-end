import CardComponent from "../../components/common/BookComponent" // Importiamo CardComponent per poterlo usare come componente react 
import { useContext } from "react" // Importiamo il metodo useContext di React per poter consumare ( consumer ) i dati presenti al suo interno
import { GlobalContext } from "../../context/GlobalContext" // Importiamo GlobalContext ossia l'effettivo contesto nella quale sono presenti i dati

const BookPage = () => {

    const { booksList } = useContext(GlobalContext) // Metodo consumer del context ( destructuring )
    console.log(booksList); // Verifichiamo che i dati siano effettivamente quelli corretti e che siano arrivati


    return (

        <>
            <div className="container mt-5" > {/* Creiamo la sezione dei books e per ogni dato presente nell'array stampaimo un libro*/}
                <div className="row">
                    {booksList.map((book) => {
                        return <CardComponent key={book.id} book={book} />
                    })}
                </div>
            </div>
        </>

    )

}

export default BookPage // Esportiamo con la sintassi default ( con in quale possiamo importare in maniera diretta il componente ). 
// Ps: Se dovessimo usare la esportazione named Es. ( export const app = ...) avremmo dovuto usare le { componente } per importare il nostro componente.