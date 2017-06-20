#!/usr/bin/env node

const ejs = require('ejs');
const fs = require('fs');
const jhiCore = require('jhipster-core');
const jsonpatch = require('fast-json-patch');
const path = require('path');

function readEntities(dir) {
  let entities = {};

  fs.readdirSync(dir).forEach(file => {
    const entityName = file.slice(0, file.length - 5);
    console.log(`read: dir: ${dir}, file: ${file}, entityName: ${entityName}`);
    entities[entityName] = jhiCore.readEntityJSON(`${dir}/${file}`);
  });

  return entities;
}

function destinationPath(fn) {
  return path.resolve(fn);
}

function templatePath(fn) {
  return path.resolve(__dirname, fn)
}

/**
 * Process template
 * TODO: use generator's `this.template`
 */
function template(source, destination, generator, options = {}, context) {
  const _context = generator || context;

  console.log(`render ${source} to ${destinationPath(destination)}`)
  ejs.renderFile(templatePath(source), generator, options, (err, res) => {
    if(!err) {
      fs.writeFileSync(destinationPath(destination), res);
    } else {
      console.log(`ERROR: ${err}`)
    }
  })
}

function generateLiquibaseChangelog(beforeDir, afterDir) {
  const beforeEntities = readEntities(beforeDir);
  const afterEntities = readEntities(afterDir);
  const entitiesDiff = jsonpatch.compare(beforeEntities, afterEntities);

  let generator = {
    diff: entitiesDiff,
    entities: afterEntities
  };

  // console.log(`beforeEntities: ${JSON.stringify(beforeEntities, null, 2)}`);
  // console.log(`afterEntities: ${JSON.stringify(afterEntities, null, 2)}`);
  console.log(`diff: ${JSON.stringify(entitiesDiff, null, 2)}`);

  template('liquibase_changelog.xml', 'src/main/resources/config/liquibase/changelog/rendered_liquibase_changelog.xml', generator)
}

function main() {
  let beforeDir = process.argv[2];
  let afterDir = process.argv[3];

  console.log(`compare ${beforeDir} and ${afterDir}`);
  generateLiquibaseChangelog(beforeDir, afterDir);
}

main();
