import Body from "./Body";
import Head from "./Head";
import Footer from "./Footer";
import React from "react";
import Button from "./Button";
import Header from "./Header";
import LinkText from "./LinkText";

const Basic: React.FC = () => {
  return (
    <Body>
      <Head>
        <Header type="h1">Header1</Header>
      </Head>
      <Header type="h2">Header2</Header>
      <Header type="h3">Header3</Header>
      <Header type="h4">Header4</Header>
      <Header type="h5">Header5</Header>
      <Header type="h6">Header6</Header>
      <Button
        variant="primary"
        //style={{ padding: 20 }}
        onClick={() => {
          console.log("clicked!");
        }}
      >
        testImportedButtonPrimary
      </Button>
      <Button
        variant="secondary"
        //style={{ padding: 20 }}
        onClick={() => {
          console.log("clicked!");
        }}
      >
        testImportedButtonPrimary
      </Button>
      <Button
        variant="primary"
        disabled
        //style={{ padding: 20 }}
        onClick={() => {
          console.log("clicked!");
        }}
      >
        testImportedButtonPrimaryDisabled
      </Button>
      <LinkText href="#/test">testlinkBrightBackground</LinkText>
      <LinkText href="#/test" darkBackground>
        testlinkDarkBackground
      </LinkText>
      <Footer>text</Footer>
    </Body>
  );
};

export default { title: "Basic" };

export const basic = () => <Basic />;
