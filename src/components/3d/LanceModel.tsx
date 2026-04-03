import "@google/model-viewer"

const lanceSrc = new URL("../../assets/sample-3d_glb.glb", import.meta.url).href

export function LanceModel() {
  return (
    <model-viewer
      src={lanceSrc}
      alt="Lance"
      camera-controls
      auto-rotate
      className="h-full w-full"
    />
  )
}
