import {useState} from 'react';
import Projects from '../components/Projects';
import { categories } from "../Data";

export default function PortfolioSection() {
    const [projectSearch, setProjectSearch] = useState('');
    const [categorySearch, setCategorySearch] = useState('');

    const filterBySearch = () => {
        const searchValue = document.getElementById('search').value;
        setProjectSearch(searchValue);
    }

  return (
    <section className="portfolio">
        <div className="container search-container">
            <label htmlFor="search" className="search-bar">
                <input autoComplete="off" id="search" 
                    className="search-input" type="text" 
                />
                <i className="fas fa-search" onClick={() => filterBySearch()}></i>
            </label>
            <ul className="search-portfolio">
                <li 
                    className={categorySearch === '' ? 'active' : ''} 
                    onClick={() => setCategorySearch('')}
                >
                    All
                </li>
                {categories.map((cat, index) => (
                    <li 
                        key={index} onClick={() => setCategorySearch(cat)}
                        className={categorySearch === cat ? 'active' : ''} 
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
        <Projects searchFilter={projectSearch} categoryFilter={categorySearch} />
    </section>
  )
}
