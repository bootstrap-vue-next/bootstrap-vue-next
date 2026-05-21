import process from 'node:process'

import {Server} from '#mcp-sdk/server'
import {StdioServerTransport} from '#mcp-sdk/stdio'
import {ListToolsRequestSchema} from '#mcp-sdk/types'

import packageJson from '../package.json' with {type: 'json'}

const SERVER_INFO = {
  name: packageJson.name,
  version: packageJson.version,
} as const

const registerTools = (): void => {
  // Future MCP tool registration belongs here.
}

export const createServer = (): Server => {
  const server = new Server(SERVER_INFO, {
    capabilities: {
      tools: {},
    },
  })

  registerTools()

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [],
  }))

  return server
}

const startServer = async (): Promise<void> => {
  const server = createServer()
  const transport = new StdioServerTransport()

  await server.connect(transport)
}

void startServer().catch((error: unknown) => {
  console.error('Failed to start BootstrapVueNext MCP server.', error)
  process.exit(1)
})
