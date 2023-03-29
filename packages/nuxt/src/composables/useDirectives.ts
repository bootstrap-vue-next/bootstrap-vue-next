import { addImports } from "@nuxt/kit";
import type { ModuleOptions } from "../module";
import parseActiveImports from "../utils/parseActiveImports";

export default (options: ModuleOptions['directives']) => {
  const values = parseActiveImports(
    {
      vBColorMode: false,
      vBPopover: false,
      vBToggle: false,
      vBTooltip: false,
    },
    options
  )
  .map((el) => el.name.toLowerCase().startsWith('v') 
    ? {...el, name: el.name.slice(1)}
    : el
  )
  addImports(values)
}
