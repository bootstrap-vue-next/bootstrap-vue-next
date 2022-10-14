import {fs,info, error} from '@vuepress/utils'
// import type {Page, Plugin, App, PageData} from '@vuepress/core'
import type { Plugin, App, PageData, Page } from 'vuepress'
import {path} from '@vuepress/utils'
import {  getComponentsFromDir,  RegisterComponentsPluginOptions } from '@vuepress/plugin-register-components'
import {createComponentMetaChecker, MetaCheckerOptions, createComponentMetaCheckerByJsonConfig} from 'vue-component-meta'


export type ComponentPropsOptions  = Omit<RegisterComponentsPluginOptions, 'components'> & 
{metaCheckerOptions? : MetaCheckerOptions, rootPath?: string } 

export interface ComponentReferenceOptions {
  baseDir?: string,
  extendsProps? : (app : App, page : Page, componentReference : any | null) => any,
} 


function resolvePageComponentReferencePath(baseDir: string, page, app: App): {filePath: string } {
  const filePath = path.resolve(app.dir.source(), baseDir, path.addExt(page.slug, '.json'))
  if (!filePath) {
    throw new Error('Cannot resolve Component Reference Path')
  }

  return {
    filePath: filePath,
  }
}

export const componentReference  = ({
  baseDir = "component-references",
  extendsProps,
   
} : ComponentReferenceOptions = {baseDir : "component-references"

}, {
  metaCheckerOptions = undefined,
  componentsDir = null,
  rootPath,
  componentsPatterns = ['**/*.vue', '!App.vue'],
  getComponentName = (filename) =>
    path.basename(filename, ".vue"),
} : ComponentPropsOptions = {}) : Plugin => ({
  name: 'plugin-object',
  clientConfigFile: path.resolve(__dirname, './client.ts'),
  onPrepared : async (app) => {
    info("ComponentProps Gathering Prop Defintions")
    
    if(componentsDir){

    let componentMetaMap = {}
    if(fs.pathExistsSync(app.dir.temp('componentMeta.json'))){
        info("Skip Checker")  
        return
    }
    let componentsMap =  await getComponentsFromDir({componentsDir, componentsPatterns, getComponentName})
    // Our component directory and tsconfig must share a simliar path
    let checker = createComponentMetaCheckerByJsonConfig(path.resolve(componentsDir),
      {
        "include": [
          "**/*",
        ],
      },
      metaCheckerOptions)
      
    info("Established Checker")
   
      async function meta(component, filepath){
        try{
               let {props, events, exposed ,slots} =  checker.getComponentMeta(path.resolve(filepath))
               componentMetaMap[component] = {props: props, events: events ,  exposed: exposed,  slots: slots}
             }catch(erroy :any){
              error(`Parsing Failed`, error)
             }
      }

     await  Promise.all(Object.entries(componentsMap).map((attributes)=> meta(attributes[0], attributes[1])))
    
    app.writeTemp("componentMeta.json", JSON.stringify(componentMetaMap))
    }
  }, 
  extendsPage(page, app: App) {
    const {filePath} = resolvePageComponentReferencePath(baseDir, page, app)
    let componentReference = null
    if (fs.existsSync(filePath)) {
      componentReference = require(filePath) 
      // see if componentMeta exists to augment existing user defined types
      if (fs.existsSync( path.resolve(path.join(app.dir.temp(), 'componentMeta.json')))) {
         let componentMeta = require( path.resolve(path.join(app.dir.temp(), 'componentMeta')))

         if(componentReference){
         componentReference.meta.components.forEach(({component, props}, index) => {

          if (props && componentMeta[component]){
            props.forEach((prop, propindex)=>{
              let propDefiniton = componentMeta[component].props.find((propMeta) => {
                if (propMeta.name === prop.prop){
                  return propMeta
                }
              })

              if (propDefiniton){
                prop.type = propDefiniton.type
              }
            })
          }
        });
      }}
    }

    if (extendsProps){
      extendsProps(app, page, componentReference)
    }

    page.data.componentReference = componentReference
  },
})
