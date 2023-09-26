import { Children, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBurger } from "react-icons/fa6";

const menus = [
  { title: "Caesar Cipher 1", path: "cc1" },
  { title: "Caesar Cipher 2", path: "cc2" },
  { title: "Caesar Cipher 3", path: "cc3" },
];

const Layout = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  return (
    <>
      <Header>
        <MenuBtn onClick={() => setIsToggleMenu((prev) => !prev)}>
          <FaBurger size={30} color="#333842" />
        </MenuBtn>
        <Title to={""}>Caesar Cipher App</Title>
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
  background-color: #e8eaed;
`;

const MenuBtn = styled.button`
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  margin-left: 10px;
  text-align: center;
  cursor: pointer;
  background-color: #e8eaed;

  &:hover {
    background-color: #bdbfc1;
  }
`;

const Title = styled(Link)`
  border: none;
  font-size: 25px;
  font-weight: bold;
  color: #333842;
  background-color: #e8eaed;
`;

const MenuBar = styled.nav`
  display: inline-block;
  width: 150px;
  height: calc(100vh - 70px);
  border: none;
  background-color: #bdbfc1;
`;

const Menu = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid white;
`;

const CC = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;

  &:hover {
    background-color: #333842;
  }
`;

export default Layout;
