import CoffeCard from "@/components/CoffeCard"
import Navbar from "@/components/Navbar"

import data from "@/data/coffe.json"

export default function Menu() {
    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-yellow-900 text-center mb-10">Our Coffe Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        data?.map((coffe, index) => {
                            return (
                                <CoffeCard
                                    key={index}
                                    id={coffe.id}
                                    name={coffe.name}
                                    description={coffe.description}
                                    image={coffe.image}
                                    price={coffe.price}
                                />
                            )
                        })
                    }
                </div>
            </main>
        </>

    )
}
