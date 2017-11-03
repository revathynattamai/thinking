import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Enter to Search" />
                <input type="checkbox" /> 
                {' '} 
                Only show products available
            </form>
            
        );
    }
}

ReactDOM.render(
    <SearchBar />,
    document.getElementById('root')
);