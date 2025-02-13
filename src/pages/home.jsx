import { useEffect, useState } from "react";
import Header from "../components/header";
import { getCharacters } from "../services/getCharacters";
import CardCharacters from "../components/cardCharacters";
import CardContainer from "../components/cardContainer";

function Home() {
    const [about, setAbout] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCharacters({ set: setAbout, page })
    }, [page])

    useEffect(() => {
        if (loading === true) {
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


    return (
        <div>
            <Header />
            
            <CardContainer about={about}/>

            {loading && <h1>Loading</h1>}
        </div>
    );
}

export default Home;
