import "./Navbar.css"
import logo from "./assets/Logo.jpeg";
import ShoppingCard from "./shopping-card";

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;


function Navbar() {
    const [open, setOpen] = React.useState(false);
    
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" width="150" />
            </div>
            <ul>
                <li>Shop</li>
                <li>Über uns</li>
                <li>Kontakt</li>
                <li>Impressum</li>
            </ul>

            <IconButton onClick={toggleDrawer(true)} sx={{ color: "white", marginRight: "2em" }}>
                <ShoppingCartIcon fontSize="small" />
                <CartBadge badgeContent={2} color="primary" overlap="circular" />
            </IconButton>

            <ShoppingCard isopen={open} toggleDrawer={toggleDrawer} />

        </nav>
    )
}
export default Navbar