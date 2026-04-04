export function ArticleENContent() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-greek text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-4">History of the Parthenon</span>
        <h1 className="font-greek text-5xl font-bold text-primary mb-4 text-glow-gold">The Parthenon</h1>
        <p className="font-greek text-sm text-primary/50 tracking-wider italic mb-6">temple, treasury and symbol of an empire</p>
        <div className="h-0.5 w-24 bg-primary/30" />
      </div>

      <div className="md:columns-2 gap-12 border-t border-primary/10 pt-12">
        <p className="first-letter:text-7xl first-letter:font-greek first-letter:text-primary first-letter:mr-3 first-letter:float-left mb-6 text-lg leading-relaxed text-foreground/90 text-justify">
          In 480 BC, the Persians destroyed the Acropolis. This trauma transformed Athens forever. Refusing to lose, the city of Athens rose from its ashes to build a masterpiece, the Parthenon. Built under Pericles, in the middle of the 5th century.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          But behind these marble walls lies a far less beautiful story.
        </p>

        <h2 className="font-greek text-xl font-semibold text-secondary mt-8 mb-4 tracking-wider underline-offset-8 decoration-primary/30">The Delian League</h2>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          In 454 BC, Pericles transferred the treasure of the Delian League to Athens, originally a defensive alliance that gathered nearly 330 city states at its peak. This move, presented by Pericles as a security measure, was in reality an act of domination. After the transfer, the contributions of its members were no longer a common effort, they became a tax paid to Athens.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          The city states that tried to leave the League, like Thasos or Samos, were crushed and forced to return.
        </p>

        <h2 className="font-greek text-xl font-semibold text-secondary mt-8 mb-4 tracking-wider underline-offset-8 decoration-primary/30">A tool of power</h2>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          This is how the Golden Age of Athens was born. The Parthenon acted as some kind of bank: its back chamber, the opisthodomos, held the empire&apos;s treasury. And the statue of Athena, covered in removable gold plates, served as a reserve for the state to finance its wars. The state would borrow from the goddess and then had to pay her back with interest.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-foreground/80 text-justify">
          The construction site also became a political tool. By paying sculptors, masons and normal workers, Pericles redistributed the empire&apos;s wealth across the population. He even funded the misthos, an allowance that allowed the poorest citizens to actively participate in democracy by leaving work early to take part in the democracy.
        </p>
      </div>

      <footer className="mt-20 pt-8 border-t border-primary/10 text-center">
        <p className="font-marcellus text-sm text-muted-foreground/60">Excerpt from the Archives of Athens</p>
      </footer>
    </>
  )
}
