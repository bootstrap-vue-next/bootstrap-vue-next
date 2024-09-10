/* eslint-disable no-undef */
/* env node */
const {copyFile, rm} = require('fs/promises')
const path = require('path')

const run = async () => {
  const packageCopyPath = path.resolve(__dirname, '../package.copy.json')
  const packageJsonPath = path.resolve(__dirname, '../package.json')

  await copyFile(packageCopyPath, packageJsonPath)
  await rm(packageCopyPath)
}

run()
