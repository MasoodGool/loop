import styled from "styled-components";

const Form = styled.form `
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-gap: 10px;
    margin: auto 0;
    padding: 20px;
    background-color: rgba(255,255,255,0.9);
    border-radius: 10px;
    box-shadow: 0 32px 64px rgba(0,0,0,0.2);
`

const Heading = styled.h2 `
    margin-bottom: 5px;
    text-align: center;
    text-shadow: 0 4px 16px #fff;
    font-size: 30px;
    font-weight: 100;
    @media only screen and (min-width: 420px) {
        font-size: 40px;
    }
`;

const Field = styled.fieldset `
    margin: 0;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`

const Legend = styled.legend `
    padding: 5px;
    background-color: #fff;
    border-radius: 5px;
`

const List = styled.ul `
    margin: 0;
    padding: 0;
`
const ListItem = styled.li `
    display: grid;
    align-items: center;
    margin: 10px;
    @media only screen and (min-width: 420px) {
        grid-template-columns: 100px 1fr;
    }
`

const Label = styled.label `
    text-align: left;
    padding-bottom: 2px;
    @media only screen and (min-width: 420px) {
        padding-right: 10px;
        padding-bottom: 0;
        text-align: right !important;
    }
`

const Input = styled.input `
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    &:hover {
      border: 1px solid #aaf;
    }
`;

const Button = styled.button `
    padding: 10px;
    border:1px solid rgba(0,0,0,0);
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    &:hover {
      background-color: #eef;
      border: 1px solid #aaf;
    }
`

const Section = styled.section `
  display: grid;
  grid-template-columns: 1fr minmax(200px,400px) 1fr;
  grid-template-rows: 1fr minmax(auto,1fr) 1fr;
  grid-gap: 10px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  box-sizing: border-box;

  @keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}
`

export { Section, Form, Heading, Field, Legend, List, ListItem, Label, Input, Button };