# Corpus Generator

Generates the base project structure for extracting data from some source, putting it into an `index.json` file, and maybe creating an `index.html` example for it to host on GitHub Pages.

## Installation

```
npm install tower-cli -g
npm install corpus-generator -g
```

## Usage

```
$ tower generate corpus my-repo

  create : my-repo
  create : my-repo/Readme.md
  create : my-repo/component.json
  create : my-repo/package.json
  create : my-repo/.gitignore
  create : my-repo/index.js
  create : my-repo/index.json
  create : my-repo/index.html

$
```

## Licence

MIT