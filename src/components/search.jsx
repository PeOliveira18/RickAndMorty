
function Search({search, setSearch}) {

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (  
        <div>
            <input value={search} type="text" name="" id="" placeholder="Busque um personagem" className="w-[90%] flex m-auto p-2 rounded-md bg-[#F1F1F1] outline-none text-[#043F47]" onChange={handleSearch}/>
        </div>
    );
}

export default Search;