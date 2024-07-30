const Search =({handleSearchChange,searchName})=>{

    return(
        <div>
          Filter search: <input
            value={searchName}
            onChange={handleSearchChange}
          />
        </div>
    )

}
export default Search