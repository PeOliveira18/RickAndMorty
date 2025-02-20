import { useEffect, useState } from "react";

function CardCharacters({ name, status, species, location, image, episode,id }) {
    const [firstEpisode, setFirstEpisode] = useState("");

    useEffect(() => {
        if (episode.length > 0) {
            fetch(episode[0])
                .then(res => res.json())
                .then(data => setFirstEpisode(data.name))
                .catch(error => console.log("Erro ao buscar episódio:", error));
        }
    }, [episode]);

    return (
        <div className="p-5">
            <div className="bg-[#3C3E44] rounded-xl flex h-60">
                <div>
                    <img src={image} alt={`Foto de ${name}`} className="rounded-l-lg h-60" />
                </div>
                <div className="py-5 px-3 items-center text-white">
                    <h1 className="text-2xl text-white font-bold hover:text-orange-600">{name} {id}</h1>
                    <span className="items-center flex pt-3">
                        {status === "Alive" ? (
                            <span className={`bg-green-600 rounded-[50%] w-2 h-2 inline-block mr-2`}></span>
                        ) : status === "Dead" ? (
                            <span className={`bg-red-700 rounded-[50%] w-2 h-2 inline-block mr-2`}></span>
                        ) :(
                            <span className={`bg-slate-400 rounded-[50%] w-2 h-2 inline-block mr-2`}></span>
                        )}
                        {status} - {species}
                    </span>
                    <div className="pt-3 leading-7">
                        <h1 className="subtitulo font-semibold">Última localização</h1>
                        <h1>{location.name}</h1>
                    </div>
                    <div className="pt-3">
                        <h1 className="subtitulo font-semibold">Primeira vez visto em:</h1>
                        <h1>{firstEpisode || "Carregando..."}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCharacters;
