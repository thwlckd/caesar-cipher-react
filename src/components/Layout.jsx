import { Children, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FaBurger } from "react-icons/fa6";
import useDarkMode from "../hooks/useDarkMode";

const menus = [
  { title: "Encryption", path: "encryption" },
  { title: "Decryption", path: "decryption" },
];

const Layout = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <Header>
        <MenuBtn onClick={() => setIsToggleMenu((prev) => !prev)}>
          <FaBurger size={30} color="inherit" />
        </MenuBtn>
        <Title to={""}>Caesar Cipher App</Title>
        <DarkModeBtn onClick={toggleDarkMode}>
          <Toggle darkmode={darkMode}>
            {darkMode === "dark" ? "🌕" : "🌞"}
          </Toggle>
        </DarkModeBtn>
      </Header>
      {isToggleMenu && (
        <MenuBar>
          {Children.toArray(
            menus.map(({ title, path }) => (
              <Menu>
                <CC to={path}>{title}</CC>
              </Menu>
            ))
          )}
        </MenuBar>
      )}
    </>
  );
};

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const MenuBtn = styled.button`
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  text-align: center;
  background-color: inherit;
`;

const Title = styled(Link)`
  border: none;
  font-size: 25px;
  font-weight: bold;
`;

const DarkModeBtn = styled.button`
  position: absolute;
  right: 10px;
  height: 25px;
  aspect-ratio: 2 / 1;
  border-radius: 25px;

  &:hover {
    opacity: 100%;
  }
`;

const Toggle = styled.div`
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: white;
  border-radius: 50%;
  font-size: 20px;
  ${({ darkmode }) =>
    darkmode === "dark" &&
    css`
      margin-left: 25px;
    `};
  transition: 0.3s all;
`;

const MenuBar = styled.nav`
  display: inline-block;
  width: 150px;
  height: calc(100vh - 70px);
`;

const Menu = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

const CC = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: bold;
`;

export default Layout;
