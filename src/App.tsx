import { useState } from 'react'
import Hero from './components/Hero'
import Info from './components/Info'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TableOfContents from './components/TableOfContents'

export default function App() {
    const [currPage, setPage] = useState('hero')

    return (
        <div className="flex flex-col bg-slate-800 items-center">
            <TableOfContents currPage={currPage} setPage={setPage} />
            {currPage === 'hero' && <Hero />}
            {currPage === 'info' && <Info />}
            {currPage === 'projects' && <Projects />}
            {currPage === 'contact' && <Contact />}
            <Footer></Footer>
        </div>
    )
}
