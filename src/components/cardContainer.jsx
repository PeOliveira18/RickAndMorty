import CardCharacters from "./cardCharacters";

function CardContainer({about}) {
    return (  
        <div className="grid grid-cols-2 ">
            {about.map(detalhes => (
                <CardCharacters key={detalhes.id} name={detalhes.name} status={detalhes.status} species={detalhes.species} location={detalhes.location} image={detalhes.image} episode={detalhes.episode}/>
            ))}
        </div>
    );
}

export default CardContainer;