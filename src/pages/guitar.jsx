import Nav from '/src/components/Nav'
import Footer from '/src/components/Footer'
import BC from '/src/components/BC'

import guitar1 from '/src/assets/guitar1.jpg'
import guitar2 from '/src/assets/guitar2.jpg'
import guitar3 from '/src/assets/guitar3.jpg'
import guitar4 from '/src/assets/guitar4.jpg'
import guitar5 from '/src/assets/guitar5.jpg'
import guitar6 from '/src/assets/guitar6.jpg'
import guitar7 from '/src/assets/guitar7.jpg'
import guitar8 from '/src/assets/guitar8.jpg'
import guitar9 from '/src/assets/guitar9.jpg'

import box from '/src/assets/box.svg'

import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import { useParams, useNavigate } from 'react-router-dom'

const Stock = [
    {
        name: "Yngwie Malmsteen Stratocaster",
        price: 2349.99,
        img: guitar1,
        description: "Still the foremost and most formidable practitioner of the genre, Yngwie Malmsteem practically invented neo-classical shred singlehandedly. The guitar he has always done it with is a Stratocaster, and for those who aspire to Malmsteen's flamboyantly fleet-fingered style, the Yngwie Malmsteen Stratocaster is modeled after the Swedish metal virtuoso's favorite Strat®, right down to its special pickups and scalloped fingerboard. A distinctively designed model for one of the world's most distinctive Strat masters.",
        features: [
            'Machine screw-mount maple neck with modern "C" profile and "bullet" truss rod',
            '9.5"-radius scalloped maple or rosewood fingerboard with brass nut and 21 "super jumbo" frets',
            'Three Seymour Duncan® YJM Fury™ pickups with three-way switching',
            '"No-load" tone control for bridge and middle pickups',
            'Aged plastic control knobs, switch tip and pickup covers',
            'Vintage-style synchronized tremolo bridge',
        ]
    },
    {
        name: "Player Plus Stratocaster",
        price: 999.99,
        img: guitar2,
        description: "Fusing classic Fender® design with player-centric features and exciting new finishes, the Player Plus Stratocaster® delivers superb playability and unmistakable style.\nAt the heart of this Strat® is a trio of Player Plus Noiseless™ pickups - bright and touch sensitive, they offer classic Strat tone without hum. A push-pull pot on the tone control adds the neck pickup to switch positions 1 and 2 for two sounds not usually found on a Strat®. The silky satin Modern \"C\" Player Plus Strat® neck fits your hand like a glove, with smooth rolled edges for supreme comfort. The 12\" radius fingerboard and 22 medium jumbo frets facilitate fluid leads and choke free bends. Smooth and responsive, the 2-point tremolo provides classic vibrato effects, while the locking tuners provide rock-solid tuning and make string changes quick and easy.\nWith classic Fender style, advanced features and stunning new finishes, the Player Plus Stratocaster is the perfect tool to spark your creativity and stand out from the crowd.",
        features: [
            'Player Plus Noiseless Stratocaster pickups',
            '12" radius fingerboard with rolled edges',
            '2-point Tremolo with block steel saddles',
            'Push-pull tone control adds neck to switch positions 1&2',
            'Locking tuning machines',
        ]
    },
    {
        name: "Player Telecaster",
        price: 799.99,
        img: guitar3,
        description: "Bold, innovative and rugged, the Player Telecaster is pure Fender, through and through. The feel, the style and, most importantly, the sound - they're all there, waiting for you to make them whisper or wail for your music. Versatile enough to handle almost anything you can create and durable enough to survive any gig, this workhorse is a trusty sidekick for your musical vision.",
        features: [
            'Alder body with gloss finish',
            'Two Player Series single-coil Telecaster pickups',
            '"Modern C"-shaped neck profile',
            '9.5"-radius fingerboard',
            'String-through-body bridge with block steel saddles',
        ]
    },
    {
        name: "Player Stratocaster Floyd Rose HSS",
        price: 929.99,
        img: guitar4,
        description: "The inspiring sound of a Stratocaster is one of the foundations of Fender. Featuring this classic sound - bell-like high end, punchy mids and robust low end, combined with crystal-clear articulation - the smooth-playing Player Stratocaster HSS Floyd Rose is packed with authentic Fender feel and style. It's ready to serve your musical vision, it's versatile enough to handle any style of music and it's the perfect platform for creating your own sound.",
        features: [
            'Alder body with gloss finish',
            'One Player Series humbucking bridge pickup; two Player Series single-coil Stratocaster middle and neck pickups',
            '"Modern C"-shaped neck profile',
            '12"-radius fingerboard',
            'Floyd Rose double-locking tremolo system',
        ]
    },
    {
        name: "Aerodyne Special Stratocaster",
        price: 999.99,
        img: guitar5,
        description: "The Aerodyne Special Series offers a contemporary take on classic Fender® designs. Distinctive aerodynamic lines, custom voiced pickups, state-of-the-art hardware, dazzling finishes and unmistakable silhouettes combine to create instruments that are pure, purposeful, instantly familiar and radically new.\nThe Aerodyne Special Stratocaster® features a sleek new look with vibrant colors adorning the elegantly bound basswood body and the matching headcap. A modern \"C\" shape satin finished neck with 12\" radius fingerboard ensures effortless playability, while newly designed vintage-voiced Stratocaster pickups and a Babicz® Z-Series FCH-2 Point Tremolo deliver a perfect balance of high-performance and classic Fender tone.\nThe made-in-Japan Aerodyne Special Stratocaster® inspires with futuristic style, premium appointments and exceptional tone. The bold and original designs that inspired generations live on in the Aerodyne Special series.",
        features: [
            'Slim Aerodyne basswood body with bound carved top',
            'Maple neck with 12" radius maple or rosewood fingerboard',
            'Matching painted headcap',
            'Aerodyne Special pickups',
            'Babicz® FCH bridge',
            'Locking tuners',
        ]
    },
    {
        name: "American Professional II Stratocaster HSS",
        price: 1849.99,
        img: guitar6,
        description: 'The American Professional II Stratocaster® HSS draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today\'s working player.\nOur popular Deep "C" neck now sports smooth rolled fingerboard edges, a "Super-Natural" satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Stratocaster single-coil pickups are more articulate than ever while retaining bell-like chime and warmth, while the Double Tap™ bridge pickup delivers punchy humbucking tones as well as calibrated single-coil sounds at the push of a button. An upgraded 2-point tremolo with a cold-rolled steel block increases sustain, clarity and high-end sparkle.\nThe American Pro II Stratocaster HSS delivers instant familiarity and sonic versatility you\'ll feel and hear right away, with broad ranging improvements that add up to nothing less than a new standard for professional instruments.',
        features: [
            'Two V-Mod II single-coil Stratocaster pickups',
            'Double Tap™ Humbucking Bridge Pickup',
            'Upgraded 2-Point Tremolo with Cold-Rolled Steel Block',
            'Deep "C"-shaped neck profile with rolled fingerboard edges',
            'Bone nut; 22 narrow-tall frets for easy bending',
            'Treble bleed circuit maintains highs when reducing volume',
            'Includes Deluxe Molded hardshell case',
        ]
    },
    {
        name: "American Ultra Stratocaster HSS",
        price: 2249.99,
        img: guitar7,
        description: "American Ultra is our most advanced series of guitars and basses for discerning players who demand the ultimate in precision, performance and tone. The American Ultra Stratocaster HSS features a unique \"Modern D\" neck profile with Ultra rolled fingerboard edges for hours of playing comfort, and the tapered neck heel allows easy access to the highest register. A speedy 10\"-14\" compound-radius fingerboard with 22 medium-jumbo frets means effortless and accurate soloing, while the Ultra Noiseless™ Hot single-coil pickups and Ultra Double Tap™ humbucking pickup, along with advanced wiring options, provide endless tonal possibilities - without hum. The sculpted rear body contours are as beautiful as they are functional. This versatile, state-of-the-art instrument will inspire you to push your playing to new heights.",
        features: [
            'Alder body with sculpted rear contours',
            'One Ultra Double Tap™ humbucking bridge pickup; two Ultra Noiseless Hot Strat single-coil pickups (middle and neck)',
            '"Modern D"-shaped neck with Ultra satin finish',
            '10"-14" compound-radius fingerboard; 22 medium-jumbo frets',
            'Includes premium molded hardshell case',
        ]
    },
    {
        name: "Tash Sultana Stratocaster",
        price: 1349.99,
        img: guitar8,
        description: "Tash Sultana's explosive loop-based performances, gorgeous layered guitar parts and jubilant leads rocketed the Melbourne artist from street busking to sold out shows - with a Fender in hand from the beginning.\nFinished in vibrant Transparent Cherry and furnished with all-gold hardware, the Tash Sultana Stratocaster® has good looks to match its upscale appointments - the clarity and sparkle of Yosemite single-coil Strat pickups combine with the powerful Double Tap™ humbucking bridge pickup to deliver a wide range of tonal options at your fingertips. The Modern \"C\"-shape maple neck with 9.5\" radius and 22 medium jumbo frets provides comfortable modern playability, while the vintage-style synchronized tremolo offers classic Strat vibrato action.\nOther features include a matching painted headstock and custom \"skull\" neck plate. Includes Gig Bag.",
        features: [
            'Alder body with Transparent Cherry finish, matching painted headstock',
            'Modern "C"-shaped maple neck with 9.5" Radius and 22 medium jumbo frets',
            'Push-pull tone pot activates Double Tap™ function',
            'Two Yosemite single-coil Stratocaster pickups; Double Tap™ humbucking bridge pickup',
            'Vintage-style six-point synchronized tremolo',
        ]
    },
    {
        name: "American Vintage II 1975 Telecaster Deluxe",
        price: 2499.99,
        img: guitar9,
        description: "The Fender® American Vintage II series presents a remarkably accurate take on the revolutionary designs that altered the course of musical history. Built with period-accurate bodies, necks and hardware, premium finishes and meticulously voiced, year-specific pickups, each instrument captures the essence of authentic Fender craftsmanship and tone.\nInitially introduced in 1972 and billed as the top model in the Telecaster® family, The Telecaster Deluxe holds the distinction of being Fender's first solid-body Telecaster with two humbucking pickups. Like the original, the American Vintage II 1975 Telecaster Deluxe sports a large Stratocaster®-style headstock, comfort-contoured belly cut, and pair of Wide Range humbucking pickups mounted to an elongated pickguard with dual volume and tone controls and a 3-way toggle located on the upper bout. To create authentic Wide-Range humbucking pickups, we resurrected CuNiFe magnets, which had been out of production since 1981, an essential element in recreating the sonics of the original.\nFeaturing a '75 \"C\"-shape hard rock maple neck, the American Vintage II 1975 Telecaster Deluxe plays like a dream with a 9.5\" radius maple fingerboard and medium jumbo frets. Characteristic of production in 1975, this Telecaster is outfitted with a convenient \"Bullet\" style truss rod nut, three-bolt neck plate with Micro-Tilt™ mechanism and offered in Black, Mocha Brown, or 3-Color Sunburst over an alder body. Other features include a 6-Saddle hardtail bridge with stainless steel block saddles and vintage-accurate Tele® Deluxe tuners.\nThe instruments in the American Vintage II series are direct descendants of the original Fenders: designed for players with a fine appreciation for vintage Fender tone and feel and built with unmatched quality, down to the last screw. These are Fender electrics in their purest form: Fender American Vintage II, the stuff of legends.",
        features: [
            'Alder Body',
            'Gloss Polyurethane Finish',
            'Authentic CuNiFe Wide-Range Humbucking Pickups',
            '"C"-Shaped Neck Profile',
            'Pure Vintage 6-Saddle String-Through Body Hardtail with Stainless Steel Block Saddles',
            'Pure Vintage Tele® Deluxe Tuners',
        ]
    }
]



export default function GuitarPage({ cart, editCart }) {

    const navigate = useNavigate()
    let { index } = useParams();
    let g = [guitar1, guitar2, guitar3, guitar4, guitar5, guitar6, guitar7, guitar8, guitar9]

    let items = [
        {
            name: 'HOME',
            link: '/'
        },
        {
            name: 'SHOP',
            link: '/shop'
        },
        {
            name: Stock[index]['name'].toUpperCase(),
            link: `/shop/${index}`
        }
    ]

    function onAddItem() {
        editCart(index, 1)()
        navigate('/shop/cart')
    }

    return (
        <div>
            <Nav />
            <div className='container mb-5'>
                <BC items={items}/>

                <div className='d-flex gap-5 m-5 justify-content-center'>
                    <Image width='200px' src={g[index]} className='me-5 mt-3 mb-5'/>
                    <div className='w-50 ms-5 mt-3 '>
                        <h1 className='mb-3'>{Stock[index]['name']}</h1>
                        <h2 className='mb-4'>${Stock[index]['price']}</h2>
                        
                        <div className='d-flex gap-3 mb-4 align-items-center'>
                            <Image width='30px' src={box} />
                            <div>
                                <p className='mb-0 mt-0'><strong>IN STOCK</strong></p>
                                <p className='mb-0 mt-0'>Available To Ship</p>
                            </div>
                        </div>

                        <div className='d-grid gap-3'>
                            <Button onClick={onAddItem} size='lg'>Add to Cart</Button>
                            <Button href='/shop/cart' size='lg' variant='outline-primary'>View Cart</Button>
                        </div>
                    </div>
                </div>
                <div className='mb-5 mt-5'>
                    <h2 className='mt-5 mb-2'>Description</h2>
                    <div className='lead mb-4'>{Stock[index]['description']}</div>
                    <h2 className='mb-2' >Features</h2>
                    <div className='lead mb-5'>{Stock[index]['features'].map((e) => {
                        return <li>{e}</li>
                    })}</div>

                </div>

            </div>
            <Footer />
        </div>
    )
}