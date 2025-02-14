import CardCharacters from "./cardCharacters";

function CardContainer({about}) {
    return (  
        <div className="grid grid-cols-3">
            {about.map(detalhes => (
                <CardCharacters key={detalhes.id} name={detalhes.name} status={detalhes.status} species={detalhes.species} location={detalhes.location} image={detalhes.image}/>
            ))}
        </div>
    );
}

export default CardContainer;