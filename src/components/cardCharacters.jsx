function CardCharacters({name,status,species,location, image}) {
    return (  
        <div className="p-5">
            <div className="bg-[#3C3E44] p-5 rounded-xl flex justify-between px-10 gap-20">
                <div className="">
                    <img src={image} alt={`Foto de ${name}`}/>
                </div>
                <div>
                    <h1>{name}</h1>
                    <div>
                        <span><li className="text-green-700"></li>{status} - {species}</span>
                    </div>
                    <h1>Ultima localizacao</h1>
                    <h1>{location.name}</h1>
                    <h1>Primeira vez visto</h1>
                </div>
            </div>
        </div>
    );
}

export default CardCharacters;