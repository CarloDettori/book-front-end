import CardComponent from "../components/common/CardComponent" // Importiamo CardComponent per poterlo usare come componente react 

const BookPage = () => {

    return (

        <>
            <div className="container mt-5" >
                <div className="row">
                    <CardComponent />                 {/* Componente card con i libri */}
                </div>
            </div>
        </>

    )

}

export default BookPage // Esportiamo con la sintassi default ( con in quale possiamo importare in maniera diretta il componente ). 
// Ps: Se dovessimo usare la esportazione named Es. ( export const app = ...) avremmo dovuto usare le { componente } per importare il nostro componente.