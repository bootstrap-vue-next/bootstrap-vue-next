import {mkdir, readdir, readFile, writeFile} from 'fs/promises'

const run = async () => {
  const thisDir = new URL('.', import.meta.url)
  const files = (await readdir(thisDir, {withFileTypes: true})).filter((f) =>
    f.name.endsWith('.data.ts')
  )
  const data = await Promise.all(files.map((f) => readFile(new URL(f.name, thisDir), 'utf-8')))

  const combinedData = data.join('\n--new--\n')
  // Split this into 8000 characters chunks
  const chunks = []
  for (let i = 0; i < combinedData.length; i += 7500) {
    chunks.push(combinedData.slice(i, i + 7500))
  }
  const c = []
  // Make a new directory called mystuff inside this directory
  const myStuffDir = new URL('myStuff', thisDir)
  await mkdir(myStuffDir, {recursive: true})
  // Write each chunk to a separate file
  for (let i = 0; i < chunks.length; i++) {
    const outputFile = new URL(`myStuff.${i}.foo.ts`, myStuffDir)
    c.push(writeFile(outputFile, chunks[i], 'utf-8'))
  }
  await Promise.all(c)
}

run()
