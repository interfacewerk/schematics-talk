import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');
const workspaceOptions = {name:'test-workspace',version:''};
const appOptions = {name:'test-app',project:'test-workspace'};
const runner = new SchematicTestRunner('schematics', collectionPath);
let appTree: UnitTestTree;


describe('licensedComponent', () => {
  beforeEach(() => {
    appTree = runner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
    appTree = runner.runExternalSchematic('@schematics/angular', 'application', appOptions, appTree);
  });

  xit('should create the component files', (done) => {
    runner.runSchematicAsync('licensedComponent', {name:'test',license:'MIT'}, appTree).toPromise().then(
      tree => {
        expect(tree.files).toContain('/test-app/src/app/test/test.component.ts');
        expect(tree.files).toContain('/test-app/src/app/test/test.component.html');
        expect(tree.files).toContain('/test-app/src/app/test/test.component.css');
        done();
      }
    );
  });

  xit('should throw an error if workspace is empty', () => {
    expect(runner.runSchematicAsync('navigation', {name:'nav'}, Tree.empty())).toThrow;
  });
});
