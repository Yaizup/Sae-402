export function Article() {
  return (
    <article className="mx-auto h-full max-w-4xl overflow-auto p-12 bg-white/30 backdrop-blur-md shadow-inner border-x border-primary/10">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-greek text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-4">Chroniques de l'Attique</span>
        <h1 className="font-greek text-5xl font-bold text-primary mb-6 text-glow-gold">Le Parthénon</h1>
        <div className="h-0.5 w-24 bg-primary/30" />
      </div>

      <div className="md:columns-2 gap-12 border-t border-primary/10 pt-12">
        <p className="first-letter:text-7xl first-letter:font-greek first-letter:text-primary first-letter:mr-3 first-letter:float-left mb-6 text-lg leading-relaxed text-foreground/90 text-justify">
          Majestueux édifice dominant l'Acropole d'Athènes, le Parthénon demeure le témoignage le plus éclatant du génie architectural de la Grèce antique. Érigé au ve siècle av. J.-C., il fut conçu pour abriter la statue chryséléphantine d'Athéna Parthénos, protectrice de la cité.
        </p>
        
        <h2 className="font-greek text-xl font-semibold text-secondary mt-8 mb-4 tracking-wider underline-offset-8 decoration-primary/30">L'Éclat de Périclès</h2>
        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          Sous l'impulsion de Périclès et sous la direction artistique de Phidias, les architectes Ictinos et Callicratès ont bâtis ce temple dorique entièrement en marbre du mont Pentélique. Chaque colonne, chaque frise raconte une histoire de dieux et de héros.
        </p>

        <section className="bg-primary/5 p-8 border-l-4 border-primary my-10 backdrop-blur-sm">
           <h3 className="font-greek text-lg font-bold text-primary mb-2 text-glow-gold">Architecture Dorique</h3>
           <p className="text-sm italic text-muted-foreground leading-relaxed">
             Le temple suit les principes de l'ordre dorique avec une précision mathématique, incorporant des corrections optiques subtiles pour donner une illusion de perfection absolue à l'œil humain.
           </p>
        </section>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          Aujourd'hui, malgré les outrages du temps et les conflits, les ruines blanches du Parthénon continuent d'inspirer le monde entier, symbolisant les idéaux de démocratie, de philosophie et d'art qui sont au cœur de la civilisation occidentale.
        </p>
      </div>

      <footer className="mt-20 pt-8 border-t border-primary/10 text-center">
         <p className="font-marcellus text-sm text-muted-foreground/60">
           Extrait des Archives Impériales — Athènes
         </p>
      </footer>
    </article>
  )
}
