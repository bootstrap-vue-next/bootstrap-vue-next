#!/usr/bin/env node
import process from 'node:process'

import {StdioServerTransport} from '#mcp-sdk/stdio'

import {createServer} from './index.js'

const startServer = async (): Promise<void> => {
  const server = createServer()
  const transport = new StdioServerTransport()

  await server.connect(transport)
}

startServer().catch((error: unknown) => {
  console.error('Failed to start BootstrapVueNext MCP server.', error)
  process.exit(1)
})
