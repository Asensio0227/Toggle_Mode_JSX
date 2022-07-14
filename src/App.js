import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import data from './components/data';

const getlocalStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
}

const App = () => {
  const [theme, setTheme] = useState(getlocalStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    // console.log(document.documentElement);
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  },[theme])

  return (
    <>
      <Navbar />
      <main>
        <nav className="navbar">
          <div className="nav-centers">
            <h1>overreacted</h1>
            <button className="nav-toggle" onClick={toggleTheme}>
              toggle
            </button>
          </div>
        </nav>
        <section className="section">
          {data.map((article) => {
            console.log(article)
            return <Articles key={article.id} {...article}/>
          })}
        </section>
      </main>
    </>
  )
}

export default App
