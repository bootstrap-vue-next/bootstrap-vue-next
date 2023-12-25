import {readFileSync} from 'node:fs'
import {resolve} from 'node:path'

const {version} = JSON.parse(
  readFileSync(resolve('node_modules', 'bootstrap-vue-next', 'package.json'), 'utf8')
)

export default {
  load: () => ({
    latestVersion: version,
  }),
}
