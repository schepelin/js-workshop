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
  CodePane,
  Appear,
  List,
  ListItem
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
  primary: "#122b45",
  bgSecondary: "#000000",
  textSecondary: "#cccccc",
  textPrimary: "#f6cc3d"
})

const code = {
  closure: require("raw!../assets/closure.example"),
  firstLook: require("raw!../assets/first_look.example"),
  variables: require("raw!../assets/variables.example"),
  types: require("raw!../assets/types.example"),
  typeCoercion: require("raw!../assets/type_coercion.example"),
  conditions: require("raw!../assets/conditions.example"),
  loops: require("raw!../assets/loops.example"),
  functions: require("raw!../assets/functions.example")
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="pacman">
          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="textPrimary">
              JavaScript
            </Heading>
            <Heading size={1} caps textColor="textSecondary">
              Language basics
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.eich.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Text bold caps textColor="textPrimary">Was invented by Brendan Eich in 1995</Text>
            <Text textColor="textSecondary">It was designed to consolidate all the things like images styles java applets etc</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading size={5} textColor="textPrimary" caps bgColor="primary" margin={10}>1995</Heading>
                <Text textColor="textSecondary">Javascript released in Netscape</Text>
              </Fill>
              <Fill>
                <Heading size={5} textColor="textPrimary" caps bgColor="primary" margin={10}>1996</Heading>
                <Text textColor="textSecondary">JScript by Microsoft released</Text>
              </Fill>
              <Fill>
                <Heading size={5} textColor="textPrimary" caps bgColor="primary" margin={10}>1997</Heading>
                <Text textColor="textSecondary">Javascript standartized by ECMA. ECMAScript1 specification released</Text>
              </Fill>
              <Fill>
                <Heading size={5} textColor="textPrimary" caps bgColor="primary" margin={10}>2009</Heading>
                <Text textColor="textSecondary">ECMAScript5 released</Text>
              </Fill>
              <Fill>
                <Heading size={5} textColor="textPrimary" caps bgColor="primary" margin={10}>2015</Heading>
                <Text textColor="textSecondary">ECMAScript6 specification released</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} bgColor="primary" textColor="textPrimary" margin={10}>ECMAScript 6/2015</Heading>
            <Text textColor="textSecondary">Was designed to correct previous specs mistakes and inconveniences</Text>
            <Text textColor="textSecondary">Add a lot of syntactic sugar</Text>
          </Slide>
          <Slide>
            <Heading size={2} bgColor="primary" textColor="textPrimary">Rise of the transpilers</Heading>
            <Text textColor="textSecondary">Tools that allow use a new language features and transpile it to old language spec</Text>
          </Slide>

          <Slide>
            <Heading size={1} bgColor="primary" textColor="textPrimary">Language basics</Heading>
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
            code={code.variables}
            ranges={[
              { loc: [0, 0], title: "Variables" },
              { loc: [0, 1], note: "Old style variable declaration. Don't use it anymore" },
              { loc: [2, 3], note: "You can define variables with const keyword" },
              { loc: [3, 4], note: "You can't reassign a constant" },
              { loc: [5, 7], note: "But, you can modify a value if it's mutuable" },
              { loc: [8, 11], note: "Second approach is use let keyword" },
              { loc: [11, 15], note: "let and const are block scope binded" },
              { loc: [16, 20], note: "However, old style var is not" },
              { loc: [0, 0], title: "Which one is better let or const?" },
              { loc: [21, 27], note: "Object desctructing" },
              { loc: [28, 30], note: "Array desctructing" }
            ]}
          />

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.types}
            notes={'Ask if it is possible contstruction [1,2, \'foo\', undefined] ?'}
            ranges={[
              { loc: [0, 0], title: "Types" },
              { loc: [0, 2], note: "Any unassigned variable or attribute is `undefined`" },
              { loc: [3, 5], note: "true and false are `boolean` type" },
              { loc: [6, 10], note: "There is no difference between integer and float" },
              { loc: [11, 13], note: "String declaration" },
              { loc: [14, 16], note: "Array has a type of `object`" },
              { loc: [17, 22], note: "Actually, there is no difference between array and object" },
              { loc: [23, 25], note: "And last one is `function`" },
              { loc: [28, 29], title: "Comparation" },
              { loc: [29, 32], note: "There are two types of comparation with and without type check" },
              { loc: [33, 35], note: "Object are always not equal" },
              { loc: [38, 40], note: "Property does not exist" },
              { loc: [41, 46], note: "There is special value for `empty` fields" }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.typeCoercion}
            notes={'Ask is the result of 42 + true'}
            ranges={[
              { loc: [0, 0], title: "Type coercion" },
              { loc: [0, 2], note: "Does it throw an error?" },
              { loc: [3, 4], note: "How about it?" },
              { loc: [5, 7], note: "And even it works fine!" },
              { loc: [8, 10], note: "One more special value" }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.conditions}
            ranges={[
              { loc: [0, 0], title: "Conditions" },
              { loc: [0, 6], note: "If something is true do one thing else anther" },
              { loc: [7, 11], note: "Value will be caseted to boolean automatically" },
              { loc: [12, 15], note: "&& is `and` operator" },
              { loc: [16, 19], note: "|| is `or` operator" },
              { loc: [20, 23], note: "Explicit casting to boolean" }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.loops}
            ranges={[
              { loc: [0, 0], title: "Loops" },
              { loc: [0, 3], note: "Iterate over counter" },
              { loc: [4, 7], note: "Iterate over array" },
              { loc: [8, 13], note: "But what if I want to iterate over object?" },
              { loc: [13, 17], note: "I can iterate over keys and get values" }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.functions}
            ranges={[
              { loc: [0, 0], title: "Functions" },
              { loc: [0, 3], note: "Named function" },
              { loc: [4, 7], note: "Anonymous function" },
              { loc: [8, 11], note: "Arrow function" },
              { loc: [12, 13], note: "Single sile arrow function" },
              { loc: [15, 16], note: "Arrow function example" },
              { loc: [17, 25], note: "Function with variable number of arguments" }
            ]}
          />

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
          <Slide>
            <Heading size={2} bgColor="primary" textColor="textPrimary">Let's try</Heading>
            <Text
              margin="20px 0px 0px"
              textColor="textSecondary"
              textFont="Lucida Console"
              textAlign="left"
            >
            sudo apt-get install git
            </Text>
            <Text
              margin="20px 0px 0px"
              textColor="textSecondary"
              textFont="Lucida Console"
              textAlign="left"
            >
            mkdir ~/workshop && cd ~/workshop
            </Text>
            <Text
              margin="20px 0px 0px"
              textColor="textSecondary"
              textFont="Lucida Console"
              textAlign="left"
            >
            git clone https://github.com/schepelin/js-workshop.git
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
