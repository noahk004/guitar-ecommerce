
import Nav from '/src/components/Nav.jsx'
import Footer from '/src/components/Footer.jsx'

import GuitarCarousel from '/src/components/home/GuitarCarousel'
import ShiningHeader from '/src/components/home/ShiningHeader'
import Testimonial from '/src/components/home/Testimonial'

import pfp1 from '/src/assets/pfp1.jpg'
import pfp2 from '/src/assets/pfp2.jpg'
import pfp3 from '/src/assets/pfp3.jpg'

import Button from 'react-bootstrap/Button'

export default function HomePage() {
    return (
        <div>
            <Nav />
            <div className='container'>
                <div className='mb-5 p-5 d-flex gap-5 mt-5'>
                    <div className='w-75 container align-items-center d-flex'>
                        <div className='ms-5 me-5'>
                            <ShiningHeader />
                            <p className='lead' style={{fontSize: '1.5em'}}>Welcome to the ultimate destination for every guitarist! From cutting-edge professional stratocasters to classic vintage models, our carefully curated selection promises unmatched quality and style. Explore our exclusive range of guitars, crafted by the finest luthiers and perfect for musicians at any skill level.</p>
                            <Button href='/shop' className='btn-lg'>Shop now!</Button>
                        
                        </div>
                    </div>
                    <GuitarCarousel className='w-50' />
                </div>

                <div className='m-5 d-flex gap-5'>
                    <Testimonial 
                        name={"Amir Hassan"}
                        review={"The Limited Edition '96 stratocaster exceeded my expectations with its crystal-clear sound and smooth playability. The sleek design and durable build make it a standout choice for both beginners and seasoned players."}
                        image={pfp1}
                    />
                    <Testimonial 
                        name={"Regan Harrison"}
                        review={"I recently purchased myself a Player tele, and I must say, it's a beast when it comes to heavy metal riffs. The dual humbucker pickups offer a rich, deep tone that can really shake the room!"}
                        image={pfp2}
                    />
                    <Testimonial 
                        name={"Cyrus Tate"}
                        review={"The American Professional II stratocaster is a marvel of craftsmanship, offering a balanced tone perfect for jazz and blues. Its comfortable neck and responsive fretboard provide a playing experience that's both effortless and inspiring."}
                        image={pfp3}
                    />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}