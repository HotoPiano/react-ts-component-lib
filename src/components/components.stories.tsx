import React, { useState } from "react";

import "./index.less";

import Header from "./Header";
import Footer from "./Footer";
import H from "./H";
import Button from "./Button";
import Link from "./Link";
import Dropdown from "./Dropdown";

const Basic: React.FC = () => {
  return (
    <>
      <Header>
        <H type="h1" darkBackground>
          Header1 darkBackground
        </H>
        <br />
        <Link href="#/test" darkBackground>
          Link darkBackground
        </Link>
        <Dropdown
          buttonStyle={{ marginLeft: 50 }}
          dropdownItems={[
            { text: "Item1", value: "i1" },
            { text: "Item2", value: "i2" },
            { text: "Item3", value: "i3" },
          ]}
          onSelect={(value: string) => console.log("selected: " + value)}
          text={"list"}
          darkBackground
        />
      </Header>
      <div style={{ minHeight: 500 }}>
        <div>
          <H type="h2">Header2</H>
          <H type="h3">Header3</H>
          <H type="h4">Header4</H>
          <H type="h5">Header5</H>
          <H type="h6">Header6</H>
        </div>
        <br />
        <div>
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
        </div>
        <br />
        <div>
          <Link href="#/test">Link</Link>
        </div>
        <br />
        <div>
          <Dropdown
            dropdownItems={[
              { text: "Item1", value: "i1" },
              { text: "Item2", value: "i2" },
              { text: "Item3", value: "i3" },
            ]}
            onSelect={(value: string) => console.log("selected: " + value)}
            text={"List"}
          />
          <Dropdown
            buttonStyle={{ marginLeft: 50 }}
            dropdownItems={[
              { text: "Item1", value: "i1" },
              { text: "Item2", value: "i2" },
              { text: "Item3", value: "i3" },
            ]}
            onSelect={(value: string) => console.log("selected: " + value)}
            text={"List firstItemDefaultSelected closeOnBlur closeOnEscape"}
            firstItemDefaultSelected
            closeOnBlur
            closeOnEscape
          />
        </div>
      </div>
      <Footer>
        <H type="h3" darkBackground>
          Header3 darkBackground
        </H>
      </Footer>
    </>
  );
};

export default { title: "Basic" };

export const basic = () => <Basic />;
