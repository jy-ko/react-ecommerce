import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import Search from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
  height: 100px;
  ${mobile({ height: "50px", paddingBottom: "20px"})};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px"})};
`;
const Language = styled.div`
  ${mobile({ display: "none"})};
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  margin-left: 20px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}

`;
const MenuItem = styled.div`
  font-size: 1rem;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"} style={{textDecoration: "none", color: "black"}}>
            <Logo>JK</Logo>
          </Link>
         
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
