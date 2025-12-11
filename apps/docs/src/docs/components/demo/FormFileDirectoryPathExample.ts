// Example: After selecting a directory with BFormFile
const files: File[] = [] // Your selected files from v-model

files.forEach((file: File) => {
  console.log(file.name) // "helpers.ts"
  console.log(file.$path) // "src/utils/helpers.ts"
})
