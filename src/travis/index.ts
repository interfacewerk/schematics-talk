import { Rule, SchematicContext, Tree, chain, apply, url, applyTemplates, move, branchAndMerge, mergeWith, noop } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function travis(options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {

    _context.logger.log('info', JSON.stringify(options))

    const templateSource = apply(url('./files'), [
      applyTemplates(options),
      move('/')
    ]);

    return chain([
      branchAndMerge(
        mergeWith(templateSource)
      ),
      options.coverage ? addCoverage : noop()
    ])
  };
}

function addCoverage(tree: Tree, _context: SchematicContext) {
  const buffer = tree.read('.travis.yml');

  if (!buffer) {
    return;
  }
  
  let travisString = buffer.toString('utf-8');

  travisString += `
after_script: npm run coverage`;

  tree.overwrite('.travis.yml', travisString);
  return tree;
}