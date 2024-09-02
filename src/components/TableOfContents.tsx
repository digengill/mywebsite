import { Dispatch, SetStateAction } from 'react'

interface IProps {
    currPage: string
    setPage: Dispatch<SetStateAction<string>>
}

export default function TableOfContents(props: IProps) {
    return (
        <div className="fixed top-4 left-4 text-slate-400 flex flex-col">
            {props.currPage !== 'hero' &&  <button onClick={() => props.setPage('hero')}>Home</button>}
            {props.currPage === 'hero' && <button className='text-lime-200' onClick={() => props.setPage('hero')}>Home</button>}
            {props.currPage !== 'info' &&  <button onClick={() => props.setPage('info')}>Info</button>}
            {props.currPage === 'info' && <button className='text-lime-200' onClick={() => props.setPage('info')}>Info</button>}
            {props.currPage !== 'projects' &&  <button onClick={() => props.setPage('projects')}>Projects</button>}
            {props.currPage === 'projects' && <button className='text-lime-200' onClick={() => props.setPage('projects')}>Projects</button>}
            {props.currPage !== 'contact' &&  <button onClick={() => props.setPage('contact')}>Contact</button>}
            {props.currPage === 'contact' && <button className='text-lime-200' onClick={() => props.setPage('contact')}>Contact</button>}
        </div>
    )
}
