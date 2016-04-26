// Import React
import React from "react"

// Import Spectacle Core tags
import {
  Deck,
  Spectacle,
  Slide,
  Heading,
  Link,
  Text,
  Image,
  Layout,
  Fill,
  CodePane
} from "spectacle"

import CodeSlide from "spectacle-code-slide"

import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")


const images = {
  eich: require("../assets/Brendan_Eich_Mozilla_Foundation_official_photo.jpg")
}

preloader(images)

const theme = createTheme({
  primary: "#e8e40c",
  bg_secondary: "#000000",
  text_secondary: "#ffffff",
  quartenary: "#122b45"
})

const code = {
  closure: require("raw!../assets/closure.example"),
  firstLook: require("raw!../assets/first_look.example")
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="bar">
          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="bg_secondary">
              JavaScript
            </Heading>
            <Heading size={1} caps textColor="bg_secondary">
              Language basics
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="bg_secondary">
            <Image src={images.eich.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Text bold caps textColor="tertiary">Was invented by Brendan Eich in 1995</Text>
            <Text bold textColor="tertiary">It was designed to consolidate all the things like images styles java applets etc</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading size={5} caps bgColor="primary" margin={10}>1995</Heading>
                <Text textColor="tertiary">Javascript released in Netscape</Text>
              </Fill>
              <Fill>
                <Heading size={5} caps bgColor="primary" margin={10}>1996</Heading>
                <Text textColor="tertiary">JScript by Microsoft released</Text>
              </Fill>
              <Fill>
                <Heading size={5} caps bgColor="primary" margin={10}>1997</Heading>
                <Text textColor="tertiary">Javascript standartized by ECMA. ECMAScript1 specification released</Text>
              </Fill>
              <Fill>
                <Heading size={5} caps bgColor="primary" margin={10}>2009</Heading>
                <Text textColor="tertiary">ECMAScript5 released</Text>
              </Fill>
              <Fill>
                <Heading size={5} caps bgColor="primary" margin={10}>2015</Heading>
                <Text textColor="tertiary">ECMAScript6 specification released</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} bgColor="primary" margin={10}>ECMAScript 6 or 2015</Heading>
            <Text textColor="tertiary">Was designed to correct previous mistakes and inconveniences</Text>
            <Text textColor="tertiary">Add a lot of syntactic sugar</Text>
          </Slide>
          <Slide>
            <Heading size={2} bgColor="primary">Rise of the transpilers</Heading>
            <Text>Tools that allow use a new language features and transpile it to old language spec</Text>
          </Slide>

          <Slide>
            <Heading size={1} bgColor="primary">Language basics</Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <CodePane
              lang="js"
              source={code.firstLook}
            />
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.closure}
            ranges={[
              { loc: [0, 6], title: "Closure" },
              { loc: [1, 5], note: "Function body contains another function definition" },
              { loc: [2, 3], note: "It is possible to use outer scope variables here" },
              { loc: [7, 10], note: "How it works" },
              { loc: [11, 15], note: "Closure used here to keep a value of counter" }
            ]}
          />
        </Deck>
      </Spectacle>
    )
  }
}
