import { Dispatch, SetStateAction } from 'react'

interface IProps {
    currPage: string
    setPage: Dispatch<SetStateAction<string>>
}

export default function TableOfContents(props: IProps) {
    return (
        <div className="fixed top-4 left-4 text-slate-400 flex flex-col">
            {props.currPage != 'hero' &&  <a onClick={() => props.setPage('hero')}>Home</a>}
            {props.currPage == 'hero' && <a className='text-lime-200' onClick={() => props.setPage('hero')}>Home</a>}
            {props.currPage != 'info' &&  <a onClick={() => props.setPage('info')}>Info</a>}
            {props.currPage == 'info' && <a className='text-lime-200' onClick={() => props.setPage('info')}>Info</a>}
            {props.currPage != 'projects' &&  <a onClick={() => props.setPage('projects')}>Projects</a>}
            {props.currPage == 'projects' && <a className='text-lime-200' onClick={() => props.setPage('projects')}>Projects</a>}
            {props.currPage != 'contact' &&  <a onClick={() => props.setPage('contact')}>Contact</a>}
            {props.currPage == 'contact' && <a className='text-lime-200' onClick={() => props.setPage('contact')}>Contact</a>}
        </div>
    )
}
