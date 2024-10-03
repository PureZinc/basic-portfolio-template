import PageModalContainer from "./PageModalContainer";
import { me } from "../../Data";
import { useEffect, useRef } from 'react';

export default function About({isOpenState}) {

    const icons = ["github", "android", "codepen", "dev", "react", "vuejs", "angular", "node", "docker"]

    const Marquee = () => {
        const marqueeContentRef = useRef(null);

        useEffect(() => {
            const marqueeContent = marqueeContentRef.current;

            const elmsDisplayed = 5;
        
            for (let i = 0; i < elmsDisplayed; i++) {
              if (marqueeContent && marqueeContent.children[i]) {
                marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
              }
            }

            document.documentElement.style.setProperty('--marquee-elms', icons.length);
        }, []);

        return (
            <div className="marquee">
                <ul className="marquee-icons" ref={marqueeContentRef}>
                    {icons.map((icon, index) => (
                        <li key={index}><i className={`fab fa-${icon}`}></i></li>
                    ))}
                </ul>
            </div>
        )
    }

  return (
    <PageModalContainer id="about" title="About Me" isOpenState={isOpenState}>
        <div className="main-details">
            <div className="pfp">
                <img src={me.profilePic} alt={me.name} />
            </div>
            <div className="block-text">
                <h2>{me.name}</h2>
                <p>{me.description}</p>
            </div>
        </div>
        <Marquee />
    </PageModalContainer>
  )
}
