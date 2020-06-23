import React from "react";

const Searchbar = ({value, onChange, onSearch}) => {
    return (
        <div className = " simple-search">
        <input  name="" class="simple-search-input" placeholder="Search" value={value} onChange={onChange} />
        <button class="simple-search-button" type="submit"onClick={onSearch}>Search</button>
        
    </div>
    );
};

export default Searchbar;