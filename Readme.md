# How to run the app
Get your API credentials from https://www.petfinder.com/ and place them in the .env file.
1. npm install
2. npm run dev
3. Happy Exploring !!

# Credits: 
This app was created in a code along workshop titled "Intro to React v5" by Brian Holt from Front End Masters.


# A complete guide to React

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

# npm

npm does not stand for Node Package Manager. It is, however, the package manager for Node. (They don't say what it stands for.) It also has all the packages in the front end scene. npm makes a command line tool, called npm as well. npm allows you to bring in code from the npm registry which is a bunch of open source modules that people have written so you can use them in your project. Whenever you run npm install react (don't do this yet), it will install the latest version of React from the registry.

# eslint

On top of Prettier which takes of all the formatting, you may want to enforce some code styles which pertain more to usage: for example you may want to force people never use with which is valid JS but ill advised to use. ESLint comes into play here. It will lint for this problems.

# prettier

# Javascript Bundlers

Parcel is a relatively new bundler for JavaScript projects. Parcel is an amazing tool that zero-config. It works with everything we want to do out of the box.

    npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react



# React Hooks

React does not support 2-way data binding. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

```

import React, { useState } from 'react';

  function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
        </div>
);
}

```

```
npm install -D eslint-plugin-react-hooks
```

Do not put hooks inside conditionals.

# Effects

Here we're using an effect to retrieve a list of breeds from the API. An effect is run after every render (which happens after state changes.) You're going to use effects to do things like AJAX calls, modify ambient state, integrate with other libraries, and many other things. Basically it's a way to delay work until after render happens and to deal with asynchronous side effects.

# Reach Router
example: https://reach.tech/router/example/basic

# React Life Cycle Methods

render()- Only required method in a class component.

The render function should be pure meaning it does not modify component state, it returns the same result each time it's invoked. It does not interact with the browser.

componentDidMount() is invoked immediately after a component is mounted.

componentDidUpdate() is invoked immediately after updating occurs. The component provides an opportunity to operate on the DOM when the component has been updated.

getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

This method exists for rare use cases where the state depends on changes in props over time.

# Error Boundaries

In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to emit cryptic errors on next renders. These errors were always caused by an earlier error in the application code, but React did not provide a way to handle them gracefully in components, and could not recover from them.

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

# Context API

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language

```

const myContext=React.createContext(defaultValue)
<MyContext.Provider value={/* some value */}>

```

All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component bails out of the update.

# Portals

We want the modal to render above the root element.

# useRef hook

Refs provide a way to access DOM nodes or React elements created in the render
method.

In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

# Home Page

![Home Page](https://user-images.githubusercontent.com/15992276/55453865-a2c37d80-55ab-11e9-8ce3-cffd4cd00093.JPG)

# Results Page

![Results Page](https://user-images.githubusercontent.com/15992276/55453894-bd95f200-55ab-11e9-8529-45e4689de155.JPG)

# Details Page

![Details](https://user-images.githubusercontent.com/15992276/55453911-cbe40e00-55ab-11e9-865f-d841505a0356.JPG)


# Carousel Page

![Carousel](https://user-images.githubusercontent.com/15992276/55453939-e3bb9200-55ab-11e9-974b-befc444b8a73.JPG)

# Modal

![Modal](https://user-images.githubusercontent.com/15992276/55454187-e4085d00-55ac-11e9-81c4-b28b46726c31.JPG)



