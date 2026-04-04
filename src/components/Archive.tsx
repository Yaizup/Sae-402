import { useState } from "react"
import { ArticleFRContent } from "@/articles/articleFR"
import { ArticleENContent } from "@/articles/articleEN"

export function Archive() {
  const [lang, setLang] = useState<"fr" | "en">("fr")

  return (
    <article className="mx-auto h-full max-w-4xl overflow-auto p-12 bg-white/30 backdrop-blur-md shadow-inner border-x border-primary/10">
      <div className="flex justify-end gap-1 mb-2">
        <button onClick={() => setLang("fr")} className={`font-greek text-[11px] uppercase tracking-[0.2em] px-4 py-1.5 border transition-all rounded-none ${lang === "fr" ? "border-primary bg-primary/10 text-primary" : "border-primary/20 text-primary/40 hover:text-primary/70 hover:border-primary/40"}`}>fr</button>
        <button onClick={() => setLang("en")} className={`font-greek text-[11px] uppercase tracking-[0.2em] px-4 py-1.5 border transition-all rounded-none ${lang === "en" ? "border-primary bg-primary/10 text-primary" : "border-primary/20 text-primary/40 hover:text-primary/70 hover:border-primary/40"}`}>en</button>
      </div>

      {lang === "fr" ? <ArticleFRContent /> : <ArticleENContent />}
    </article>
  )
}
