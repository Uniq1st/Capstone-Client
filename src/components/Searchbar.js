import React, { Component } from "react";

const Searchbar = ({value, onChange, onSearch}) => {
    return (
    //     <div class="simple-search">
	// 			<input type="search" name="" class="simple-search-input" placeholder="Search" />
	// 			<button class="simple-search-button" type="submit">
	// 			<svg class="simple-search-icon" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill="#000000" fill-rule="nonzero"><path d="M31.2168494,27.435073 L24.2650133,20.4833648 C24.2280674,20.4464189 24.1847295,20.4205951 24.1461216,20.386206 C25.5140145,18.3112276 26.3123782,15.8274154 26.3123782,13.1563169 C26.3123782,5.89024897 20.4221292,0 13.1561891,0 C5.89024897,0 0,5.89024897 0,13.1561891 C0,20.4220013 5.89012113,26.3123782 13.1560612,26.3123782 C15.8272875,26.3123782 18.3109719,25.5140145 20.3859503,24.1461216 C20.4203394,24.1846016 20.4460353,24.2279395 20.4829812,24.2648854 L27.4349452,31.2168494 C28.4792739,32.2610502 30.1723929,32.2610502 31.2168494,31.2168494 C32.2610502,30.1725207 32.2610502,28.4794017 31.2168494,27.435073 Z M13.1561891,21.7515421 C8.40896162,21.7515421 4.56070824,17.9032887 4.56070824,13.1561891 C4.56070824,8.40896162 8.40908946,4.56070824 13.1561891,4.56070824 C17.9031609,4.56070824 21.7515421,8.40908946 21.7515421,13.1561891 C21.7515421,17.9032887 17.9031609,21.7515421 13.1561891,21.7515421 Z"></path></g></svg>
	// 			</button>
	// 			</div>
        <div className = " simple-search">
            <input  name="" class="simple-search-input" placeholder="Search" value={value} onChange={onChange} />
            <button class="simple-search-button" type="submit"onClick={onSearch}>Search</button>
            
        </div>

    );
};

export default Searchbar;