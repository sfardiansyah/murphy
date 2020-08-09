import React from "react";
import { Container, Button, Icon, Menu } from "semantic-ui-react";
import IframeResizer from "iframe-resizer-react";

import img from "tree.svg";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => (
  <Container textAlign="center">
    <Menu secondary style={{ paddingTop: 8 }}>
      <Menu.Item name="calculator" as={Link} to="/calculator">
        <h3 className="menuItem" style={{ color: "#947922" }}>
          Calculator
        </h3>
      </Menu.Item>
    </Menu>
    <div
      style={{
        backgroundColor: "#f3ebde",
        paddingTop: "15vh",
      }}
    >
      <img src={img} alt="Laywook Logo" style={{ height: "30vmin" }} />
      <p style={{ color: "#947922", margin: 0 }} className="title">
        LAYWOOK
      </p>
      <h2
        style={{
          fontFamily: "Red Hat Display",
          letterSpacing: 2,
          color: "#749e32",
        }}
      >
        FINANCIAL CLINIC
      </h2>
      <div style={{ marginTop: 36 }}>
        <Button as="a" color="blue" primary href="https://saweria.co/laywook">
          <Icon name="gift" />
          Donate
        </Button>
        <Button
          as="a"
          color="twitter"
          href="https://twitter.com/laywookcom?ref_src=twsrc%5Etfw"
        >
          <Icon name="twitter" />
          Follow
        </Button>
      </div>
    </div>
    <IframeResizer
      log
      title="Laywook Donators"
      width="100%"
      minHeight={300}
      frameBorder="0"
      heightCalculationMethod="lowestElement"
      scrolling
      style={{ marginTop: 48, marginBottom: 48 }}
      src="https://saweria.co/overlays/leaderboard?streamKey=07842a52276456af0384259aa5ee5b99&backgroundColor=%23f3ebde&color=%23947922&fontWeight=800&title=Thanks+to+Our+Donators%21&mode=all"
    />
  </Container>
);

export default ComingSoon;
