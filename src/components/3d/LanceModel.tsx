import "@google/model-viewer"
import { useState } from "react"
import { ModelInfoDialog } from "./ModelInfo"

// placeholder: remplacer par lance.glb si tu l ajoutes
const lanceSrc = new URL("../../assets/placeholder-cube_green.glb", import.meta.url).href

export function LanceModel() {
  const [info, setInfo] = useState(false)

  return (
    <>
      <model-viewer src={lanceSrc} alt="Lance" camera-controls auto-rotate className="h-full w-full">
        <button
          type="button"
          slot="hotspot-lance"
          data-position="0m 0m 0m"
          data-normal="0m 0m 1m"
          className="h-3 w-3 cursor-pointer rounded-full border-2 border-amber-400 bg-amber-500/90 shadow-md outline-none ring-amber-300/50 hover:scale-125 hover:ring-2"
          aria-label="centre de la lance"
          onClick={(e) => {
            e.stopPropagation()
            setInfo(true)
          }}
        />
      </model-viewer>
      <ModelInfoDialog
        ouvert={info}
        onOpenChange={setInfo}
        titre="La lance grecque"
        description="La lance."
      />
    </>
  )
}
