import React from "react";
import { useState } from "react";
import { useGlobalContext } from '../warehouse/context'

function Search() {
  const { currVal, searchInput, dispatch } = useGlobalContext();
  const [inp, setInp] = useState("");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "USER_SEARCH", payload: inp })
        }}>

        <input
          className="search-input"
          type="text"
          value={currVal}
          placeholder="Search"
          onChange={(e) => dispatch({ type: "INPUT_CHANGE", payload: e.target.value })}
        />
      </form>
    </div>
  );
}

export default Search;
