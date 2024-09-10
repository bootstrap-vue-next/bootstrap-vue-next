/* env node */
/* eslint-disable no-undef */
const {copyFile, readdir, writeFile} = require('node:fs/promises')
const pkg = require('../package.json')
const {join} = require('node:path')
const path = require('node:path')

async function generateExportsObject(directory) {
  const result = {}

  // Read all items in the directory
  const items = await readdir(directory, {withFileTypes: true})

  for (const item of items) {
    if (item.isDirectory()) {
      // If the item is a directory, get its name and list files
      const folderPath = join(directory, item.name)
      const files = await readdir(folderPath)
      result[item.name] = files
    }
  }

  return result
}

function groupFilesByPrefix(fileList) {
  const grouped = {}

  fileList.forEach((file) => {
    // Extract the prefix before the first dot
    const [prefix] = file.split('.')

    if (!grouped[prefix]) {
      grouped[prefix] = []
    }

    grouped[prefix].push(file)
  })

  return grouped
}

const mapFiles = (arr, prefix) =>
  arr.reduce(
    (acc, file) => {
      if (file.endsWith('.d.ts')) {
        acc.require.types = `${prefix}${file}`
      } else if (file.endsWith('.umd.js')) {
        acc.require.default = `${prefix}${file}`
      } else if (file.endsWith('.mjs')) {
        acc.import.default = `${prefix}${file}`
      } else if (file.endsWith('.d.mts')) {
        acc.import.types = `${prefix}${file}`
      }
      return acc
    },
    {
      import: {types: '', default: ''},
      require: {types: '', default: ''},
    }
  )

const run = async () => {
  const [
    components,
    directives,
    directivesIndex,
    plugins,
    pluginsIndex,
    composables,
    composablesIndex,
  ] = await Promise.all([
    generateExportsObject(path.resolve(__dirname, '../dist/src/components')),
    generateExportsObject(path.resolve(__dirname, '../dist/src/directives')),
    readdir(path.resolve(__dirname, '../dist/src/directives')),
    generateExportsObject(path.resolve(__dirname, '../dist/src/plugins')),
    readdir(path.resolve(__dirname, '../dist/src/plugins')),
    generateExportsObject(path.resolve(__dirname, '../dist/src/composables')),
    readdir(path.resolve(__dirname, '../dist/src/composables')),
  ])
  const copy = JSON.parse(JSON.stringify(pkg))
  for (const [key, value] of Object.entries(components)) {
    const group = groupFilesByPrefix(value)
    for (const [prefix, files] of Object.entries(group)) {
      const mapped = mapFiles(files, `./dist/src/components/${key}/`)
      if (prefix === 'index') {
        copy.exports[`./components/${key}`] = mapped
      } else {
        copy.exports[`./components/${key}/${prefix}`] = mapped
      }
    }
  }
  for (const [key, files] of Object.entries(directives)) {
    const mapped = mapFiles(files, `./dist/src/directives/${key}/`)
    if (key === 'index') {
      copy.exports[`./directives/${key}`] = mapped
    } else {
      copy.exports[`./directives/${key}`] = mapped
    }
  }
  copy.exports['./directives'] = mapFiles(directivesIndex, './dist/src/directives/')
  for (const [key, value] of Object.entries(plugins)) {
    const group = groupFilesByPrefix(value)
    for (const [prefix, files] of Object.entries(group)) {
      const mapped = mapFiles(files, `./dist/src/plugins/${key}/`)
      if (prefix === 'index') {
        copy.exports[`./plugins/${key}`] = mapped
      } else {
        copy.exports[`./plugins/${key}/${prefix}`] = mapped
      }
    }
  }
  copy.exports['./plugins'] = mapFiles(pluginsIndex, './dist/src/plugins/')
  for (const [key, value] of Object.entries(composables)) {
    const group = groupFilesByPrefix(value)
    for (const [prefix, files] of Object.entries(group)) {
      const mapped = mapFiles(files, `./dist/src/composables/${key}/`)
      if (prefix === 'index') {
        copy.exports[`./composables/${key}`] = mapped
      } else {
        copy.exports[`./composables/${key}/${prefix}`] = mapped
      }
    }
  }
  copy.exports['./composables'] = mapFiles(composablesIndex, './dist/src/composables/')

  const packageJsonPath = path.resolve(__dirname, '../package.json')
  const packageCopyPath = path.resolve(__dirname, '../package.copy.json')

  await copyFile(packageJsonPath, packageCopyPath)
  await writeFile(packageJsonPath, JSON.stringify(copy, null, 2))
}

run()
