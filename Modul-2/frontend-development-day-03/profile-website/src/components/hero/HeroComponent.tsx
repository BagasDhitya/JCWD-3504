import "@/components/hero/HeroComponent.css"

interface IHero {
    name: string,
    role: string,
    description: string,
    contact: {
        phone: string,
        email: string,
        location: string
    }
}

export default function HeroComponent({ name, role, description, contact }: IHero) {
    return (
        <section className="hero">
            <div className="text">
                <h1>Hello, I'm {name}</h1>
                <h2>{role}</h2>
                <p>{description}</p>
                <ul>
                    <li>{contact.phone}</li>
                    <li>{contact.email}</li>
                    <li>{contact.location}</li>
                </ul>
                <button>Download CV</button>
            </div>
            <div className="image">
                <img src="./assets/random_guy_profile.jpg" alt="Profile" />
            </div>
        </section>
    )
}
