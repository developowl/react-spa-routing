import { lightTheme, darkTheme, GlobalStyle } from "./App.styled.js";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Gnb from "./components/headers/Gnb";
import NewsListPage from "./pages/newsListPage";
import useThemeStore from "./stores/themeStore.js";

function App() {
  const { theme } = useThemeStore();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Gnb />
        <main>
          <Routes>
            <Route path="/news/:category" element={<NewsListPage />} />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
