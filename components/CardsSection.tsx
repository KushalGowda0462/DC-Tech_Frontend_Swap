import { Post } from "@/data/data"
import BlogCardsBeautiful from "./BlogCardsBeautiful"

function CardsSection({ cardsData, title,linkprev }: { cardsData: Post[], title?: string,linkprev:string}) {
    return (
        <section className="mb-16">
            {title ? (<h2 className="text-2xl font-bold mb-8 text-foreground">{title}</h2>) : (null)}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardsData.map((card, idx) => (
                    <BlogCardsBeautiful card={card} href={`${linkprev}/${idx.toString()}`} key={idx}/>
                ))}
            </div>
        </section>
    )
}

export default CardsSection