import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Header = () => {
       
  return (
    <StyledHeader>
      <nav>
        <Ul>
          <H3>LOGO</H3>
          <ContaineInformation>
            <List >
              <NavLink  style={({isActive}) => ({
                  color : isActive ? "black" : "white",
                  textDecoration:"none"

                  // background: isActive ? "violet" : "",
                } )} to="products">Products</NavLink>
            </List>
            <List>
              <NavLink  style={({isActive}) => ({
                  color : isActive ? "black" : "white",
                  textDecoration:"none"

                  // background: isActive ? "violet" : "",
                } )} to="mycart">My Cart</NavLink>
            </List>
            <List>
              <NavLink to="myorder"
                 style={({isActive}) => ({
                  color : isActive ? "black" : "white",
                  textDecoration:"none"
                  // background: isActive ? "violet" : "",
                } )}
              >My Order</NavLink>
            </List>
          </ContaineInformation>
        </Ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: blue;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  align-items: center;
  padding: 30px;
`;

const ContaineInformation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const H3 = styled.h3`
  color: white;
`;

const List = styled.li`
  /* color: white; */
  font-weight:bold;
`;
