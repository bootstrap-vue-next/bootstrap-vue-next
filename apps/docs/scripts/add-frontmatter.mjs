/**
 * Script to add frontmatter descriptions to all component documentation files
 *
 * This script reads the hardcoded descriptions from the old components.md file
 * and adds them as frontmatter to each component's .md file.
 *
 * Usage: node scripts/add-frontmatter.mjs
 */

import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Component descriptions from components.md
const descriptions = {
  'app': 'The root component for your bootstrap-vue-next application',
  'accordion':
    'Easily toggle content visibility on your pages. Includes support for making accordions',
  'alert':
    'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages',
  'avatar':
    'Custom component typically used to display a user profile as a picture, an icon, or short text',
  'badge': 'Small and adaptive tag for adding context to just about any content',
  'breadcrumb': `Indicate the current page's location within a navigational hierarchy.`,
  'button': 'Custom button component for actions in forms, dialogs, and more',
  'button-group': 'Group a series of buttons on a single line or stack them in a vertical column',
  'button-toolbar': 'Group a series of button-groups and/or input-groups together on a single line',
  'card':
    'A flexible and extensible content container. It includes options for headers and footers, a wide variety of content',
  'carousel':
    'A slideshow component for cycling through elements—images or slides of text—like a carousel',
  'collapse':
    'Easily toggle visibility of almost any content on your pages in a vertically collapsing container',
  'dropdown':
    'Toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format',
  'form':
    'Form component and helper components that optionally support inline form styles and validation states',
  'form-checkbox':
    'Custom checkbox input and checkbox group to replace the browser default checkbox input, built on top of semantic and accessible markup. Optionally supports switch styling',
  'form-group': 'The easiest way to add some structure to forms',
  'form-input':
    'Create various type inputs such as text, password, number, URL, email, search, range, date, and more',
  'form-radio': `Bootstrap's custom radio input to replace the browser default radio input.`,
  'form-select': 'Bootstrap custom select using custom styles',
  'form-tags':
    'Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection, and optional tag validation',
  'form-textarea':
    'Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states',
  'grid-system': 'Lightweight utility components for making a flexible, responsive user interface',
  'image': 'Image component with responsive behavior',
  'input-group':
    'Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.',
  'link': 'A simple wrapper for standard navigation components',
  'list-group':
    'A flexible and powerful component for displaying a series of content. List Group items can be modified to support just about any content within',
  'modal':
    'Modals are flexible dialog, interruptive, prompts that can support a variety of use cases',
  'nav': 'The Nav component is a simple wrapper for building navigation components',
  'navbar':
    'The Navbar is typically the central location for branding, navigation, and other elements on the header',
  'orchestrator':
    'The Orchestrator component manages the rendering and positioning of dynamic components like modals, toasts, and popovers. Only for advanced use cases.',
  'offcanvas':
    'Offcanvas components are hidden sidebars for your app, usually opened by some event',
  'overlay': 'Visually obscure a particular element or component and its content',
  'pagination':
    'Quick first, previous, next, last, and page buttons for pagination control of another component',
  'placeholder':
    'Placeholder components can create a unique appearance to indicate something may still be loading',
  'popover': 'Popover provides a tooltip behavior over another component',
  'progress':
    'A custom progress component for displaying simple or complex progress bars, featuring support for horizontally stacked bars, animated backgrounds, and text labels',
  'spinner': `The spinner component can be used to show the loading state in your projects. They're rendered only with basic HTML and CSS as a lightweight Vue functional component.`,
  'table':
    'For displaying tabular data. Table supports pagination, filtering, sorting, custom rendering, events, and asynchronous data. For a simple display of tabular data without all the fancy features, use TableSimple',
  'tabs': 'Create a widget of tabbable panes of local content',
  'toast':
    'Push notifications to your visitors with a toast, a lightweight and easily customizable alert message',
  'form-spinbutton': 'A spin button component for numerical inputs',
  'tooltip': 'Tooltip provides a tooltip behavior over another component',
}

const componentsDir = path.resolve(__dirname, '../src/docs/components')

function processFile(filePath) {
  const fileName = path.basename(filePath, '.md')
  const description = descriptions[fileName]

  if (!description) {
    console.log(`⚠️  No description found for ${fileName}`)
    return
  }

  let content = fs.readFileSync(filePath, 'utf-8')

  // Check if file already has frontmatter
  if (content.startsWith('---')) {
    console.log(`⏭️  Skipping ${fileName} (already has frontmatter)`)
    return
  }

  // Find the PageHeader section and extract its content
  const pageHeaderMatch = content.match(/<PageHeader>\s*\n\s*(.*?)\s*\n\s*<\/PageHeader>/s)

  if (!pageHeaderMatch) {
    console.log(`⚠️  No PageHeader found in ${fileName}`)
    return
  }

  const currentDescription = pageHeaderMatch[1].trim()

  // Escape single quotes in description for YAML
  const escapedDescription = description.replace(/'/g, "''")

  // Add frontmatter and update PageHeader
  const frontmatter = `---\ndescription: '${escapedDescription}'\n---\n\n`
  const newContent = content.replace(
    /<PageHeader>\s*\n\s*.*?\s*\n\s*<\/PageHeader>/s,
    '<PageHeader />'
  )

  fs.writeFileSync(filePath, frontmatter + newContent)

  console.log(`✅ Processed ${fileName}`)
  if (currentDescription !== description) {
    console.log(`   Old: "${currentDescription.substring(0, 50)}..."`)
    console.log(`   New: "${description.substring(0, 50)}..."`)
  }
}

// Process all markdown files in the components directory
const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.md'))

console.log(`Found ${files.length} component files\n`)

files.forEach((file) => {
  processFile(path.join(componentsDir, file))
})

console.log('\n✨ Done!')
