import { useEffect, useRef, useState } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Map } from "@/components/Map"
import { ModelViewerContainer } from "@/components/ModelViewerContainer"
import { Archive } from "@/components/Archive"
import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import parthenonVideo from "@/assets/parthenon.mp4"
import musiqueFond from "@/assets/music.mp3"

const CHEMINS_OK = new Set(["/", "/carte", "/3d", "/article"])

function ParthApp() {
  const location = useLocation()
  const navigate = useNavigate()
  const [trigVol, setTrigVol] = useState(1)
  const [sonCoupe, setSonCoupe] = useState(false)
  const refAudio = useRef<HTMLAudioElement | null>(null)
  const refCheminAvant = useRef<string | null>(null)

  const p = location.pathname
  const zone =
    p === "/3d" ? ("3d" as const) : p === "/article" ? ("article" as const) : ("carte" as const)
  const estAccueil = p === "/"
  const titreP =
    zone === "3d" ? "Parthénon - 3D" : zone === "article" ? "Parthénon - Article" : "Parthénon - Carte"

  // redirige les urls inconnues
  useEffect(() => {
    if (!CHEMINS_OK.has(p)) navigate("/", { replace: true })
  }, [p, navigate])

  // sync mute sur l element audio
  useEffect(() => {
    const el = refAudio.current
    if (el) el.muted = sonCoupe
  }, [sonCoupe])

  // musique apres clic depuis l accueil (politique autoplay navigateur)
  useEffect(() => {
    const el = refAudio.current
    if (!el) return
    const avant = refCheminAvant.current
    refCheminAvant.current = p
    if (avant === null) return
    if (avant === "/" && p !== "/") {
      el.currentTime = 0
      el.volume = 10 ** (-5 / 20)
      el.muted = sonCoupe
      void el.play().catch(() => {})
    }
    if (p === "/") {
      el.pause()
      el.currentTime = 0
    }
  }, [p, sonCoupe])

  const allerVers = (c: "/carte" | "/3d" | "/article") => {
    if (c === "/carte") setTrigVol((n) => n + 1)
    navigate(c)
  }
  const libelleSon = sonCoupe ? "Remettre le son" : "Couper le son"
  const iconeSon = sonCoupe ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />
  const boutonSon = (className: string) => (
    <Button
      type="button"
      variant="outline"
      className={className}
      onClick={() => setSonCoupe((m) => !m)}
      aria-pressed={sonCoupe}
    >
      {iconeSon}
      {libelleSon}
    </Button>
  )

  return (
    <SidebarProvider>
      <audio ref={refAudio} src={musiqueFond} preload="auto" className="hidden" />
      {!estAccueil && <AppSidebar allerAcropole={() => setTrigVol((n) => n + 1)} />}
      <SidebarInset className="overflow-hidden flex flex-col bg-[url('https://www.transparenttextures.com/patterns/white-marble.png')]">
        {!estAccueil && (
          <header className="flex h-20 shrink-0 items-center justify-between gap-4 border-b-2 border-primary/20 px-8 bg-white/60 backdrop-blur-md z-20 shadow-sm relative">
            <div className="absolute top-0 left-0 right-0 h-1 gold-gradient opacity-80" />
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:text-primary transition-colors h-10 w-10 text-primary/70" />
              <Separator orientation="vertical" className="h-8 bg-primary/20" />
              <h2 className="font-greek text-lg font-bold tracking-[0.2em] text-primary truncate max-w-[300px]">{titreP}</h2>
            </div>
            <div className="flex items-center gap-4">
              {boutonSon("font-greek gap-2 text-xs tracking-widest border-primary/20 hover:bg-primary/5 hover:text-primary rounded-none px-4")}
              {zone !== "carte" && (
                <Button
                  variant="outline"
                  className="font-greek text-xs tracking-widest border-primary/20 hover:bg-primary/5 hover:text-primary transition-all rounded-none px-6"
                  onClick={() => allerVers("/carte")}
                >
                  Retour à l'Acropole
                </Button>
              )}
              {zone === "carte" && (
                <Button
                  variant="outline"
                  className="font-greek text-xs tracking-widest border-primary/20 hover:bg-primary/5 hover:text-primary transition-all rounded-none px-6"
                  onClick={() => setTrigVol((v) => v + 1)}
                >
                  Recentrer sur le Parthénon
                </Button>
              )}
            </div>
          </header>
        )}
        <main className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none border-t border-primary/5 shadow-[inset_0_20px_50px_rgba(184,134,11,0.05)] z-10" />
          {zone === "3d" && <ModelViewerContainer />}
          {zone === "article" && <Archive />}
          {zone === "carte" && <Map trigVol={trigVol} />}

          {estAccueil && (
            <section className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">
              <div className="absolute top-4 right-4 z-20 md:top-6 md:right-6">{boutonSon("gap-2 rounded-none border-white/40 bg-black/40 font-greek text-xs tracking-widest text-white hover:bg-white/15 hover:text-white")}</div>
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={parthenonVideo}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />

              <div className="relative z-10 mx-6 w-full max-w-3xl border border-primary/30 bg-black/30 p-8 text-center backdrop-blur-sm md:p-12">
                <h1 className="font-greek text-2xl font-bold tracking-[0.24em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] text-glow-gold md:text-4xl">
                  PArthenon
                </h1>
                <p className="mt-4 font-marcellus text-sm tracking-wide text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] md:text-base">
                  Choisissez votre parcours: carte de l&apos;Acropole, reliques 3D ou archives historiques.
                </p>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  <Button
                    variant="outline"
                    className="font-greek rounded-none border-primary/60 bg-black/35 px-6 py-6 text-xs tracking-widest text-white hover:bg-primary/30 hover:text-white"
                    onClick={() => allerVers("/carte")}
                  >
                    L&apos;Acropole
                  </Button>
                  <Button
                    variant="outline"
                    className="font-greek rounded-none border-primary/60 bg-black/35 px-6 py-6 text-xs tracking-widest text-white hover:bg-primary/30 hover:text-white"
                    onClick={() => navigate("/3d")}
                  >
                    Reliques 3D
                  </Button>
                  <Button
                    variant="outline"
                    className="font-greek rounded-none border-primary/60 bg-black/35 px-6 py-6 text-xs tracking-widest text-white hover:bg-primary/30 hover:text-white"
                    onClick={() => navigate("/article")}
                  >
                    Archives
                  </Button>
                </div>
              </div>
            </section>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="*" element={<ParthApp />} />
    </Routes>
  )
}

export default App
