import { Tree, chain, externalSchematic, Rule, SchematicContext } from '@angular-devkit/schematics';
import { LicenseOptions } from './schema';

const licenseText = (name: string, license: string) => `
/**
 * @license
 * Copyright ${name} Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an ${license}-style license.
 */

 `;

export default function(options: LicenseOptions): Rule {
  return (_tree: Tree, _context: SchematicContext) => {

    const rule = chain([
      externalSchematic('@schematics/angular', 'component', options),
      (tree: Tree, _context: SchematicContext) => {
        tree.getDir("./src/app/" + options.name).visit(filePath => {
          if (!filePath.endsWith(".ts")) {
            return;
          }

          const content = tree.read(filePath);
          if (!content) {
            return;
          }

          // Prevent from writing license to files that already have one.
          const license = licenseText(options.name, options.license);
          if (content.indexOf(license) == -1) {
            tree.overwrite(filePath, license + content);
          }
        });
        return tree;
      }
    ]);

    return rule;
  }
}