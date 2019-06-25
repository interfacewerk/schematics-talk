## Getting started (10 minutes)

### Install binaries

To get going, install the `schematics` binary globally

```
npm install @angular-devkit/schematics-cli
```

### Create a workspace

- Create a schematics workspace using the schematics cli with `schematics blank myCollectionName` (or whatever name you want).
- Change to the `myCollectionName` directory
- Rename the `myCollectionName` schematic (folder, function name in `index.ts`) to a schematic name which fits your needs, e.g. `readme`.
- Adjust the `collection.json` to point to your renamed schematic.
- Run the schematic by `schematics .:readme`.

### Create a file with content from the prompt

Define the schema to get prompted for a property value which you are going to use to create the files content. Make use of the `x-prompt` property in the schema and access it from the options. Use the `tree.create` or `overwrite` function to insert the prompts content.