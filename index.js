import { compileFromFile } from 'json-schema-to-typescript'
import directoryTree from 'directory-tree';
import fs from 'fs';

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

fs.writeFileSync('./types/types.d.ts', "/* tslint:disable */\n/** Execute `npm run gentypes` to regenerate **/\n\n");

directoryTree('./schema', { extensions: /\.json$/ }, (item) => {
  let basename;
  let paths = item.path.split('/').reverse();

  if(item.path.includes('$id')) {
    basename = paths[2];
  } else if (item.path.includes('pokemon/encounters')) {
    basename = paths[3];
  }
  else {
    basename = `${paths[1]}List`;
  }

  compileFromFile(item.path, { 
    declareExternallyReferenced: false,
    bannerComment: ''
  }).then(ts => {
    ts = ts.replaceAll('[k: string]: unknown;', '');

    if (ts.includes('Index') && !item.path.includes('schema/index.js')) {
      fs.appendFileSync("./types/types.d.ts", ts.replace('Index', toPascalCase(basename)))
    } else {
      fs.appendFileSync("./types/types.d.ts", ts)
    }

    fs.appendFileSync("./types/types.d.ts", '\n');
  });
});