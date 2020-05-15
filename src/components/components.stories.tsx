import React from "react";

import "./index.less";

import Header from "./Header";
import Footer from "./Footer";
import H from "./H";
import Button from "./Button";
import Link from "./Link";
import Dropdown from "./Dropdown";
import Infobox from "./Infobox";

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
          text={"Dropdown"}
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
        <div style={{ marginTop: 50 }}>
          <Button
            variant="default"
            style={{ marginRight: 20 }}
            onClick={() => {
              console.log("clicked!");
            }}
          >
            Button default
          </Button>
          <Button
            variant="primary"
            style={{ marginRight: 20 }}
            onClick={() => {
              console.log("clicked!");
            }}
          >
            Button primary
          </Button>
          <Button
            variant="secondary"
            style={{ marginRight: 20 }}
            onClick={() => {
              console.log("clicked!");
            }}
          >
            Button secondary
          </Button>
          <Button
            variant="primary"
            disabled
            style={{ marginRight: 20 }}
            onClick={() => {
              console.log("clicked!");
            }}
          >
            Button disabled
          </Button>
        </div>
        <br />
        <div style={{ marginTop: 50 }}>
          <Link href="#/test">Link</Link>
        </div>
        <br />
        <div style={{ marginTop: 50 }}>
          <Dropdown
            dropdownItems={[
              { text: "Item1", value: "i1" },
              { text: "Item2", value: "i2" },
              { text: "Item3", value: "i3" },
            ]}
            onSelect={(value: string) => console.log("selected: " + value)}
            text={"Dropdown"}
          />
          <Dropdown
            buttonStyle={{ marginLeft: 50 }}
            dropdownItems={[
              { text: "Item1", value: "i1" },
              { text: "Item2", value: "i2" },
              { text: "Item3", value: "i3" },
            ]}
            onSelect={(value: string) => console.log("selected: " + value)}
            text={"Dropdown modified"}
            firstItemDefaultSelected
            closeOnBlur
            closeOnEscape
            fitMinWidth
          />
        </div>
        <div style={{ marginTop: 50 }}>
          <Infobox>
            <p style={{ margin: "12px 0" }}>Infobox leftside</p>
          </Infobox>
          <Infobox rightSide>
            <p style={{ margin: "12px 0" }}>Infobox rightside</p>
          </Infobox>
          <Infobox onClick={() => console.log("testClick")}>
            <p style={{ margin: "12px 0" }}>Infobox button leftside</p>
          </Infobox>
          <Infobox rightSide onClick={() => console.log("testClick")}>
            <p style={{ margin: "12px 0" }}>Infobox button rightside</p>
          </Infobox>
          <Infobox href="#/test">
            <p style={{ margin: "12px 0" }}>Infobox link leftside</p>
          </Infobox>
          <Infobox rightSide href="#/test">
            <p style={{ margin: "12px 0" }}>Infobox link rightside</p>
          </Infobox>
        </div>
        <div style={{ marginTop: 50 }}></div>
      </div>
      <Footer>
        <H type="h3" darkBackground>
          Header3 darkBackground
        </H>
      </Footer>
    </>
  );
};

export default { title: "Library" };

export const basic = () => <Basic />;
