import headerImage from './assests/images/header-image.jpeg';  
import topDish1 from './assests/images/top-dishes-1.jpeg';
import topDish2 from './assests/images/top-dishes-2.jpeg';
import topDish3 from './assests/images/top-dishes-3.jpeg'; 
import topDish4 from './assests/images/top-dishes-4.jpeg';


export default () => {

    const mainContent = document.querySelector('#content');

        const bodyIntro = document.createElement('div');
        bodyIntro.classList.add('body-intro');

            const bodyIntroText = document.createElement('div');
            bodyIntroText.classList.add('body-intro-text');

                const bodyIntroMainText = document.createElement('div');
                bodyIntroMainText.classList.add('body-intro-main-text');
                bodyIntroMainText.innerText = `The UMI: NYC's Japanese Oasis`;

                const bodyIntroSecondaryText = document.createElement('div');
                bodyIntroSecondaryText.classList.add('body-intro-secondary-text');
                bodyIntroSecondaryText.innerText = `Experience the pinnacle of Japanese cuisine at The UMI. Immerse yourself in authentic flavors, unparalleled service, and an atmosphere of luxurious serenity.`;

                const bodyIntroReserveTable = document.createElement('button');
                bodyIntroReserveTable.classList.add('button');
                bodyIntroReserveTable.innerText = `Reserve`;
            
            bodyIntroText.appendChild(bodyIntroMainText);
            bodyIntroText.appendChild(bodyIntroSecondaryText);
            bodyIntroText.appendChild(bodyIntroReserveTable);        

            const bodyImage = document.createElement('img');
            bodyImage.classList.add('body-image');
            bodyImage.src = headerImage;
        
        bodyIntro.appendChild(bodyIntroText);
        bodyIntro.appendChild(bodyImage);

        const bodyContent = document.createElement('div');
        bodyContent.classList.add('body-content');
            
            const bodyContentTitle = document.createElement('div');
            bodyContentTitle.classList.add('body-content-title');
            bodyContentTitle.innerText = `Our Most Loved Dishes!`;

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
            
                const imageItem1 = document.createElement('div');
                imageItem1.classList.add('image-item');

                    const image1 = document.createElement('img');
                    image1.src = topDish1;

                    const text1 = document.createElement('p');
                    text1.classList.add('text-under-image');
                    text1.innerHTML = `Tsuki no Sonata <br> (月のソナタ)`;

                imageItem1.appendChild(image1);
                imageItem1.appendChild(text1);

                const imageItem2 = document.createElement('div');
                imageItem2.classList.add('image-item');

                    const image2 = document.createElement('img');
                    image2.src = topDish2;  

                    const text2 = document.createElement('p');
                    text2.classList.add('text-under-image');
                    text2.innerHTML = `Ryu no Hisame <br> (竜の緋雨)`;

                imageItem2.appendChild(image2);
                imageItem2.appendChild(text2);

                const imageItem3 = document.createElement('div');
                imageItem3.classList.add('image-item');

                    const image3 = document.createElement('img');
                    image3.src = topDish3;  

                    const text3 = document.createElement('p');
                    text3.classList.add('text-under-image');
                    text3.innerHTML = `Taiyō no Maki <br> (太陽の巻)`;

                imageItem3.appendChild(image3);
                imageItem3.appendChild(text3);

                const imageItem4 = document.createElement('div');
                imageItem4.classList.add('image-item');

                    const image4 = document.createElement('img');
                    image4.src = topDish4;      
                    
                    const text4 = document.createElement('p');
                    text4.classList.add('text-under-image');
                    text4.innerHTML = `Yume no Chokoreto <br> (夢のチョコレート)`;

                imageItem4.appendChild(image4);
                imageItem4.appendChild(text4);

            imageContainer.appendChild(imageItem1);
            imageContainer.appendChild(imageItem2);
            imageContainer.appendChild(imageItem3);
            imageContainer.appendChild(imageItem4);

        bodyContent.appendChild(bodyContentTitle);
        bodyContent.appendChild(imageContainer);


        const bodyQuote = document.createElement('div');
        bodyQuote.classList.add('body-quote');
        
            const bodyQuoteText = document.createElement('q');
            bodyQuoteText.classList.add('quote');
            bodyQuoteText.innerText = `At The UMI, each sushi morsel is a brushstroke on a canvas of umami, a symphony of textures conducted by the maestro's hand. It is not indulgence, but an exploration of the ocean's soul, savored with hushed reverence.`;

            const bodyQuoteAuthor = document.createElement('div');
            bodyQuoteAuthor.classList.add('quote-by');
            bodyQuoteAuthor.innerText = `- Jiro Ono`;
        
        bodyQuote.appendChild(bodyQuoteText);
        bodyQuote.appendChild(bodyQuoteAuthor);

        const bodyAction = document.createElement('div');
        bodyAction.classList.add('body-action');

            const actionBoxText = document.createElement('div');
            actionBoxText.classList.add('action-box-text');
            
                const actionBoxMainText = document.createElement('div');
                actionBoxMainText.classList.add('action-box-main-text');
                actionBoxMainText.innerText = `Secret Sushi Haven? Unlock hidden delights.`;
                
                const actionBoxSecondaryText = document.createElement('div');
                actionBoxSecondaryText.classList.add('action-box-secondary-text');
                actionBoxSecondaryText.innerText = `Craving culinary haiku? Join our list for exclusive UMI offers, new creations & event invites. Let the flavors unfold.`;
            
            actionBoxText.appendChild(actionBoxMainText);
            actionBoxText.appendChild(actionBoxSecondaryText);

            const actionBoxButton = document.createElement('button');
            actionBoxButton.classList.add('button');    
            actionBoxButton.innerText = `Subscribe`;

        bodyAction.appendChild(actionBoxText);
        bodyAction.appendChild(actionBoxButton);    

    mainContent.appendChild(bodyIntro);
    mainContent.appendChild(bodyContent);
    mainContent.appendChild(bodyQuote);
    mainContent.appendChild(bodyAction);    
};      