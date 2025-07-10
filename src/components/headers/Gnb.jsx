import {
  NavContainer,
  StyledNavLink,
  NavList,
  ThemeSwitchContainer,
  Slider,
  IconWrapper,
  SunIcon,
  MoonIcon,
} from "./Gnb.styled";
import useThemeStore from "../../stores/themeStore.js";

function Gnb() {
  const { theme, toggleTheme } = useThemeStore();
  const isDarkMode = theme === "dark";

  return (
    <NavContainer>
      <NavList>
        <li>
          <StyledNavLink to="/news/all">All</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/news/business">Business</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/news/entertainment">Entertainment</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/news/health">Health</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/news/science">Science</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/news/sports">Sports</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/news/technology">Technology</StyledNavLink>
        </li>
      </NavList>
      <ThemeSwitchContainer onClick={toggleTheme}>
        <IconWrapper>
          <SunIcon $isDarkMode={isDarkMode} />
          <MoonIcon $isDarkMode={isDarkMode} />
        </IconWrapper>
        <Slider $isDarkMode={isDarkMode} />
      </ThemeSwitchContainer>
    </NavContainer>
  );
}

export default Gnb;
