import image1 from './assests/images/our-story-1-copy.jpg';
import image2 from './assests/images/our-story-2-copy.jpg';
import image3 from './assests/images/our-story-3-copy.jpg';

export default function() {
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('our-story-wrapper');
    
        const section1 = document.createElement('div');
        section1.classList.add('our-story-section');

            const section1ImgContainer = document.createElement('div');
            section1ImgContainer.classList.add('our-story-img-container');
            
                const section1Img = document.createElement('img');  
                section1Img.src = image1;

            section1ImgContainer.appendChild(section1Img);

            const section1Text = document.createElement('div'); 
            section1Text.classList.add('our-story-text');

                const section1TextTitle = document.createElement('h1'); 
                section1TextTitle.classList.add('our-story-title');
                section1TextTitle.innerText = `Where It All Started`;

                const section1TextContent = document.createElement('p'); 
                section1TextContent.classList.add('our-story-content');
                section1TextContent.innerText = `The journey of The UMI began with a dream rooted in the traditions of Japan. Our founders, Masaru Nakamura, a revered chef with over three decades of experience, and Hiroshi Takeda, a celebrated hospitality expert, sought to create a sanctuary that would bring the authentic flavors and timeless elegance of Japanese cuisine to the bustling heart of New York City. They embarked on this ambitious quest with a profound reverence for their heritage and an unwavering commitment to excellence, determined to share the rich culinary tapestry of Japan with discerning diners far from its shores.`;

            section1Text.appendChild(section1TextTitle);
            section1Text.appendChild(section1TextContent);
        
        section1.appendChild(section1ImgContainer);
        section1.appendChild(section1Text);
            
        const section2 = document.createElement('div');
        section2.classList.add('our-story-section');

            const section2ImgContainer = document.createElement('div');
            section2ImgContainer.classList.add('our-story-img-container');
            
                const section2Img = document.createElement('img');  
                section2Img.src = image2;

            section2ImgContainer.appendChild(section2Img);

            const section2Text = document.createElement('div'); 
            section2Text.classList.add('our-story-text');

                const section2TextTitle = document.createElement('h1'); 
                section2TextTitle.classList.add('our-story-title');
                section2TextTitle.innerText = `Vision & Goal`;
            
                const section2TextContent = document.createElement('p'); 
                section2TextContent.classList.add('our-story-content');
                section2TextContent.innerText = `At The UMI, our vision is to transcend the ordinary and offer an unparalleled dining experience that harmonizes tradition and innovation. We strive to be more than just a restaurant; our goal is to create a haven where the meticulous craftsmanship of Japanese culinary arts is celebrated in every dish. Our executive chef, Kenji Yamada, renowned for his innovative approach to traditional Japanese cuisine, leads a team of masterful chefs who share a passion for perfection. We envision a place where guests are enveloped in an atmosphere of refined luxury, where every detail, from the serene ambiance to the exquisite presentation of our cuisine, reflects our dedication to perfection. Our mission is to transport our guests on a sensory journey, offering them a taste of Japan's culinary excellence right here in New York City.`;
            
            section2Text.appendChild(section2TextTitle);
            section2Text.appendChild(section2TextContent);

        section2.appendChild(section2Text);
        section2.appendChild(section2ImgContainer);

        const section3 = document.createElement('div');
        section3.classList.add('our-story-section');

            const section3ImgContainer = document.createElement('div');
            section3ImgContainer.classList.add('our-story-img-container');
            
                const section3Img = document.createElement('img');  
                section3Img.src = image3;

            section3ImgContainer.appendChild(section3Img);
    
            const section3Text = document.createElement('div'); 
            section3Text.classList.add('our-story-text');
        
                const section3TextTitle = document.createElement('h1'); 
                section3TextTitle.classList.add('our-story-title');
                section3TextTitle.innerText = `The UMI Experience`;
                
                const section3TextContent = document.createElement('p'); 
                section3TextContent.classList.add('our-story-content');
                section3TextContent.innerText = `Since opening our doors, The UMI has become synonymous with excellence and luxury in the New York dining scene. Our achievements are a testament to the passion and artistry of our chefs, who meticulously source the finest ingredients to create culinary masterpieces that captivate the senses. Under the guidance of Masaru Nakamura and Kenji Yamada, we have garnered accolades and a loyal following, establishing ourselves as the premier destination for authentic Japanese cuisine. Our guests are treated to an experience that transcends the act of dining—each visit to The UMI is a celebration of flavors, textures, and aromas that linger in memory. We invite you to indulge in the unparalleled luxury of The UMI, where the spirit of Japan’s culinary excellence is brought to life in the most exquisite manner, right here in New York City.`;

            section3Text.appendChild(section3TextTitle);
            section3Text.appendChild(section3TextContent);

        section3.appendChild(section3ImgContainer);
        section3.appendChild(section3Text);

        wrapper.appendChild(section1);
        wrapper.appendChild(section2);
        wrapper.appendChild(section3);

    document.querySelector('#content').appendChild(wrapper);
}

// Where It All Started

// The journey of The UMI began with a dream rooted in the traditions of Japan. Our founders, Masaru Nakamura, a revered chef with over three decades of experience, and Hiroshi Takeda, a celebrated hospitality expert, sought to create a sanctuary that would bring the authentic flavors and timeless elegance of Japanese cuisine to the bustling heart of New York City. They embarked on this ambitious quest with a profound reverence for their heritage and an unwavering commitment to excellence, determined to share the rich culinary tapestry of Japan with discerning diners far from its shores.

// Vision and Goal

// At The UMI, our vision is to transcend the ordinary and offer an unparalleled dining experience that harmonizes tradition and innovation. We strive to be more than just a restaurant; our goal is to create a haven where the meticulous craftsmanship of Japanese culinary arts is celebrated in every dish. Our executive chef, Kenji Yamada, renowned for his innovative approach to traditional Japanese cuisine, leads a team of masterful chefs who share a passion for perfection. We envision a place where guests are enveloped in an atmosphere of refined luxury, where every detail, from the serene ambiance to the exquisite presentation of our cuisine, reflects our dedication to perfection. Our mission is to transport our guests on a sensory journey, offering them a taste of Japan's culinary excellence right here in New York City.

// What We Have Achieved and What We Make People Experience

// Since opening our doors, The UMI has become synonymous with excellence and luxury in the New York dining scene. Our achievements are a testament to the passion and artistry of our chefs, who meticulously source the finest ingredients to create culinary masterpieces that captivate the senses. Under the guidance of Masaru Nakamura and Kenji Yamada, we have garnered accolades and a loyal following, establishing ourselves as the premier destination for authentic Japanese cuisine. Our guests are treated to an experience that transcends the act of dining—each visit to The UMI is a celebration of flavors, textures, and aromas that linger in memory. We invite you to indulge in the unparalleled luxury of The UMI, where the spirit of Japan’s culinary excellence is brought to life in the most exquisite manner, right here in New York City.








