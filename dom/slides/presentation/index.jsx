// Import React
import React from "react"

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle"

import CodeSlide from "spectacle-code-slide"

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Import custom component
import Interactive from "../assets/interactive"

// Require CSS
require("normalize.css")
require("spectacle/lib/themes/default/index.css")

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
  attributesDataHtml: require("raw!../snippets/attributes-data-html.example"),
  attributesDataset: require("raw!../snippets/attributes-dataset.example"),
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
  classListMethods: require("raw!../examples/classlist-methods.example"),
}

preloader(images)

const theme = createTheme({
  primary: "white",
  bgSecondary: "black",
  textSecondary: "#ccc",
  textPrimary: "#f6cc3d",
  textSecondary: "#3c790a",
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">

          <Slide transition={["slide"]} bgColor="black" notes="Вопрос в зал: кто может сказать, что такое DOM? (Кроме расшифровки аббревиатуры ;) )">
            <Heading size={1} fit caps lineHeight={1} textColor="textPrimary">
              Основы DOM
            </Heading>
            <Heading size={1} fit caps textColor="white">
              Что это, из чего построено и как в нём жить
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Для начала разберёмся, что есть DOM, а что им не является. Где искать его вообще.">
            <Heading size={2} caps fit textColor="textPrimary" textFont="primary">
              Что DOM, а что не DOM
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black" notes="HTML-код, написанный в редакторе это DOM?">
            <Heading size={4} caps textColor="textPrimary" textFont="primary">
              DOM?
            </Heading>
            <Image src={images.htmlCode} margin="20px auto 0" height="500px" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black" notes="<p>А код в dev-tools браузера это DOM? (упомянуть о том, что написанный код здесь может выглядеть иначе, т.к. его исправит и дополнит за нас браузер.)</p><p>Дело в том, что браузеры знают стандарт (какие-то больше, какие-то меньше), и, независимо от того, что написали мы, сделают всё правильно, ну или как считают нужным. :)</p>">
            <Heading size={4} caps textColor="textPrimary" textFont="primary">
              А это DOM?
            </Heading>
            <Image src={images.devTools} margin="10px auto 0" height="500px" />
            <Appear>
              <Text italic textColor="white">это его визуальное представление</Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white" notes="<p>Чтобы лучше понять, что такое DOM, посмотрим где он живёт.</p><p>Браузеры нам помогают - они смешивают пространства имён DOM, BOM и JS - благодаря чему мы и можем со всем этим работать.</p>">
            <Image src={images.logo} margin="0px auto 40px" height="150px" />
            <Heading size={3} caps textColor="textSecondary" textFont="primary">
              DOM, BOM и JS
            </Heading>
            <Image src={images.windowTree} margin="30px auto 0" height="190px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Ближе всего рассмотреть DOM в браузере можно, например, с помощью команды console.dir">
            <Heading size={4} textColor="textPrimary" textFont="primary">
              console.dir(document)
            </Heading>
            <Image src={images.documentObject} margin="10px auto 0" height="550px" />
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote textSize="3rem">Объектная Модель Документа (DOM) &mdash; это программный интерфейс (API) для HTML и XML документов.</Quote>
              <Cite textColor="textSecondary">MDN</Cite>
            </BlockQuote>
            <List textColor="white">
              <Appear>
                <ListItem>Структурированнное представление документа</ListItem>
              </Appear>
              <Appear>
                <ListItem>Предоставляет способы доступа и изменения структуры, стиля и содержимого документа</ListItem>
              </Appear>
              <Appear>
                <ListItem>Состоит из группы узлов и объектов, которые имеют свойства и методы</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black" notes="<ul><li>всё, что содержится в DOM - узлы, но не всё элементы</li></ul>">
            <Heading textColor="textPrimary" size={4} margin="0 auto 40px">Дерево DOM: узлы и элементы</Heading>
            <Layout>
              <Fill>
                <CodePane
                  textSize="1.2rem"
                  lang="html"
                  source={code.htmlCode}
                />
              </Fill>
              &nbsp;
              <Fill>
                <CodePane
                  textSize="1.2rem"
                  lang="html"
                  source={code.domTree}
                />
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.nodeTypes}
            ranges={[
              { loc: [0, 0], title: "Все типы узлов" },
              { loc: [1, 2], note: "Элемент" },
              { loc: [3, 4], note: "Текстовый узел" },
              { loc: [8, 9], note: "Ну, может быть вы захотите использовать комментарии для чего-то хитрого" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="textPrimary" textFont="primary">
              Методы доступа к узлам DOM
            </Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.walkByNodes1}
            ranges={[
              { loc: [0, 0], title: "Ну раз DOM это объект, то..." },
              { loc: [0, 1], note: "корневой элемент html - есть" },
              { loc: [1, 2], note: "body получим" },
              { loc: [2, 3], note: "title страницы прочитали" },
              { loc: [3, 4], note: "и кодировку можем узнать" },
              { loc: [5, 6], note: "И ещё много всего: достаточно вывести объект документа в консоли и посмотреть в его свойства" },
              { loc: [7, 8], note: "Попробуйте в консоли браузера" },
            ]}
          />

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.walkByNodes2}
            ranges={[
              { loc: [0, 10], title: "Навигация по элементам" },
            ]}
          />

          <Slide bgColor="black">
            <Heading textColor="textPrimary">Схема этих методов в дереве (?)</Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={code.walkByNodes3}
            ranges={[
              { loc: [0, 10], title: "Навигация по всем узлам" },
            ]}
          />

          <CodeSlide
            transition={["slide"]}
            notes="Перед этим мы рассматривали методы для перехода по ближайшим элементам, но так далеко не уйдёшь, ну или ходить будешь долго, поэтому есть методы поиска элементов..."
            lang="js"
            code={code.getElements1}
            ranges={[
              { loc: [0, 0], title: "Поиск элементов по свойствам" },
              { loc: [0, 1], note: "Найти элемент по ID" },
              { loc: [1, 2], note: "Найти по имени тега" },
              { loc: [2, 3], note: "По HTML-классу" },
            ]}
          />

          <CodeSlide
            transition={["slide"]}
            lang="js"
            notes="<ul><li>querySelectorALL - ищет все соответствия, querySelector - возвращает первое, он быстрее, т.к. не перебирает все</li><li>matches - ничего не ищет, а просто проверяет соответствует ли элемент css-селектору</li><li>closest</li></ul>"
            code={code.getElements2}
            ranges={[
              { loc: [0, 0], title: "Поиск по CSS-селекторам" },
              { loc: [0, 3], note: "Методы: querySelectorALL, querySelector" },
              { loc: [0, 1], note: "Найдёт все абзацы с классом intro" },
              { loc: [1, 2], note: "Вернёт первые элементы из всех списков" },
              { loc: [2, 3], note: "Найдёт нажатую кнопку" },
              { loc: [3, 4], note: "Вернёт true, если ссылка на внешний ресурс" },
              { loc: [4, 5], note: "Если мы внутри списка с классом open, то мы его найдём" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="black" notes="Рассказать о CSS селекторах - для бэкендеров">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Подробнее о CSS селекторах
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Что это, синхронизация свойств и атрибутов">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Атрибуты и DOM-свойства
            </Heading>
            <Appear>
              <Text italic textColor="white">Если коротко и понятно, то...</Text>
            </Appear>
            <Appear>
              <Text textColor="white" margin="45px 0 20px">Атрибуты, это те, которые в html:</Text>
            </Appear>
            <Appear>
              <CodePane textSize="1.2rem" lang="html" source={codeSnippets.htmlAttributes} />
            </Appear>
            <Appear>
              <Text textColor="white" margin="45px 0 20px">А свойства &mdash; в объекте DOM:</Text>
            </Appear>
            <Appear>
              <CodePane textSize="1.2rem" lang="js" source={codeSnippets.domProperties} />
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Синхронизация атрибутов и свойств
            </Heading>
            <Text textColor="white" textAlign="left" margin="30px 0 0">Стандартные свойства и атрибуты синхронизируются: установка атрибута автоматически ставит свойство DOM. Некоторые свойства синхронизируются в обе стороны.</Text>
            <Text textColor="white" textAlign="left" margin="30px 0 0">Некоторые свойства не полностью соответствуют атрибутам:</Text>
            <List textColor="white">
              <ListItem>Свойства <Code textColor="white">checked</Code> и <Code textColor="white">selected</Code> всегда <Code textColor="white">= true / false</Code>, а в атрибуты можно написать любую строку.</ListItem>
              <ListItem>Свойство <Code textColor="white">href</Code> - всегда будет полным URL, атрибут может быть относительным, например, путём.</ListItem>
            </List>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            notes=""
            code={code.getAttributes1}
            ranges={[
              { loc: [0, 0], title: "Доступ к атрибутам" },
              { loc: [0, 1], note: "проверяет наличие атрибута" },
              { loc: [1, 2], note: "получает значение атрибута" },
              { loc: [2, 3], note: "устанавливает атрибут" },
              { loc: [3, 4], note: "удаляет атрибут" },
              { loc: [4, 5], note: "получить все атрибуты элемента, возвращает псевдо-массив" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Особенности атрибутов
            </Heading>
            <List textColor="white">
              <ListItem>Всегда являются строками</ListItem>
              <ListItem>Их имя нечувствительно к регистру (ведь это HTML)</ListItem>
              <ListItem>Видны в innerHTML (за исключением старых IE)</ListItem>
            </List>
            <Text textColor="white" margin="60px 0 0">Потыкать атрибуты в файле <br/><Code textColor="white">[examples/attributes-qualities.html]</Code></Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Что это, синхронизация свойств и атрибутов">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Узлы DOM &mdash; объекты
            </Heading>
            <Appear fid="1">
              <Text textColor="white" margin="45px 0 20px">Поэтому к нему можно свободно добавлять любые свойства</Text>
            </Appear>
            <Appear fid="1">
              <CodePane textSize="1.2rem" lang="js" source={codeSnippets.domPropertiesAdding} />
            </Appear>
            <Appear fid="2">
              <Text textColor="white" margin="45px 0 20px">Которые могут быть и функциями</Text>
            </Appear>
            <Appear fid="2">
              <CodePane textSize="1.2rem" lang="js" source={codeSnippets.domPropertiesFunction} />
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Особенности свойств
            </Heading>
            <List textColor="white">
              <ListItem>Значение может быть любым: строка, функция, число</ListItem>
              <ListItem>Регистр - имеет значение</ListItem>
              <ListItem>Не видны в innerHTML</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="data-атрибуты действительно крутая вещь, которой активно пользуются при разработке приложений. Можно ими, кстати, и в css пользоваться. Но это уже другая история.">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Нестандартные атрибуты
            </Heading>
            <Text textColor="white" margin="20px 0 30px">свойство dataset, data-атрибуты</Text>
            <List textColor="white">
              <ListItem>Нестандартные атрибуты &mdash; не попадают в свойства</ListItem>
              <ListItem>Атрибуты с приставкой <Code textColor="white">data-</Code> стандартизированы: попадают в свойство <Code textColor="white">dataset</Code></ListItem>
            </List>
            <Appear><Text textColor="white" margin="30px 0 15px">Атрибуты из:</Text></Appear>
            <Appear><CodePane textSize="1.5rem" lang="html" source={codeSnippets.attributesDataHtml} /></Appear>
            <Appear><Text textColor="white" margin="30px 0 15px">попадут в объект</Text></Appear>
            <Appear><CodePane textSize="1.5rem" lang="html" source={codeSnippets.attributesDataset} /></Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="class - особенный атрибут, т.к. для него есть сразу 2 свойства">
            <Heading  size={3} textColor="textPrimary" textFont="primary">
              Самый классный атрибут
            </Heading>
            <Text textColor="white" margin="20px 0 30px">class, className, classList</Text>
            <List textColor="white">
              <ListItem>className &mdash; классы в виде строки</ListItem>
              <ListItem>classList &mdash; классы в виде объекта</ListItem>
            </List>
            <Text textColor="white" margin="60px 0 30px">
              Свойство classList поддерживается в IE начиная с IE10, но его можно эмулировать в IE8+, подключив мини-библиотеку <Link href="https://github.com/eligrey/classList.js">classList.js.</Link>
              </Text>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            notes=""
            lang="js"
            code={code.classListMethods}
            ranges={[
              { loc: [0, 0], title: "Методы classList" },
              { loc: [0, 1], note: "возвращает true/false, в зависимости от того, есть ли у элемента класс class" },
              { loc: [1, 2], note: "добавляет класс" },
              { loc: [2, 3], note: "удаляет класс" },
              { loc: [3, 4], note: "если класса class нет, добавляет его, если есть – удаляет" },
              { loc: [5, 8], note: "можно перебрать классы через for, так как classList – это псевдо-массив" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Манипуляции с DOM
            </Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            notes=""
            lang="js"
            code={code.domManipulation1}
            ranges={[
              { loc: [0, 0], title: "Создание и клонирование" },
              { loc: [0, 1], note: "Создаёт новый элемент с указанным тегом" },
              { loc: [1, 2], note: "Добавим некий класс, чтобы красивее" },
              { loc: [2, 3], note: "И наполним, эмм.. смыслом" },
              { loc: [4, 5], note: "deep: true - Клонирует уже имеющийся элемент со всем его содержимым" },
              { loc: [5, 7], note: "А если deep = false, то получим пустой, бездушный клон" },
            ]}
          />

          <CodeSlide
            transition={["slide", "spin"]}
            notes=""
            lang="js"
            code={code.domManipulation2}
            ranges={[
              { loc: [0, 0], title: "Вставка и удаление" },
              { loc: [0, 1], note: "Добавляет элемент в конец родителя, последним потомком" },
              { loc: [1, 2], note: "Вставляет перед элементом, указанным вторым аргументом" },
              { loc: [2, 3], note: "Если второй аргумент null (не найден), то сработает как appendChild" },
              { loc: [3, 4], note: "Удаляет элемент, являющийся потомком parent" },
              { loc: [4, 5], note: "Заменяет один на другой" },
              { loc: [5, 6], note: "Позволяет удалять элемент напрямую, без ссылки на родителя (не поддерживается в IE11 и ниже). НО: ничего не делает, если родителя у этого элемента нет." },
            ]}
          />

          <Slide transition={["slide", "spin"]} bgColor="black" notes="">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Мультивставка
            </Heading>
            <Text textColor="white">insertAdjacentHTML и DocumentFragment</Text>
            <Link href="https://learn.javascript.ru/multi-insert">learn.javascript.ru/multi-insert</Link>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="black" notes="">
            <Heading size={4} textColor="textPrimary" textFont="primary">
              document.write
            </Heading>
            <Text textColor="white"></Text>
            <Link href="https://learn.javascript.ru/document-write">learn.javascript.ru/document-write</Link>

            <Text textColor="white" textSize="1.5rem">Пример использования в глобальной карте: для стилизации разных элементов под цвет клана</Text>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="black" bgImage={images.eventsCover.replace("/", "")} notes="">
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Событий на самом деле намного больше, полный список можно найти по ссылке внизу">
            <Heading caps size={5} textColor="textPrimary" textFont="primary">
              Основные браузерные события
            </Heading>

            <Text textColor="white" textSize="2rem">События документа:</Text>
            <List textColor="white" textSize="1.5rem">
              <ListItem textSize="1.5rem">DOMContentLoaded</ListItem>
              <ListItem textSize="1.5rem">load, beforeunload, unload</ListItem>
            </List>

            <Text textColor="white" textSize="2rem">Пользовательские события:</Text>
            <List textColor="white" textSize="1.5rem">
              <ListItem textSize="1.5rem">События мыши: click, mousedown/mouseup, hover, mousemove, mouseenter/mouseleave...</ListItem>
              <ListItem textSize="1.5rem">События клавиатуры: keydown, keyup</ListItem>
            </List>

            <Text textColor="white" textSize="2rem">События элементов управления (форм):</Text>
            <List textColor="white" textSize="1.5rem">
              <ListItem textSize="1.5rem">submit</ListItem>
              <ListItem textSize="1.5rem">focus</ListItem>
            </List>

            <Text textColor="white" textSize="2rem">События CSS:</Text>
            <List textColor="white" textSize="1.5rem">
              <ListItem textSize="1.5rem">transitionend</ListItem>
            </List>

            <Text textSize="1.5rem">
              <Link href="http://www.w3schools.com/jsref/dom_obj_event.asp">www.w3schools.com/jsref/dom_obj_event.asp</Link>
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading caps size={2} textColor="textPrimary" textFont="primary">
              Назначение обработчиков событий
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading caps size={6} textColor="textPrimary" textFont="primary" margin="30px 0 20px">
              Использование атрибута HTML
            </Heading>
            <CodePane textSize="1.5rem" lang="html" source={codeSnippets.htmlAttributeEventHandler} />
            <Heading caps size={6} textColor="textPrimary" textFont="primary" margin="30px 0 20px">
              Использование свойства DOM-объекта
            </Heading>
            <CodePane textSize="1.5rem" lang="html" source={codeSnippets.domPropertyEventHandler} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading size={6} textColor="textPrimary" textFont="primary" margin="30px 0 20px">
              addEventListener, removeEventListener
            </Heading>
            <CodePane textSize="1.5rem" lang="js" source={codeSnippets.addRemoveEventListeners} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Первым аргументом в обработчик события передаётся объект события - в нём хранятся детали события">
            <Heading size={6} textColor="textPrimary" textFont="primary" margin="30px 0 20px">
              Event Object
            </Heading>
            <CodePane textSize="1.5rem" lang="html" source={codeSnippets.eventObject} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Обзор популярных библиотек для работы с DOM
            </Heading>
            <Text textColor="white">jQuery, $dom, Zepto</Text>
            <Text textSize="2rem">
              <Link href="http://youmightnotneedjquery.com/">youmightnotneedjquery.com</Link>
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="">
            <Heading caps size={3} textColor="textPrimary" textFont="primary">
              Учебный проект
            </Heading>
            <Text textColor="white">ToDo List</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
