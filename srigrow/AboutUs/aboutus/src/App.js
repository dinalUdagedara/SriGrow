// About.js
import React, { useEffect } from 'react';
import './index.css'; // Import your CSS file

const About = () => {
    const people = [
        {
            id: 1,
            name: 'Thuan',
            description: 'Thuan is an autonomous machine capable of sensing its environment, carrying out computations to make decisions, and performing actions in the real world.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrI3IAJQYJYJdN_PGzTo1qyn6kl8ZaF3a0LDkTsnu5RhYi5z6qXV_Jl64pm2hryrQ3jwE&usqp=CAU'
        },
        {
            id: 2,
            name: 'John Doe',
            description: 'John Doe is a software engineer with a passion for building web applications.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrI3IAJQYJYJdN_PGzTo1qyn6kl8ZaF3a0LDkTsnu5RhYi5z6qXV_Jl64pm2hryrQ3jwE&usqp=CAU'
        },
        {
            id: 3,
            name: 'Jane Doe',
            description: 'Jane Doe is a graphic designer specializing in branding and illustration.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrI3IAJQYJYJdN_PGzTo1qyn6kl8ZaF3a0LDkTsnu5RhYi5z6qXV_Jl64pm2hryrQ3jwE&usqp=CAU'
        },
        {
            id: 4,
            name: 'Alice Smith',
            description: 'Alice Smith is a marketing expert with experience in digital campaigns and social media management.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrI3IAJQYJYJdN_PGzTo1qyn6kl8ZaF3a0LDkTsnu5RhYi5z6qXV_Jl64pm2hryrQ3jwE&usqp=CAU'
        },
        {
            id: 5,
            name: 'Bob Johnson',
            description: 'Bob Johnson is a data scientist who enjoys exploring complex datasets to find valuable insights.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrI3IAJQYJYJdN_PGzTo1qyn6kl8ZaF3a0LDkTsnu5RhYi5z6qXV_Jl64pm2hryrQ3jwE&usqp=CAU'
        }
    ];

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div>
            <h2>About Us</h2>
            <div className='transition-details'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrI3IAJQYJYJdN_PGzTo1qyn6kl8ZaF3a0LDkTsnu5RhYi5z6qXV_Jl64pm2hryrQ3jwE&usqp=CAU' alt='group-process-image' />
                <p>Agriculture in Sri Lanka is vital, supporting a significant portion of the population and directly impacting the nation's economy. However, the sector faces multifaceted challenges, including erratic weather, soil conditions, and pests, leading to reduced crop yields and financial instability. Trained agricultural officers play a crucial role in assisting farmers, yet they lack real-time data and digital resources, hindering their effectiveness. Our project aims to address these challenges by developing a mobile application tailored for these officers. This app will provide them with the tools needed to deliver timely, localized agricultural advice, ultimately improving the livelihoods of Sri Lankan farmers.</p>
            </div>
            <div>
                <div className='grid grid-rows-2'>
                    <div className='p-5 grid grid-cols-3'>
                        {people.map(person => (
                            <div key={person.id} className='card'>
                                <img className='rounded-xl' src={person.imageUrl} alt='image' />
                                <div className='card-content'>
                                    <h5>{person.name}</h5>
                                    <p>{person.description}</p>
                                </div>
                                <div className="bottom-logos">
                                    <img className="facebook-logo" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png"/>
                                    <img className="instagram-logo" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png"/>
                                    <img className="Linding-logo" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png"/>
                                    <img className="Twitter-logo" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className="dark-button" onClick={toggleTheme}>
  <img src="https://cdn1.iconfinder.com/data/icons/tiny-iconz-line-vol-09/20/dark_mode_eclipse_solar-64.png" alt="icon" />
</button>

        </div>
    );
};

export default About;

