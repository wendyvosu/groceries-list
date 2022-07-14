import './App.css';
import groceryData from "./data/groceryData"
import {Component} from "react"
import Navbar from "./components/Navbar"
import GroceryList from "./components/groceryList"

class App extends component {
    state = {
      item: 'groceryData',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false
  }
}

handleChange = (event) => {
  this.setState({[event.target.id]: event.target.value})
}

handleSubmit = (event) => {
    event.preventDefault()
}

    const newGrocery = {
        item: this.state.item,
        brand: this.state.brand,
        units: this.state.units,
        quantity: this.state.quantity,
        isPurchased: true
  }

    this.setState({groceryData: [newGrocery, ...this.state.groceryData],
        item: '',
        brand: '',
        units: '',
        quantity: '',
        isPurchased: false
    })
  
handleRemove = (item, idx) => {
    console.log(item, idx)
}

const newArray = this.state.groceryData.filter((i, index) => index!==idx)

const filterArray = this.state.groceryData.filter((i, index) => index!==idx)
newArray[0].isPurchased = true
console.log(this.state.groceryData)
this.setState({groceryData: [...newArray,...filterArray]})


render() {
  return (
    <div className="App">
      <Navbar text="Grocery List" />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Item Name</label>
          <input type="text" value={this.state.item} onChange={this.handleChange} id="item"/>

          <label htmlFor="brand">Brand Name</label>
          <input type="text" value={this.state.item} onChange={this.handleChange} id="brand"/>

          <label htmlFor="units">Units</label>
          <input type="text" value={this.state.item} onChange={this.handleChange} id="units"/>

          <label htmlFor="quantity">Quantity</label>
          <input type="text" value={this.state.item} onChange={this.handleChange} id="quantity"/>

          <input type="submit" id="submit"></input>
        </form>
      
      <GroceryList groceries={this.state.groceryData} handleRemove={this.handleRemove}/>
    </div>
  );
};
}

export default App;