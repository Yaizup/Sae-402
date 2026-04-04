export function ArticleFRContent() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-greek text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-4">Histoire du parthénon</span>
        <h1 className="font-greek text-5xl font-bold text-primary mb-4 text-glow-gold">Le Parthénon</h1>
        <p className="font-greek text-sm text-primary/50 tracking-wider italic mb-6">temple, coffre-fort et symbole d'un empire</p>
        <div className="h-0.5 w-24 bg-primary/30" />
      </div>

      <div className="md:columns-2 gap-12 border-t border-primary/10 pt-12">
        <p className="first-letter:text-7xl first-letter:font-greek first-letter:text-primary first-letter:mr-3 first-letter:float-left mb-6 text-lg leading-relaxed text-foreground/90 text-justify">
          En 480 avant J-C les Perses ont réduit l'Acropole en cendres. Ce traumatisme va transformer Athènes pour toujours, refusant la défaite, la cité change ses ruines en un chef d'œuvre : le Parthénon, érigé sous les ordres de Périclès, au milieu du Ve siècle.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          Mais derrière ces murs de marbres se cache une histoire bien moins belle.
        </p>

        <h2 className="font-greek text-xl font-semibold text-secondary mt-8 mb-4 tracking-wider underline-offset-8 decoration-primary/30">La Ligue de Délos</h2>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          En 454 av. JC, Périclès transfère le trésor de la Ligue de Délos à Athènes, à l'origine une alliance défensive qui a regroupé près de 330 cités états à son apogée. Ce geste, que Périclès a présenté comme une mesure de sécurité, était en réalité un acte de domination. Après le transfert, les contributions des membres cessent d'être un effort commun et deviennent un impôt de soumission à Athènes.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          Les cités qui tentent de quitter la Ligue, comme Thasos ou Samos, ont été écrasées militairement et forcées à revenir.
        </p>

          <h2 className="font-greek text-xl font-semibold text-secondary mt-8 mb-4 tracking-wider underline-offset-8 decoration-primary/30">Un outil de pouvoir</h2>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          C'est grâce à cela que naît l'Âge d'or d'Athènes, le Parthénon sert de banque : sa chambre arrière, l'opisthodomos contient le trésor de l'empire. Et la statue d'Athéna, faite de plaques d'or amovibles, servait de réserve pour l'état, pour que celui puisse financer les guerres. L'état faisait un prêt à la déesse qu'il devait ensuite rembourser.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          Le chantier devient également un outil politique. En rémunérant sculpteurs, maçons et ouvriers, Périclès redistribue la richesse de l'empire à travers la population. Il finance même le misthos, une allocation qui permettait aux citoyens les plus pauvres de participer activement à la démocratie en leur permettant de quitter le travail plus tôt.
        </p>
      </div>

      <footer className="mt-20 pt-8 border-t border-primary/10 text-center">
        <p className="font-marcellus text-sm text-muted-foreground/60">Extrait des Archives d'Athènes</p>
      </footer>
    </>
  )
}
