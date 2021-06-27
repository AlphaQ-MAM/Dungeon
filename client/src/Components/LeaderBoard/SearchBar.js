import React from 'react'
import '../../Pages/LeaderBoard/LeaderBoard.css'
    
function SearchBar() {
    return (
        <nav style={{width:'50%',margin:'0 auto'}} >
            <div className="nav-wrapper orange darken-1 searchPosition">
                <form>
                    <div className="input-field ">
                        <input id="search" type="search" required placeholder="Search Yourself" style={{ fontWeight: 'bold'}}/>
                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>

    )
}

export default SearchBar
