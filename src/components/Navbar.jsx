import { useState } from 'react'
import About from './modals/About';
import Contact from './modals/Contact';
import { website } from '../Data';

export default function Navbar() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
    <nav>
        <div className="nav-header">
            <h3>{website.title}</h3>
        </div>
        <div className="nav-links">
            <ul>
                <li id="about" onClick={() => setAboutOpen(true)}>About</li>
                <li id="contact" onClick={() => setContactOpen(true)}>Contact</li>
            </ul>
        </div>
    </nav>
    <About isOpenState={[aboutOpen, setAboutOpen]} />
    <Contact isOpenState={[contactOpen, setContactOpen]} />
    </>
  )
}
