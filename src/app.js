import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import variables from './variables';


// FilterableProductTable
//     SearchBar
//     ProductTable
//         ProductCategoryRow
//         ProductRow



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



class ProductCategoryRow extends Component {

}

class ProductRow extends Component {

}

class ProductTable extends Component {
    render() {
        return (
            <div>
                <ProductCategoryRow />
                <ProductRow />
            </div>
        );
    }
}

class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products = {this.props.products}/>
            </div>
        );
    }
}

ReactDOM.render(
    <FilterableProductTable products = {variables.PRODUCTS}/>,
    document.getElementById('root')
);