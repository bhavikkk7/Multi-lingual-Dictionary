import { createTheme, TextField, ThemeProvider } from "@material-ui/core";
import React from "react";
import "./Header.css";
import MenuItem from "@material-ui/core/MenuItem";
import categories from "../../data/category";
// import { debounce } from "lodash";

const Header = ({setcategory,category,word,setWord,LightTheme})=> {
    const darkTheme = createTheme({
    palette: {
      primary:{
        main:LightTheme?"#000":"#fff"
      },
      type:LightTheme?"light":"dark",
    },
  });
  const handleChange = (language) => {
    setcategory(language);
    setWord("");
    // setMeanings([]);
  };

  //   const handleText = debounce((text) => {
  //   setWord(text);
  // }, 500);


  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className ="search"
            label = "Search a Word"
            label = "Standard"
            value = {word}
            onChange = {(e) => setWord(e.target.value)}
          />
          <TextField
            className ="select"
            select
            label = "language"
            value = {category}
            onChange = {(e) => handleChange(e.target.value)}
          >
            {categories.map((option) => (

              <MenuItem key = {option.label} value = {option.label} >{option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
