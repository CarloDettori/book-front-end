const AboutUsPage = () => {

    const teamMembers = [
        { name: "Michele Saraceni", role: "Co-Founder & CEO", email: "michele@hotmail.it" },
        { name: "Daniel Ferraiuolo", role: "Co-Founder & CTO", email: "daniel@libero.it" },
        { name: "Francesco Cialfi", role: "Lead Developer", email: "francesco@gmail.it" },
        { name: "Andrea Giancristiani", role: "Creative Director", email: "andrea@hotmail.it" },
        { name: "Carlo Dettori", role: "Marketing Manager", email: "carlo@gmail.it" },
    ];

    return (
        <main className="p-5">
            <h1 className="text-white mb-4">About Us</h1>
            <div className="text-light mb-4">
                <p>We are a team of passionate professionals dedicated to providing high-quality services to our clients. Our goal is to make a positive impact through innovation, creativity, and collaboration.</p>
                <p>Our team is built on trust, respect, and a shared commitment to excellence. We strive to foster an inclusive and supportive environment where every team member can thrive and contribute to our collective success.</p>
            </div>
            <h3 className="text-white mb-3">Meet Our Team</h3>
            <div className="list-group">
                {teamMembers.map((member, i) => (
                    <div key={i} className="list-group-item list-group-item-action bg-dark text-light border-secondary mb-2 rounded">
                        <h5 className="mb-1">{member.name}</h5>
                        <p className="mb-0">{member.role}</p>
                        <p className="text-info">{member.email}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default AboutUsPage;
