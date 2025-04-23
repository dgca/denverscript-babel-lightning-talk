---
marp: true
class: invert
---

# The Bare Bones of Babel Plugins

A DenverScript Lightning Talk
by Dan Cortes

---

## Video recording!

Are you looking at the repo but you missed the talk?

[Watch it here!](https://www.youtube.com/watch?v=TpdvHpWgwgg&t=3235s)

Starts at 54 minutes, but watch the whole thing, and big shoutout to the other speakers <3

---

## Audience poll

- Raise your hand if you've used Babel
- Raise your hand if you've used a Babel plugin

---

## What is Babel?

A generic multi-purpose compiler for JavaScript

---

## What does it let us do?

- Use newer JavaScript features while supporting older environments
- Transpile TypeScript, JSX, nonstandard JS
- Transform code in arbitrary ways at compile time (plugins!)

---

## Babel plugins in a nutshell

- A plugin is a function that gets called with the current state of the abstract syntax tree (AST)
- The plugin can return a whole different AST, or the same AST with modifications

---

## AST example (source code)

```ts
// Function declaration named "square"
// that takes one parameter "n"
// and returns the result of taking "n" and multiplying it by "n"

function square(n) {
  return n * n;
}
```

---

## AST example (JSON representation)

```ts
{
  type: "FunctionDeclaration",
  id: {
    type: "Identifier",
    name: "square"
  },
  params: [{
    type: "Identifier",
    name: "n"
  }],
  body: {
    type: "BlockStatement",
    body: [{
      type: "ReturnStatement",
      argument: {
        type: "BinaryExpression",
        operator: "*",
        left: {
          type: "Identifier",
          name: "n"
        },
        right: {
          type: "Identifier",
          name: "n"
        }
      }
    }]
  }
}
```

---

## Writing a plugin

- Install deps
  - `@babel/core`
  - `@babel/types`
  - `@babel/helper-plugin-utils`
- Create the plugin
- Add the plugin to your Babel config

---

## Let's look at an example!

✨ _Look at `vite.config.ts` and `plugin/babel-plugin.ts`_ ✨

---

## Wow, that was so contrived

And it was just scratching the surface of what's possible

---

## Resources

- [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
- [Babel Docs](https://babeljs.io/docs/en/plugins)
- [This talk](https://github.com/dgca/denverscript-babel-lightning-talk)

---

## Questions?
