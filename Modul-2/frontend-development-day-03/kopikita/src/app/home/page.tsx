import CoffeCard from "@/components/card/CoffeCard"
import data from '@/data/coffe.json'

import "@/styles/home.css"
export default function Home() {
    return (
        <main className="container">
            <header className="hero">
                <h1>Our Coffe Menu</h1>
                <p>Explore our signature Indonesian coffe selections below.</p>
            </header>
            <section className="grid">
                {
                    data.map((coffe) => {
                        return (
                            <CoffeCard
                                id={String(coffe.id)}
                                name={coffe.name}
                                description={coffe.description}
                                image={coffe.image}
                                price={String(coffe.price)}
                            />
                        )
                    })
                }
            </section>
        </main>
    )
}
