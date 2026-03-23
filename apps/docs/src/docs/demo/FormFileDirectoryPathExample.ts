// #region snippet
// Each File object includes webkitRelativePath property
// Note: 'files' would come from a file input event
const files = [] as File[]
files.forEach((file) => {
  console.log(file.webkitRelativePath) // e.g., "my-folder/subfolder/file.txt"
})

// Group files by directory
const filesByDirectory = files.reduce(
  (acc, file) => {
    const dir = file.webkitRelativePath.split('/')[0]
    if (dir && !acc[dir]) acc[dir] = []
    if (dir !== undefined) {
      acc[dir]?.push(file)
    }
    return acc
  },
  {} as Record<string, File[]>,
)
// #endregion snippet
