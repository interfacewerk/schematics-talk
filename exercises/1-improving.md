## Improving

### Template Files

Create a new schematic which uses template files, e.g. `travis`. Create a files folder inside the `travis`schematic folder and use template strings inside of it. Use the provided strings utility.

Use `tree.create` to create the `.travis.yml` file directly in your root
directory. The template could look like this

```
language: node_js
node_js:
 - <%= node %>
install:
 - npm install
script:
 - npm run build
 - npm run lint
 - npm run test
```

### Chaining

Write a second rule inside the *index.ts* of your previously created `travis` schematic.
This rule function should append the text to the `.travis.yml` file.

```
after_script: npm run coverage
```

Now instead of returning the merged tree in the default rule function, use the `chain` method and chain the template file *merge* with the coverage rule.

### Abstract Syntax Tree (AST)

Go to the [typescript ast viewer](https://ts-ast-viewer.com/) (or another ast viewer) and get a feeling for the AST. The left window is the editor, the centered window the tree-view and right window the selected node-view

- declare a const and watch the changes
- click on the different nodes
- declare a function and have a look at the node changes