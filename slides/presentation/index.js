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
  Image
} from "spectacle"

import CodeSlide from "spectacle-code-slide"

import preloader from "spectacle/lib/utils/preloader";

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
  black: "#000000",
  quartenary: "#122b45"
})

const code = {
  closure: require("raw!../assets/closure.example")
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">
          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              JavaScript
            </Heading>
            <Heading size={1} caps textColor="black">
              Language basics
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Image src={images.eich.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Text bold caps textColor="tertiary">Was invented by Brendan Eich in 1995</Text>
            <Text bold textColor="tertiary">It was designed to consolidate all the things like images styles java applets etc</Text>
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
              { loc: [11, 15], note: "Closure used here to keep a value of counter" },
            ]}/>
        </Deck>
      </Spectacle>
    )
  }
}
