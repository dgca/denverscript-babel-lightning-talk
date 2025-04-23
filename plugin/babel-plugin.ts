import { declare } from "@babel/helper-plugin-utils";

type Args = {
  textReplacer: {
    from: string;
    to: string;
  };
  headingClassName: string;
};

export function myCoolPlugin({ textReplacer, headingClassName }: Args) {
  return declare(({ types: t }) => {
    return {
      name: "my-cool-plugin",
      visitor: {
        JSXText(path) {
          // Replace text instances of the textReplacer.from string with the textReplacer.to string
          const updatedText = path.node.value.replaceAll(
            textReplacer.from,
            textReplacer.to
          );
          path.node.value = updatedText;
        },
        JSXOpeningElement(path) {
          // Add a className attribute to the element if it's an h1
          const elementName = path.node.name;
          if (t.isJSXIdentifier(elementName) && elementName.name === "h1") {
            path.node.attributes.push(
              t.jsxAttribute(
                t.jsxIdentifier("className"),
                t.stringLiteral(headingClassName)
              )
            );
          }
        },
        CallExpression(path) {
          // Remove console.log statements
          const callee = path.node.callee;
          if (
            t.isMemberExpression(callee) &&
            t.isIdentifier(callee.object) &&
            callee.object.name === "console" &&
            t.isIdentifier(callee.property) &&
            callee.property.name === "log"
          ) {
            path.remove();
          }
        },
      },
    };
  });
}
