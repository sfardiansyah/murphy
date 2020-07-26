import React from "react";
import { Container, Button, Icon } from "semantic-ui-react";

import img from "tree.svg";

const ComingSoon: React.FC = () => (
  <div
    style={{
      backgroundColor: "#f3ebde",
      height: "100vh",
      paddingTop: "20vh",
    }}
  >
    <Container textAlign="center">
      <img src={img} alt="Laywook Logo" style={{ height: "30vmin" }} />
      <h1 style={{ color: "#947922" }} className="title">
        COMING SOON
      </h1>
      <h2
        style={{
          fontFamily: "Red Hat Display",
          letterSpacing: 2,
          color: "#749e32",
        }}
      >
        PLEASE COME BACK LATER!
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
    </Container>
  </div>
);

export default ComingSoon;
