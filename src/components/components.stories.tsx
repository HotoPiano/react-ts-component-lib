import React from "react";

import "./index.less";

import Header from "./Header";
import Footer from "./Footer";
import H from "./H";
import Button from "./Button";
import Link from "./Link";
import DropDown from "./Dropdown";

const Basic: React.FC = () => {
  return (
    <>
      <Header>
        <H type="h1" darkBackground>
          Header1 darkBackground
        </H>
        <Link href="#/test" darkBackground>
          Link darkBackground
        </Link>
      </Header>
      <div style={{ minHeight: 500 }}>
        <H type="h2">Header2</H>
        <H type="h3">Header3</H>
        <H type="h4">Header4</H>
        <H type="h5">Header5</H>
        <H type="h6">Header6</H>
        <Button
          variant="default"
          style={{ margin: 10 }}
          onClick={() => {
            console.log("clicked!");
          }}
        >
          Button default
        </Button>
        <Button
          variant="primary"
          style={{ margin: 10 }}
          onClick={() => {
            console.log("clicked!");
          }}
        >
          Button primary
        </Button>
        <Button
          variant="secondary"
          style={{ margin: 10 }}
          onClick={() => {
            console.log("clicked!");
          }}
        >
          Button secondary
        </Button>
        <Button
          variant="primary"
          disabled
          style={{ margin: 10 }}
          onClick={() => {
            console.log("clicked!");
          }}
        >
          Button disabled
        </Button>
        <Link href="#/test">Link</Link>
      </div>
      <Footer>
        <H type="h3" darkBackground>
          Header3
        </H>
      </Footer>
    </>
  );
};

export default { title: "Basic" };

export const basic = () => <Basic />;
