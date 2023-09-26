import { Children } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const navigators = [
  { title: "Caesar Cipher 1", path: "cc1" },
  { title: "Caesar Cipher 2", path: "cc2" },
  { title: "Caesar Cipher 3", path: "cc3" },
];

const Layout = () => {
  return (
    <>
      <Header>
        <NavLink title={true} to={""}>
          Caesar Cipher App
        </NavLink>
        <Nav>
          {Children.toArray(
            navigators.map((nav) => (
              <NavLink to={nav.path}>{nav.title}</NavLink>
            ))
          )}
        </Nav>
      </Header>
      <Footer>정보보안</Footer>
    </>
  );
};

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: center;
  background-color: rgb(232, 234, 237);
`;

const Nav = styled.div`
  position: absolute;
  display: inline-block;
  right: 0;
`;

const NavLink = styled(Link)`
  margin: 0 3px;
  padding: 20px 0;
  border-radius: 10px;
  color: black;
  text-decoration: none;
  background-color: white;
  ${({ title }) =>
    title &&
    css`
      font-size: 20px;
      font-weight: bold;
    `}

  &: hover {
    background-color: rgb(186, 188, 190);
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: end;
  background-color: rgb(232, 234, 237);
`;

export default Layout;
