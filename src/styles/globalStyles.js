import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing; border-box;
}

body{
font-family: Arial, sans-serif;
background-color: #f4f4f9;
color: #333;
padding: 20px;
}

h1{
text-align: center;
margin-bottom: 20px;
color: #007bff;

}
`;
