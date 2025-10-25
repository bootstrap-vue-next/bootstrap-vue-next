/**
 * Script to fix YAML frontmatter quotes in all component files
 * Changes from single quotes to double quotes to avoid YAML parsing issues
 */

import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const componentsDir = path.resolve(__dirname, '../src/docs/components')

function processFile(filePath) {
  const fileName = path.basename(filePath)
  let content = fs.readFileSync(filePath, 'utf-8')

  // Check if file has frontmatter with single quotes
  const frontmatterMatch = content.match(/^---\n(description: '.*?')\n---/s)

  if (!frontmatterMatch) {
    return
  }

  // Extract description value
  const descLine = frontmatterMatch[1]
  const descMatch = descLine.match(/description: '(.*)'/)

  if (!descMatch) {
    return
  }

  const description = descMatch[1]

  // Use double quotes and escape any internal double quotes
  const escapedDescription = description.replace(/"/g, '\\"').replace(/''/g, "'")

  // Replace the frontmatter
  const newFrontmatter = `---\ndescription: "${escapedDescription}"\n---`
  content = content.replace(/^---\n.*?\n---/s, newFrontmatter)

  fs.writeFileSync(filePath, content)
  console.log(`✅ Fixed ${fileName}`)
}

// Process all markdown files in the components directory
const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.md'))

console.log(`Processing ${files.length} component files\n`)

files.forEach((file) => {
  processFile(path.join(componentsDir, file))
})

console.log('\n✨ Done!')
