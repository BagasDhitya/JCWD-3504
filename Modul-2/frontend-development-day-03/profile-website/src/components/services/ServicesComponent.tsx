import "@/components/services/ServicesComponent.css"

interface IService {
    title: string,
    description: string,
    categories: {
        name: string,
        items: string[]
    }[]
}

export default function ServicesComponent({ title, description, categories }: IService) {
    return (
        <section className="services">
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <div className="grid">
                {
                    categories?.map((category, index) => {
                        return (
                            <div key={index} className="card">
                                <h3>{category.name}</h3>
                                <ul>
                                    {
                                        category.items.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
