/// <reference types="vite/client" />

// Augment File interface to include $path property from webkitRelativePath
// Used by BFormFile in directory mode
declare global {
  interface File {
    /**
     * Directory path of the file (derived from webkitRelativePath)
     * Only available when selecting files in directory mode
     */
    $path?: string
  }
}

export {}
