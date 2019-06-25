import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('schematics', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    let tree = Tree.empty();
    tree.create('README.md', '');
    const testTree = runner.runSchematic('readme', {}, tree);

    expect(testTree.files).toEqual(['/README.md']);
  });
});
