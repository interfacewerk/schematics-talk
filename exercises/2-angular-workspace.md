## Angular workspace (10 minutes)

### Install the Angular-CLI globally (if you haven't yet)

```
npm install -g @angular/cli
```

### Set up a sandbox environment

- In the terminal go to the root directory of your schematics project
- Run `ng new sandbox`, do not change the *sandbox* name and track all files with git
- Copy the first two blocks from the scripts in the `package.json` file into your projects scripts

### Creating a licensedComponent schematic

- Create a new schematic called `licensedComponent`.
- Use the `externalSchematic()` function and chain the external angular component rule with your custom rule
- Write a rule function that looks up the 

### Run the schematic

- Add a `"dev:license": "npm run build:clean:launch && cd sandbox && ng g schematics:licensedComponent"` script to `package.json`
- Test your existing schematics against the workspace by running the command
- Reset your workspace with the `npm run clean` command