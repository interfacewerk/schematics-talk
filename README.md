# Schematics talk

Schematics talk by Felix Lemke ([@ngfelixl](https://twitter.com/ngfelixl)), first time talk at May'19 Academy Day.

### Run schematics against current tree

The following schematics are part of the exercises and will be accomplished when doing the tasks. You can run the schematics by

- Readme: `schematics .:readme --dry-run=false`
- Travis: `schematics .:travis --dry-run=false`
- LicensedComponent: `npm run dev:licensed` (uses the sandbox, only available on *angular* branch)

### General

There are two branches, `master` and `angular`. The angular branch is needed for the second part of the presentation.

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.