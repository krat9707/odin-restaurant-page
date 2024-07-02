import './normalize.css';
import './style.css';
import headerLogo from './assests/images/logo.png';

const event = new MouseEvent('click', {
    bubbles: true,  
    cancelable: true,
    view: window  
});


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
            headerLinksHome.classList.add('home', 'button', 'active');
            headerLinksHome.innerText = `Home`;

            const headerLinksMenu = document.createElement('button');
            headerLinksMenu.classList.add('menu', 'button');
            headerLinksMenu.innerText = `Menu`;

            const headerLinksOurStory = document.createElement('button');
            headerLinksOurStory.classList.add('our-story', 'button');
            headerLinksOurStory.innerText = `Our Story`;
        
        headerLinks.appendChild(headerLinksHome);
        headerLinks.appendChild(headerLinksMenu);
        headerLinks.appendChild(headerLinksOurStory);

    header.appendChild(headerImg);
    header.appendChild(headerLinks);

    document.querySelector('#header').appendChild(header); 
    
    headerLinksHome.addEventListener('click', (e) => {
        const active = document.querySelector('.active');
        active.classList.remove('active');  

        e.target.classList.add('active');

        import('./home.js').then(home => {
            subPagesBody.innerHTML = '';
            home.default();
        });

    });

    headerLinksMenu.addEventListener('click', (e) => {
        const active = document.querySelector('.active');
        active.classList.remove('active');  
        
        e.target.classList.add('active');

        import('./menu.js').then(menu => {
            subPagesBody.innerHTML = '';
            menu.menuPage();
        });

    });

    headerLinksOurStory.addEventListener('click', (e) => {
        const active = document.querySelector('.active');
        active.classList.remove('active');  
        
        e.target.classList.add('active');

        import('./our-story.js').then(ourStory => {
            subPagesBody.innerHTML = '';
            ourStory.default();
        });
    });

    headerLinksMenu.dispatchEvent(event);
}

current();


