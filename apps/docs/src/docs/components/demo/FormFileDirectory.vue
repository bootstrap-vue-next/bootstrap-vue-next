<script setup lang="ts">
import {computed, defineComponent, h, type PropType, ref} from 'vue'

interface FileWithPath extends File {
  $path?: string
}

interface FileNode {
  name: string
  path: string
  children?: FileNode[]
  file?: FileWithPath
}

const directories = ref<FileWithPath[]>([])
const directoriesFlat = ref<FileWithPath[]>([])

const formatDirectories = (files: readonly File[]) => {
  if (files.length === 0) return ''
  return `📁 ${files.length} file${files.length === 1 ? '' : 's'} selected`
}

const directoryFlatPaths = computed(() => directoriesFlat.value.map((f) => f.$path || f.name))

// Build a tree structure from file paths
const buildFileTree = (files: FileWithPath[]): FileNode[] => {
  const root: FileNode[] = []

  files.forEach((file) => {
    const path = file.$path || file.name
    const parts = path.split('/')
    let currentLevel = root

    parts.forEach((part, index) => {
      const existing = currentLevel.find((node) => node.name === part)

      if (existing) {
        currentLevel = existing.children || []
      } else {
        const isFile = index === parts.length - 1
        const newNode: FileNode = {
          name: part,
          path: parts.slice(0, index + 1).join('/'),
          ...(isFile ? {file} : {children: []}),
        }
        currentLevel.push(newNode)
        currentLevel = newNode.children || []
      }
    })
  })

  return root
}

const nestedFileTree = computed(() => buildFileTree(directories.value))

// Define FileTree component for rendering nested file structure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileTree: any = defineComponent({
  name: 'FileTree',
  props: {
    nodes: {
      type: Array as PropType<FileNode[]>,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (): any =>
      h(
        'ul',
        {
          style: {
            paddingLeft: props.level > 0 ? '20px' : '0',
            listStyle: 'none',
            margin: 0,
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props.nodes.map((node): any =>
          h('li', {key: node.path}, [
            node.children
              ? [
                  h('span', {style: {fontWeight: 'bold'}}, `📁 ${node.name}`),
                  h(FileTree, {nodes: node.children, level: props.level + 1}),
                ]
              : h('span', `📄 ${node.name}`),
          ])
        )
      )
  },
})
</script>

<template>
  <div>
    <h5>Nested Structure (default)</h5>
    <BFormFile
      v-model="directories"
      directory
      :file-name-formatter="formatDirectories"
      show-file-names
      placeholder="Select a directory..."
    />
    <div
      v-if="directories.length > 0"
      class="mt-2 small text-muted"
    >
      <FileTree :nodes="nestedFileTree" />
    </div>

    <h5 class="mt-3">Flat Structure (no-traverse)</h5>
    <BFormFile
      v-model="directoriesFlat"
      directory
      no-traverse
      :file-name-formatter="formatDirectories"
      show-file-names
      placeholder="Select a directory..."
    />
    <ul
      v-if="directoriesFlat.length > 0"
      class="mt-2 small text-muted"
    >
      <li
        v-for="path in directoryFlatPaths"
        :key="path"
      >
        {{ path }}
      </li>
    </ul>
  </div>
</template>
