import { useEffect, useState } from "react";
import Header from "../components/header";
import { getCharacters } from "../services/getCharacters";
import CardCharacters from "../components/cardCharacters";
import CardContainer from "../components/cardContainer";
import Search from "../components/search";

function Home() {
    const [about, setAbout] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        getCharacters({ set: setAbout, page });
    }, [page]);

    useEffect(() => {
        if (loading === true && page < 42) {
            setPage(prev => prev + 1)
            setLoading(false)
        }


        const handleScroll = () => {
            if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
                setLoading(true)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [loading])

    const personagemsFiltrados = about.filter((personagem) =>
        personagem.name.toLowerCase().includes(search.toLowerCase())
    ).filter((value, index, self) => 
        index === self.findIndex((t) => t.id === value.id)
    )

    return (
        <div className="bg-[#043F47] min-h-screen">
            <Header />
            <Search search={search} setSearch={setSearch} />
            {personagemsFiltrados.length > 0 ? (
                <div className="grid grid-cols-2">
                    {

                        personagemsFiltrados.map(detalhes => (
                            <CardCharacters name={detalhes.name} status={detalhes.status} species={detalhes.species} location={detalhes.location} image={detalhes.image} episode={detalhes.episode} id={detalhes.id} />
                        ))}
                </div>
            ): (
                <div className="flex justify-center mt-10 text-3xl">
                    <p>Personagem nao encontrado</p>
                </div>
                )
            }

        </div>
    );
}

export default Home;
