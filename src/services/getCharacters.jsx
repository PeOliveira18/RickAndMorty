export const getCharacters = ({set,page}) => {
    const endpoints = []

    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(data => set(prev => [...prev, ...data.results]))
    .catch(error => console.log(error)
    .finally(() => console.log('Fetch atualizado'))
    )
}