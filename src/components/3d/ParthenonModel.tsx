import "@google/model-viewer"

const parthUrl = new URL("../../assets/sae402vgood.glb", import.meta.url).href


export function ParthenonModel() {
  return (
    <model-viewer
      src={parthUrl}
      alt="Parthénon"
      camera-controls
      auto-rotate
      className="h-full w-full"
    />
  )
}
