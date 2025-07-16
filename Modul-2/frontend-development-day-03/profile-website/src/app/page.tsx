import HeroComponent from "@/components/hero/HeroComponent"
import ServicesComponent from "@/components/services/ServicesComponent"

import dataHero from "@/data/hero.json"
import dataService from "@/data/service.json"

export default function Home() {
  return (
    <>
      <HeroComponent
        name={dataHero.name}
        role={dataHero.role}
        description={dataHero.description}
        contact={dataHero.contact}
      />
      <ServicesComponent
        title={dataService.title}
        description={dataService.description}
        categories={dataService.categories}
      />
    </>
  )
}
