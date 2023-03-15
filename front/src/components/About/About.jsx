import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import github from './github.png';
import linkedin from './linkedin.png';
import portfolio from './maleta.png';

export default function About() {
  return (
    <div className={styles.container}>
      <div>
        <p>
          My name is Hector Martin Rios. I'm a Full Stack Developer.
          <br></br>
          <br></br>
          This application is developed with Javascript, CSS and React.<br></br>
          <br></br>
          It is an application that allows you to obtain information about the
          Rick and morty characters from the Rick and morty public API.
        </p>
        <p>
          Here you can see the links of my Portfolio, Github and Linkedin
          profiles:
        </p>
        <div className={styles.linkGitHub}>
          <a
            href='https://h3cportfolio.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img className={styles.icon} src={portfolio} alt='portfolio' />
          </a>
          <a
            href='https://github.com/RiosHectorM'
            target='_blank'
            rel='noreferrer'
          >
            <img className={styles.icon} src={github} alt='linkedin' />
          </a>
          <a
            href='https://www.linkedin.com/in/rioshectormartin/'
            target='_blank'
            rel='noreferrer'
          >
            <img className={styles.icon} src={linkedin} alt='github' />
          </a>
        </div>
        <Link to={`/home`} style={{ textDecoration: 'none' }}>
          <h3 className={styles.like}>Let's Start!</h3>
        </Link>
      </div>
    </div>
  );
}

// <div className={styles.containerCircles}>
//   <div className={styles.circle}></div>
//   <svg>
//     <filter id="wavy">
//       <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
//         <animate
//           attributeName="baseFrequency"
//           dur="60s"
//           values="0.02;0.005;0.02"
//           repeatCount="indefinite"
//         />
//       </feTurbulence>
//       <feDisplacementMap in="SourceGraphic" scale="30" />
//     </filter>
//   </svg>
// </div>;
