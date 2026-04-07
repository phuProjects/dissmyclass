import { ClassCard } from './ClassCard.jsx'
import { classes } from './classes.js'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="site-header__badge" aria-hidden="true">
            GMU
          </span>
          <div>
            <h1 className="site-header__title">DissMyClass</h1>
            <p className="site-header__subtitle">
              George Mason University · anonymous course reviews
            </p>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="section" aria-labelledby="classes-heading">
          <h2 id="classes-heading" className="section__title">
            Classes
          </h2>
          <p className="section__intro">
            Browse courses by name. More filters and reviews will go here next.
          </p>
          <ul className="class-grid" role="list">
            {classes.map((c) => (
              <li
                key={`${c.department}-${c.number}`}
                className="class-grid__item"
              >
                <ClassCard
                  department={c.department}
                  number={c.number}
                  name={c.name}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
