## Angular workspace (10 minutes)

### Install the Angular-CLI globally (if you haven't yet)

```
npm install -g @angular/cli
```

### Set up a sandbox environment

- In the terminal go to the root directory of your schematics project
- Run `ng new sandbox`, do not change the *sandbox* name
- Copy the first two blocks from the scripts in the `package.json` file into your projects scripts
- For each schematic create a new script `"dev:schematicName": "npm run build:clean:launch && cd sandbox && ng g collectionName:schematicName"`
- Test your existing schematics against the workspace by running the commands
- Reset your workspace with the `npm run clean` command

### Read the default project

- Use the `getWorkspace` function to get the list of projects
- Use the `context.logger.log` function to display all available projects in the workspace.

### Adding a Component to an NgModule

- Create a `modulePath` variable (path to the ng-module file)
- Create a `sourceText` variable containing the content of the ng-module file using `tree.read(modulePath)` and convert the buffer to a string
- Create an AST sourceFile using `createSourceFile(modulePath, sourceText, ScriptTarget.Latest, true);`
- Create a `componentPath` variable (path to the component to insert)
- Use the `buildRelativePath` utility function from `@schematics/angular/utility/find-module`
- Use the `addDeclarationToModule(source, modulePath, classifiedName, relativePath)` from `@schematics/angular/utility/ast-utils`
- Insert the changes using the tree update `recorder`, [more](https://github.com/interfacewerk/schematics/wiki/3.6-UpdateRecorder)