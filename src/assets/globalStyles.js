import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --font-family-headings: "Quicksand", sans-serif;
  --font-family-body: "Work Sans", sans-serif;
  --font-family-monospace: "Roboto Mono", "Courier New", monospace;
  --font-size-1: clamp(2rem, 1.7993rem + 0.8451vw, 2.75rem);
  --font-size-2: clamp(1.8rem, 1.6261rem + 0.7324vw, 2.45rem);
  --font-size-3: clamp(1.6rem, 1.4662rem + 0.5634vw, 2.1rem);
  --font-size-4: clamp(1.4rem, 1.293rem + 0.4507vw, 1.8rem);
  --font-size-5: clamp(1.2rem, 1.1331rem + 0.2817vw, 1.45rem);
  --font-size-6: clamp(0.9rem, 0.8732rem + 0.1127vw, 1rem);
  --font-size-body: clamp(1rem, 0.9599rem + 0.169vw, 1.15rem);
  --font-size-h1: clamp(40vw, 50vw, 1000px);
}

*,html, {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: calc(15px + 0.390625vw);
    scroll-behavior: smooth;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: #fff;
   
  
    
}

body {
     background: #000000; 
    box-sizing: border-box;

  &::-webkit-scrollbar {
  width: 10px;
}

&::-webkit-scrollbar-track {
    background-color: darkgrey;
}

&::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #b700ff;
}

}

  h1 {
    font-family: 'Six Caps', sans-serif;
    color: #fff;
    margin: 20px 0;
    font-size: 80px;
    
   /* font-size: var(--font-size-h1); */
     /* font-size: calc(84px + 50.390625vw); */
     
  }

  h2 {
    font-family: 'Teko', sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-size: 26px;
  }

  p {
    font-family: "Lexend Zetta", sans-serif;
    font-weigth: 900;
    font-size: 12px;
}
`;

export default GlobalStyle;
