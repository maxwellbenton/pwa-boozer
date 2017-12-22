import React, { Component } from "react";
import CocktailList from "./CocktailList";
import CocktailDetail from "./CocktailDetail";
import CocktailForm from "./CocktailForm";
import FileSystem from "file-system";
import { normalizedData } from "../normalizr";

class CocktailContainer extends Component {
  state = {
    data: {
      entities: {
        cocktails: {},
        proportions: {},
        ingredients: {}
      },
      results: []
    }
  };

  componentDidMount() {
    this.getCocktails();
  }

  getCocktails = () => {
    fetch("http://localhost:3000/api/v1/cocktails")
      .then(res => res.json())
      .then(cocktails => {
        const data = normalizedData(cocktails);
        fs.writeFile("../data.txt", data, err => {
          if (err) throw err;
          console.log("The file has been saved!");
        });
        debugger;
        this.setState({ data });
      });
  };

  handleSelection = selectedCocktail => {
    this.getCocktailDetails(selectedCocktail);
  };

  render() {
    debugger;
    console.log(this.state);
    return <div className="App" />;
  }
}

export default CocktailContainer;
