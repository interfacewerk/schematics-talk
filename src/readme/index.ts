import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function readme(options: {title: string}): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.overwrite('README.md', options.title)
    return tree;
  };
}
