import React from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
// import Plans from './pages/Plans'
// import Product from './pages/Product'
// import Cart from './pages/Cart'
// import LoginSignup from './pages/LoginSignup'
import Router from "./routes";

import theme from "./theme";


function App() {
  return (
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      
        {/* <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
        <Routes>         
        <Route path='/home' element={<Plans/>}/>
        <Route path="/plan/:service" element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/> 
          </Routes>
        </Suspense> */}
        <Router/>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
  );
}

export default App;
