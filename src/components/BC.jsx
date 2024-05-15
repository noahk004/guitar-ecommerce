import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function BC({ items }) {
    let itemsLen = items.length
    return (
        <Breadcrumb className='mt-5'>
            {items.map((e, index) => {
                let active = false
                if (index === itemsLen-1) {
                    active = true;
                }
                return <Breadcrumb.Item key={index} active={active} href={e['link']}>{e['name']}</Breadcrumb.Item>
            })}
        </Breadcrumb>
    )
}