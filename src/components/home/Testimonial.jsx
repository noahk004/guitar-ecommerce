import Image from 'react-bootstrap/Image'

import star from '/src/assets/star.svg'

function StarIcon() {
    return (
        <Image width='25px' src={star}/>
    )
}

export default function Testimonial({ name, review, image }) {
    return (
        <div>
            <div className='container d-flex gap-4'>
                <Image width='100px' height='100px' src={image} className='mt-3' roundedCircle />
                <div className='container'>
                    <div className='d-flex align-items-center gap-3'>
                        <h4>{name}</h4>
                        <div className='d-flex mb-2'>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>{review}</p>
                </div>
                
            </div>
        </div>
    )
}