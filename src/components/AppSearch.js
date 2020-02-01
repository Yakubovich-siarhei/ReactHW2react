import React from 'react';
    
export default function AppSearch () {
    return   (
    <div className="search">
        <input type="text" className="searchInput" id="searchInput" placeholder="search" />
        <div className="searchButton">
          <button>All</button>
          <button>Active</button>
          <button>Done</button>
        </div>      
      </div>
    
    );
}
