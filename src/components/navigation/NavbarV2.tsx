import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import img from "tree.svg";

const Navbar: React.FC = () => (
  <Menu secondary>
    <Menu.Item name="home" as={Link} to="/">
      <img alt="Laywook Logo" src={img} />
    </Menu.Item>
  </Menu>
);

export default Navbar;
