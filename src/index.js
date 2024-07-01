import homePage  from './home.js';
import './normalize.css';
import './style.css';
import headerLogo from './assests/images/logo.png';
import { menuPage } from './menu.js';

const current = () => {

    const subPagesBody = document.querySelector('#content'); 

    const header = document.createElement('div');
    header.classList.add('header');

        const headerImg = document.createElement('img');
        headerImg.classList.add('header-logo');
        headerImg.src = headerLogo;
        
        const headerLinks = document.createElement('div');
        headerLinks.classList.add('header-links');

            const headerLinksHome = document.createElement('button');
            headerLinksHome.classList.add('home');
            headerLinksHome.innerText = `Home`;

            const headerLinksMenu = document.createElement('button');
            headerLinksMenu.classList.add('menu');
            headerLinksMenu.innerText = `Menu`;

            const headerLinksOurStory = document.createElement('button');
            headerLinksOurStory.classList.add('our-story');
            headerLinksOurStory.innerText = `Our Story`;
        
        headerLinks.appendChild(headerLinksHome);
        headerLinks.appendChild(headerLinksMenu);
        headerLinks.appendChild(headerLinksOurStory);

    header.appendChild(headerImg);
    header.appendChild(headerLinks);

    document.querySelector('#header').appendChild(header); 

    headerLinksHome.addEventListener('click', () => {
        subPagesBody.innerHTML = '';    
        homePage();
    });

    headerLinksMenu.addEventListener('click', () => {
        subPagesBody.innerHTML = '';
        menuPage();
    });

    // headerLinksOurStory.addEventListener('click', () => {
    //     ourStoryPage();
    // });
}

current();
homePage();