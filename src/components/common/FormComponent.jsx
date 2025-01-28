
const FormComponent = () => {

    return (

        <form style={{ width: "26rem" }}>

            <div data-mdb-input-init className="form-outline mb-1">
                <input type="text" id="form4Example1" className="form-control" placeholder="Insert ur name here" />
                <label className="form-label text-white" htmlFor="form4Example1">Name</label>
            </div>


            <div data-mdb-input-init className="form-outline mb-1">
                <input type="email" id="form4Example2" className="form-control" placeholder="Insert ur username here" />
                <label className="form-label text-white" htmlFor="form4Example2">Vote</label>
            </div>


            <div data-mdb-input-init className="form-outline mb-1">
                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                <label className="form-label text-white text-black" htmlFor="form4Example3">Message</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
                <input
                    className="form-check-input me-2 "
                    type="checkbox"
                    value=""
                    id="form4Example4"
                    checked
                />
                <label className="form-check-label text-white" htmlFor="form4Example4">
                    Send me a copy of this message
                </label>
            </div>


            <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send</button>
        </form>

    )
}

export default FormComponent