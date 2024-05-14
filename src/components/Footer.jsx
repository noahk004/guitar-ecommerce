import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import guitarsInvert from '/src/assets/guitars-invert.png'

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-primary'>
            <div className='container p-5'>
                <div className='d-flex gap-4 mb-2'>
                    <Image src={guitarsInvert}/>
                    <div className='text-light'>
                        <h3 className='display-6' style={{fontSize:'2em'}}>Don't miss out!</h3>
                        <p className='lead'>Be the first to know about our latest products, featured content, and exclusive offers.</p>
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <Form className='d-flex h-50'>
                            <Form.Group>
                                <Form.Control style={{fontSize: '1.1em'}}className='h-100' type="email" placeholder="jhendrix@gmail.com" />
                            </Form.Group>
                        </Form>
                        
                        <Button className='text-light border-light btn-lg h-50' variant='primary' type='submit'>
                            Submit
                        </Button>
                    </div>
                    
                </div>

                <hr className='text-white mb-4' />

                <div className='d-flex justify-content-between'>
                    <div className='text-light me-3'>
                        Copyright @2024. Guitar Store Online Corporation. All Rights Reserved.
                    </div>
                    <div className='d-flex gap-3'>
                        <Link className='text-light' to="/">About Us</Link>
                        <Link className='text-light' to="/">Privacy Portal</Link>
                        <Link className='text-light' to="/">Terms of Use</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}