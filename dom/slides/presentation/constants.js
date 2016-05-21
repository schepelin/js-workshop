const images = {
  eventsCover: require("../assets/events-cover.jpg"),
  htmlCode: require("../assets/editor-code.png"),
  logo: require("../assets/dom-logo.svg"),
  devTools: require("../assets/dev-tools.png"),
  documentObject: require("../assets/document-object.png"),
  windowTree: require("../assets/window-tree.png"),
  markdown: require("../assets/markdown.png")
}

const codeSnippets = {
  htmlAttributeEventHandler: require("raw!../snippets/handler-as-html-attribute.html"),
  domPropertyEventHandler: require("raw!../snippets/handler-as-dom-property.html"),
  addRemoveEventListeners: require("raw!../snippets/add-remove-event-listener.js"),
  eventObject: require("raw!../snippets/event-object.html"),
  htmlAttributes: require("raw!../snippets/html-attributes.example"),
  domProperties: require("raw!../snippets/dom-properties.example"),
  domPropertiesAdding: require("raw!../snippets/dom-properties-adding.example"),
  domPropertiesFunction: require("raw!../snippets/dom-properties-function.example"),
}

const code = {
  htmlCode: require("raw!../examples/html.example"),
  domTree: require("raw!../examples/dom-tree.example"),
  nodeTypes: require("raw!../examples/node-types.example"),
  walkByNodes1: require("raw!../examples/walk-by-nodes-1.example"),
  walkByNodes2: require("raw!../examples/walk-by-nodes-2.example"),
  walkByNodes3: require("raw!../examples/walk-by-nodes-3.example"),
  getElements1: require("raw!../examples/get-elements-1.example"),
  getElements2: require("raw!../examples/get-elements-2.example"),
  getAttributes1: require("raw!../examples/get-attributes-1.example"),
  domManipulation1: require("raw!../examples/dom-manipulation-1.example"),
  domManipulation2: require("raw!../examples/dom-manipulation-2.example"),
}

export {
  images,
  codeSnippets,
  code,
};