import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const Logo = styled(motion.div)`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;


`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  position: relative;
  color: var(--gray);
  font-weight: 500;
  padding: 0.5rem 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 2px;
    background-color: var(--accent);
    transition: var(--transition);
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--primary);
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logo} alt="Logo" style={{ width: "50px", height: "50px" }} />
        Habesha Estates
      </Logo>
      <Nav>
        <NavLink to="/" isActive={location.pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/about" isActive={location.pathname === "/about"}>
          About
        </NavLink>
        <NavLink to="/contact" isActive={location.pathname === "/contact"}>
          Contact
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
