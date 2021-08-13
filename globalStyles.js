import styled, { createGlobalStyle } from "styled-components";
// import snow1 from "./images/snow1.png";
// import snow2 from "./images/snow2.png";
// import snow3 from "./images/snow3.png";

// const snow = keyframes`
//   0% {
//     background-position: 0px 0px, 0px 0px, 0px 0px;
//   }
//   50%
//   {
//     background-position: 500px 500px, 100px 200px, -100px 150px;
//   }
//   100%
//   {
//     background-position: 500px 1000px, 200px 400px, -100px 300px;
//   }
// `;

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Source Sans Pro", sans-serif;
      transition: background 0.5s ease;
  }

  :root {
    --light-theme: #fff;
    --dark-theme: #101522;
  }

  ${
    "" /* body {
    position: relative;
  }

  
  body:after {
   content: '';
   display: block;
   position: absolute;
   z-index: 2;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   pointer-events: none;
   background-image: url(${snow1}), url(${snow2}), url(${snow3});
    animation: ${snow} 10s linear infinite;
  } */
  }
`;

export const Container = styled.div`
  --padding: 50px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--padding);
  padding-left: var(--padding);

  @media screen and (max-width: 991px) {
    --padding: 30px;
    padding-right: var(--padding);
    padding-left: var(--padding);
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
