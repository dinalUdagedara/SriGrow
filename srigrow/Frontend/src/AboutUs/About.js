// About.js
import React, { useEffect } from 'react';
import "../AboutUs/About.css";
import NavbarComp from '../Components/NavbarComp';
import Footer from '../Components/footer';

import Dinal from '../Images/TeamMembers/Dinal.jpg';
import Chamara from '../Images/TeamMembers/Chamara.jpg';
import Rasmiya from '../Images/TeamMembers/Rasmiya.jpg';
import Dunura from '../Images/TeamMembers/Dunura.jpg';
import Gagan from '../Images/TeamMembers/Gagan.jpg';
import BGImage from '../Images/slider7.jpg';

const About = () => {
    const people = [
        {
            id: 1,
            name: 'Dinal Udagedara',
            description: 'Group 35 SE SDGP Project Leader',
            imageUrl: Dinal
        },
        {
            id: 2,
            name: 'Chamara Rajapaksha',
            description: 'Group Memeber of 35 SE',
            imageUrl: Chamara
        },
        {
            id: 3,
            name: 'Dunura Hansaja',
            description: 'Group Memeber of 35 SE',
            imageUrl: Dunura
        },
        {
            id: 4,
            name: 'Gagan Kalsara',
            description: 'Group Memeber of 35 SE',
            imageUrl: Gagan
        },
        {
            id: 5,
            name: 'Rasmiya Jeyaraj',
            description: 'Group Memeber of 35 SE.',
            imageUrl: Rasmiya
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
            <NavbarComp/>
            <br></br>
            <h2 className='about-heading'>About Us</h2>
            <br></br>
            <div className='transition-details'>
                <p>Agriculture in Sri Lanka is vital, supporting a significant portion of the population and directly impacting the nation's economy. However, the sector faces multifaceted challenges, including erratic weather, soil conditions, and pests, leading to reduced crop yields and financial instability. Trained agricultural officers play a crucial role in assisting farmers, yet they lack real-time data and digital resources, hindering their effectiveness. Our project aims to address these challenges by developing a mobile application tailored for these officers. This app will provide them with the tools needed to deliver timely, localized agricultural advice, ultimately improving the livelihoods of Sri Lankan farmers.</p>
            </div>
            <div>
                <div className='grid grid-rows-2'>
                    <div className='p-5 grid grid-cols-3'>
                        {people.map(person => (
                            <div key={person.id} className='about-card'>
                                <img className='rounded-xl imagePerson' src={person.imageUrl} alt='image' />
                                <div className='card-cont'>
                                    <h5>{person.name}</h5>
                                    <p>{person.description}</p>
                                </div>
                                {/* <div className="bottom-logos">
                                    <img className="facebook-logo" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png"/>
                                    <img className="instagram-logo" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png"/>
                                    <img className="Linding-logo" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png"/>
                                    <img className="Twitter-logo" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" />
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <button className="dark-button" onClick={toggleTheme}>
  <img src="https://cdn1.iconfinder.com/data/icons/tiny-iconz-line-vol-09/20/dark_mode_eclipse_solar-64.png" alt="icon" />
</button> */}
            <Footer/>
        </div>
    );
};

export default About;

