import type React from "react"

declare module "*.glb" {
  const content: string
  export default content
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        poster?: string
        "camera-controls"?: boolean
        "auto-rotate"?: boolean
      }
    }
  }
}
