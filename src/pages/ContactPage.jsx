const ContactPage = () => {

    const contacts = [
        { name: "Michele Saraceni", email: "michele@hotmail.it" },
        { name: "Daniel Ferraiuolo", email: "daniel@libero.it" },
        { name: "Francesco Cialfi", email: "francesco@gmail.it" },
        { name: "Andrea Giancristiani", email: "andrea@hotmail.it" },
        { name: "Carlo Dettori", email: "carlo@gmail.it" },
    ];

    return (

        <main className="p-5" >
            <h1 className="text-white mb-4 mt-4">Contacts</h1>
            <div className="list-group">
                {contacts.map((contact, index) => (
                    <div key={index} className="text-white list-group-item list-group-item-action bg-dark text-light border-secondary mb-2 rounded">
                        <h5 className="mb-1">{contact.name}</h5>
                        <a href={`mailto:${contact.email}`} className="mb-0 text-info">{contact.email}</a>
                    </div>
                ))}
            </div>
        </main >

    )
};

export default ContactPage;