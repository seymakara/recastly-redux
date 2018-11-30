import React from 'react';
 
  var Search = ({handleSearchInputChange}) => (

    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={(event) => {handleSearchInputChange(event.target.value)}}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  )

export default Search;
