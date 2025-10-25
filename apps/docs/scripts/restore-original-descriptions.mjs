import {readFileSync, writeFileSync} from 'fs'
import {execSync} from 'child_process'
import {join} from 'path'
import {fileURLToPath} from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const docsDir = join(__dirname, '..', 'src', 'docs', 'components')

// Get list of all component markdown files
const componentFiles = [
  'accordion.md',
  'alert.md',
  'app.md',
  'avatar.md',
  'badge.md',
  'breadcrumb.md',
  'button-group.md',
  'button.md',
  'card.md',
  'carousel.md',
  'collapse.md',
  'dropdown.md',
  'form-checkbox.md',
  'form-group.md',
  'form-input.md',
  'form-radio.md',
  'form-select.md',
  'form-spinbutton.md',
  'form-tags.md',
  'form-textarea.md',
  'form.md',
  'grid-system.md',
  'image.md',
  'input-group.md',
  'link.md',
  'list-group.md',
  'modal.md',
  'nav.md',
  'navbar.md',
  'offcanvas.md',
  'orchestrator.md',
  'overlay.md',
  'pagination.md',
  'placeholder.md',
  'popover.md',
  'progress.md',
  'spinner.md',
  'table.md',
  'tabs.md',
  'toast.md',
  'tooltip.md',
]

componentFiles.forEach((filename) => {
  try {
    const filePath = `apps/docs/src/docs/components/${filename}`

    // Get the original file content from git
    const originalContent = execSync(`git show HEAD:${filePath}`, {encoding: 'utf8'})

    // Extract the PageHeader content using regex
    const pageHeaderMatch = originalContent.match(/<PageHeader>\s*([\s\S]*?)\s*<\/PageHeader>/)

    if (!pageHeaderMatch) {
      console.log(`⚠️  No PageHeader found in ${filename}`)
      return
    }

    const originalDescription = pageHeaderMatch[1].trim()

    // Read the current file
    const currentPath = join(docsDir, filename)
    const currentContent = readFileSync(currentPath, 'utf8')

    // Check if it already has frontmatter (with either single or double quotes)
    const frontmatterMatch = currentContent.match(
      /^---\s*\ndescription: ["'](.+?)["']\s*\n---\s*\n/s
    )

    if (!frontmatterMatch) {
      console.log(`⚠️  No frontmatter in ${filename}`)
      return
    }

    // Escape double quotes in the description
    const escapedDescription = originalDescription.replace(/"/g, '\\"')

    // Replace the frontmatter with the original PageHeader content
    const newFrontmatter = `---\ndescription: "${escapedDescription}"\n---\n`
    const newContent = currentContent.replace(
      /^---\s*\ndescription: ["'].+?["']\s*\n---\s*\n/s,
      newFrontmatter
    )

    writeFileSync(currentPath, newContent, 'utf8')
    console.log(`✅ Updated ${filename}`)
  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message)
  }
})

console.log('\n✨ Done!')
