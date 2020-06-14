import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Menu, MenuItemProps } from "semantic-ui-react";

import { logout } from "reducers/auth/actions";

import { AppState } from "reducers/types";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("home");

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: AppState) => !!state.user.id);

  const handleMenuClick = (
    _: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name }: MenuItemProps
  ) => name && setActiveItem(name);

  return (
    <Menu>
      <Menu.Item
        name="home"
        as={Link}
        to="/"
        active={activeItem === "home"}
        onClick={handleMenuClick}
      >
        Home
      </Menu.Item>
      {isLoggedIn && (
        <Menu.Item
          name="chat"
          as={Link}
          to="/chat"
          active={activeItem === "chat"}
          onClick={handleMenuClick}
        >
          Chat
        </Menu.Item>
      )}
      <Menu.Menu position="right">
        {isLoggedIn ? (
          <Menu.Item name="logout" onClick={() => dispatch(logout())}>
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item
            name="login"
            as={Link}
            to="/login"
            active={activeItem === "login"}
            onClick={handleMenuClick}
          >
            Login
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
