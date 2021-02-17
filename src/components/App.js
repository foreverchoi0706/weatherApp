import { useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
//components
import SampleDroptdown from "./SampleDroptdown";
import MyDropDown from "./MyDropDown";
//reducer


const KEY = "bb31b2f051db6a947350c931ddfb2426";

const AppContainer = styled.div`
  display: flex;
  div {
    flex-grow: 1;
  }
`;

function App() {
  useEffect(() => {}, []);

  return (
    <AppContainer className="App">
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
      <MyDropDown />
    </AppContainer>
  );
}

export default App;
