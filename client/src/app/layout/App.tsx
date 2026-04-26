import { useEffect, useState } from "react"
import type { Product } from "../models/product"
import Catalog from "../../features/catalog/Catalog"
import Container from "@mui/material/Container/Container"
import NavBar from "./NavBar"
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material"

function App() {
  const[products, setproducts] = useState<Product[]>([])
  const [darkMode, setDarkMode] = useState(false);
  const palletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
  palette: {
    mode: palletteType,
    background: {default: (palletteType === 'light') ? '#eaeaea' : '#121212'
    }
  },
});
const toggleDarkMode = () => {
    setDarkMode(!darkMode);
}
  useEffect(()=>{
    fetch("https://localhost:7123/api/products").then(response => response.json())
    .then(data => setproducts(data))
  }, []) 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Box
      sx={{
        minHeight: '100vh',
        background: darkMode
        ?'radial-gradient(circle at 0% 0%, #1c3274, #122030)'
        :'radial-gradient(circle at 0% 0%, #bde6f1, #d1e2ec)',
        py:6
      }}>
          <Container maxWidth='xl' sx={{marginTop: 8}}>   
          <Catalog products={products} ></Catalog>
          </Container>
      </Box>
      
    </ThemeProvider>
  )
}
export default App
