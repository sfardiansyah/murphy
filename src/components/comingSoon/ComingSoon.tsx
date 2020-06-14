import React from "react";
import { Container } from "semantic-ui-react";

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
      <a
        href="https://twitter.com/laywookcom?ref_src=twsrc%5Etfw"
        className="twitter-follow-button"
        data-size="large"
        data-show-screen-name="false"
        data-lang="en"
        data-show-count="false"
      >
        Follow @laywookcom
      </a>
    </Container>
  </div>
);

export default ComingSoon;
