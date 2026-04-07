import './ClassCard.css'

export function ClassCard({ department, number, name }) {
  const code = `${department} ${number}`
  return (
    <article className="class-card">
      <p className="class-card__dept">{department}</p>
      <h2 className="class-card__code">{code}</h2>
      <p className="class-card__name">{name}</p>
    </article>
  )
}
