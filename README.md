- [Project setup](#project-setup)
  * [Npm targets](#npm-targets)
  * [Debugging tests with source maps](#debugging-tests-with-source-maps)
- [Usage](#usage)
  * [Installation](#installation)
  * [Importing the web components](#importing-the-web-components)
  * [Example HTML invocation](#example-html-invocation)
  * [Configuration](#configuration)
  * [Setting props programmatically](#setting-props-programmatically)
  * [Web component events](#web-component-events)
  
### Project setup
```
npm install
```

#### Npm targets

| Command            | Description                                                    |
|--------------------|----------------------------------------------------------------|
| npm run serve      | Compiles and hot-reloads for development                       |
| npm run build      | Compiles and minifies for production. Generates web components |
| npm run build:dev  | Compiles for development testing. Generates web components     |
| npm run lint       | Lints and fixes files                                          |
| npm run test:unit  | All unit tests                                                 |
| npm run test:debug | Debug tests (See below for further explanation)                |
  
### Usage
This project provides the custom html element `my-web-component`

#### Installation
1. Install via npm
   * ````shell script
     npm install --save my-web-component
2. Download from releases tab

#### Importing the web components
There are two ways to import - via script tag or require/import
1. Import via node module
    * ```javascript
      import 'my-web-component/my-web-component'
1. Point to the script directly
    * ```html
      <script type="application/javascript" src="node_modules/my-web-component/my-web-component.js"></script>

#### Example HTML invocation
```html
<my-web-component>
</my-web-component>
```

#### Configuration
Pass props to the web component to provide context. Props maybe injected using html, or programmatically using js (example below). Required props and their description are below.
Properties can be accessed/modified using `kebab-case` through html, and `camelCase` through javascript.

| Prop                  | Description                                                                                        |
|-----------------------|----------------------------------------------------------------------------------------------------|
| placeholder           |                                                                                                    |

#### Setting props programmatically 
The parent application will most likely need to programmatically control the configuration of the web components. This can be done by selecting a component using a query selector and setting the properties.  Example client script provided - `public/example-client-script.js`

```javascript
document.querySelector('my-web-component').id = '123'
```

#### Web component events
Embedded web components will emit global events that can be listened to by the parent application. Event descriptions are detailed below.

| Event             | Description                                      |
|-------------------|--------------------------------------------------|

Example:
```javascript
document.querySelector('my-web-component').addEventListener('event', (e) => {
    const data = e.detail[0];
});
```

#### Debugging tests with source maps
1. `npm run test:debug`
2. Navigate to `chrome://inspect/#devices` and click inspect under Target: `node_modules/.bin/jest`
