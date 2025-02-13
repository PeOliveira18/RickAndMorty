function CardCharacters({name,status,species,location}) {
    return (  
        <div className="p-5 rounded-3xl">
            <div className="bg-[#3C3E44]">
                <h1>{name}</h1>
                <div>
                    <span><li className="text-green-700"></li>{status} - {species}</span>
                </div>
                <h1>Ultima localizacao</h1>
                <h1>{location.name}</h1>
                <h1>Primeira vez visto</h1>
            </div>
        </div>
    );
}

export default CardCharacters;