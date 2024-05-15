import Nav from "/src/components/Nav"
import Footer from '/src/components/Footer'
import BC from '/src/components/BC'

import Image from 'react-bootstrap/Image'

import about1 from '/src/assets/about1.jpg'
import about2 from '/src/assets/about2.jpg'
import about3 from '/src/assets/about3.jpg'
import about4 from '/src/assets/about4.jpg'

export default function AboutPage() {
    const items = [
        {
            name: 'HOME',
            link: '/',
        },
        {
            name: 'ABOUT',
            link: '/about'
        }
    ]
    return (
        <div>
            <Nav />
            <div className='container mt-5 mb-5'>
                <BC items={items}/>
                <div className='ms-3'>
                    <h1 className='display-3 text-primary mb-4'>Our Story</h1>
                    <h6 className='text-muted mb-5'>WRITTEN BY ChatGPT 4o</h6>
                    <Image className='mb-5' src={about1} width='1250' />
                    <div className='lead mb-4' style={{ fontSize: '1.5em' }}>
                    In the summer of 2005, on a quiet street in Bothell, Washington, two childhood friends, Alex and Jamie, embarked on a journey that would eventually become a renowned name in the world of electric guitars. Both had grown up with a shared passion for music, spending countless hours strumming their guitars in Alex's garage, dreaming of a future where their love for music could inspire others.
                    </div>
                    <div className='lead mb-5' style={{ fontSize: '1.5em' }}>The turning point came when Alex, a talented guitarist, faced a common dilemma: finding an electric guitar that not only sounded incredible but also felt like an extension of his own soul. Frustrated by the mass-produced options available, he and Jamie, who had a knack for craftsmanship, decided to create their own guitar. What started as a simple project to build a better instrument soon evolved into a mission to revolutionize the guitar industry.</div>
                    <h2 className='mb-3'>The Birth of the Company</h2>
                    <div className='lead mb-4' style={{ fontSize: '1.5em' }}>After months of trial and error, late-night brainstorming sessions, and countless prototypes, Alex and Jamie finally crafted their first guitar. It was everything they had envisioned—exceptional sound quality, impeccable craftsmanship, and a unique design that stood out from the rest. When they showcased their creation to fellow musicians, the response was overwhelmingly positive. Word spread quickly, and soon, they were receiving requests to build custom guitars.</div>
                    <div className='lead mb-5' style={{ fontSize: '1.5em' }}>Realizing the potential of their newfound venture, Alex and Jamie decided to turn their passion into a full-fledged business. They rented a small workshop in downtown Bothell and officially launched their company, Guitars Online. Their mission was clear: to create electric guitars that resonated with the heart and soul of every musician who played them.</div>
                    <h2 className='mb-3'>Core Values</h2>
                    <div className='lead mb-5' style={{ fontSize: '1.5em' }}>As Guitars Online grew, Alex and Jamie knew they needed to define the core values that would guide their company. These values not only reflected their personal beliefs but also served as a foundation for every decision they made.</div>
                    <div className='d-flex gap-5'>
                        <div>
                            <Image className='mb-5' src={about2} width='400px'/>
                            <h3 className='mb-3'>1. Craftsmanship</h3>
                            <div className='lead mb-5' style={{ fontSize: '1.5em' }}>At Guitars Online, craftsmanship is more than just a skill—it's an art form. Alex and Jamie are dedicated to the meticulous process of handcrafting each guitar, ensuring that every detail is perfect. From selecting the finest woods to precision-engineering each component, their commitment to excellence is unwavering. This dedication to craftsmanship ensures that every guitar that leaves their workshop is a masterpiece, ready to inspire musicians around the world.</div>
                        </div>
                        <div>
                            <Image className='mb-5' src={about3} width='400px'/>
                            <h3 className='mb-3'>2. Innovation</h3>
                            <div className='lead mb-5' style={{ fontSize: '1.5em' }}>Innovation is at the heart of Guitars Online. Alex and Jamie are constantly exploring new materials, technologies, and design concepts to push the boundaries of what an electric guitar can be. They believe that true innovation comes from a willingness to take risks and challenge the status quo. Whether it's incorporating cutting-edge electronics or experimenting with unconventional shapes, their goal is to create instruments that are not only visually stunning but also elevate the playing experience.</div>
                        </div>
                        <div>
                            <Image className='mb-5' src={about4} width='400px'/>
                            <h3 className='mb-3'>3. Community</h3>
                            <div className='lead mb-5' style={{ fontSize: '1.5em' }}>Guitars Online was built on the foundation of a supportive and passionate community. Alex and Jamie understand the power of music to bring people together, and they are committed to fostering a sense of community among musicians. They regularly host workshops, jam sessions, and events where guitar enthusiasts can connect, share their love for music, and learn from one another. By nurturing this community, Guitars Online aims to create a space where creativity and collaboration can flourish.</div>
                        </div>
                    </div>
                    <h2 className='mb-3'>Looking Ahead</h2>
                    <div className='lead mb-3' style={{ fontSize: '1.5em' }}>Today, Guitars Online is a thriving company with a loyal customer base and a reputation for excellence. Alex and Jamie continue to innovate and expand their offerings, always staying true to the core values that have guided them from the beginning. They are proud of the impact their guitars have had on musicians' lives and are excited for the future, where they will continue to inspire and be inspired by the music they help create.</div>

                    <div className='lead mb-5' style={{ fontSize: '1.5em' }}>As Guitars Online looks ahead, Alex and Jamie remain committed to their mission of crafting exceptional instruments that resonate with the soul of every musician. With a dedication to craftsmanship, a passion for innovation, and a strong sense of community, they are poised to make their mark on the music world for generations to come.</div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}