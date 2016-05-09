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
  closures: require("raw!../assets/closures.example"),
  firstLook: require("raw!../assets/first_look.example"),
  variables: require("raw!../assets/variables.example"),
  types: require("raw!../assets/types.example"),
  typeCoercion: require("raw!../assets/type_coercion.example"),
  conditions: require("raw!../assets/conditions.example"),
  loops: require("raw!../assets/loops.example"),
  functions: require("raw!../assets/functions.example"),
  objects: require("raw!../assets/objects.example"),
  classes: require("raw!../assets/classes.example"),
  this: require("raw!../assets/this.example"),
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="line">
          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="textPrimary">
              JavaScript
            </Heading>
            <Heading size={1} caps textColor="textSecondary">
              Language basics
            </Heading>
          </Slide>
          <Slide
            transition={["slide"]}
            bgColor="primary"
            notes={"Told about my team and cross functional command. Make the acquaintance and find out expectations from members"}
          >
            <Heading size={1} bgColor="primary" textColor="textPrimary">How did we get here?</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <List textAlign="center">
              <Text bold textColor="textSecondary" margin="0 0 15px">Want to be a fullstack developer</Text>
              <Text bold textColor="textSecondary" margin="0 0 15px">Have a business reason</Text>
              <Text bold textColor="textSecondary" margin="0 0 15px">Want to learn new language</Text>
            </List>
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
            code={code.objects}
            ranges={[
              { loc: [0, 0], title: "Objects" },
              { loc: [0, 6], note: "Simple object definition" },
              { loc: [7, 11], note: "Access to properties" },
              { loc: [10, 11], note: "Any unknown property is undefined" },
              { loc: [13, 19], note: "Modify object properties" },
              { loc: [21, 36], note: "Real example" },
              { loc: [26, 29], note: "Shortcut for creating properties" },
              { loc: [29, 30], note: "Computed property in []" },

              { loc: [31, 34], note: "Access to computed property" },
              { loc: [37, 39], note: "Usage example" },

              { loc: [42, 49], note: "Creating new object based on existing" },
              { loc: [43, 44], note: "First unpack existing object" },
              { loc: [44, 46], note: "It is possible to override properties" },
              { loc: [46, 48], note: "Also you can create new properties" },
              { loc: [50, 51], note: "And you still have access to old's obect attributes" }
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
            code={code.closures}
            ranges={[
              { loc: [0, 0], title: "Closure" },
              { loc: [0, 6], note: "When function declaration contantains another function declaration inside" },
              { loc: [1, 5], note: "Function body contains another function definition" },
              { loc: [2, 3], note: "It is possible to use outer scope variables here" },
              { loc: [7, 10], note: "How it works" },
              { loc: [11, 15], note: "Closure used here to keep a value of counter" },

              { loc: [16, 25], note: "Decorator with simple profiler" },
              { loc: [18, 19], note: "Save start time" },
              { loc: [19, 20], note: "Invoke original function" },
              { loc: [20, 21], note: "Save finish time" },
              { loc: [21, 23], note: "Log time and return result" },
              { loc: [26, 29], note: "Usage exmaple" }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.classes}
            ranges={[
              { loc: [0, 0], title: "Classes" },
              { loc: [0, 14], note: "Class declaration" },
              { loc: [1, 5], note: "Contructor is required" },
              { loc: [6, 9], note: "You can define static methods or props" },
              { loc: [10, 13], note: "Usual class method" },

              { loc: [15, 17], note: "Create an instance of class" },
              { loc: [18, 20], note: "Call static method. Instance doen't have it" },

              { loc: [21, 32], note: "Inherit new class from existing" },
              { loc: [22, 26], note: "Override contructor" },
              { loc: [23, 24], note: "Call parent method inside constructor. You can override any parent's method" },
              { loc: [27, 31], note: "Define new method" },

              { loc: [33, 34], note: "Create an instance of new class" },
              { loc: [35, 37], note: "It has parents and own attributes" },

              { loc: [38, 40], note: "It is instance of Manager and Employee" },

            ]}
          />

          <CodeSlide
            transition={["slide"]}
            lang="js"
            notes={ 'Say about what is this. How bind works and so on' }
            code={code.this}
            ranges={[
              { loc: [0, 0], title: "Zen of this" },
              { loc: [0, 6], note: "We have a person object with some method" },
              { loc: [7, 8], note: "We can call method directly from person" },
              { loc: [9, 11], note: "But, what if we assign person's method to variable" },
              { loc: [12, 13], title: "Why does it so?", note: "'this' is a tricky thing. It's a reference to current context" },
              { loc: [14, 16], note: "We can bind arbitrary context to function" },
              { loc: [17, 19], note: "Or event create custom context" },

              { loc: [22, 31], note: "Same thing with closures" },
              { loc: [32, 33], note: "In closure this refers to another object. By default it window object" },
              { loc: [34, 43], note: "But if we replace function definition to fat-arrow" },
              { loc: [44, 45], note: "It works fine. Fat arrow functions inherid context from parrent" },
              { loc: [45, 46], note: "However, it is still posible to bind custom context" },
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
