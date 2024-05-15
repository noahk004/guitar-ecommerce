import guitar1 from '/src/assets/guitar1.jpg'
import guitar2 from '/src/assets/guitar2.jpg'
import guitar3 from '/src/assets/guitar3.jpg'
import guitar4 from '/src/assets/guitar4.jpg'
import guitar5 from '/src/assets/guitar5.jpg'

import Carousel from 'react-bootstrap/Carousel'

import Image from 'react-bootstrap/Image'

export default function GuitarCarousel() {
    return (
        <Carousel className='w-25' indicators={false} controls={false} interval={4000} fade={true}>
            <Carousel.Item>
                <a href='/shop/0'><Image src={guitar1} fluid/></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='/shop/1'><Image src={guitar2} fluid/></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='/shop/2'><Image src={guitar3} fluid/></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='/shop/3'><Image src={guitar4} fluid/></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='/shop/4'><Image src={guitar5} fluid/></a>
            </Carousel.Item>
        </Carousel>
    )
}