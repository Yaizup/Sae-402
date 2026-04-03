import "@google/model-viewer"

const bouclierSrc = new URL("../../assets/placeholder-cube_green.glb", import.meta.url).href

export function BouclierModel() {
  return (
    <model-viewer
      src={bouclierSrc}
      alt="Bouclier"
      camera-controls
      auto-rotate
      className="h-full w-full"
    />
  )
}
