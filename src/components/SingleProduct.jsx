import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

SingleProduct.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}


export default function SingleProduct(
    { id, title, price, category, image }
) {
  return (
    <Link to={`/product/${id}`} className='w-full md:w-1/3 lg:w-1/4 flex flex-col bg-slate-50 rounded-lg hover:shadow-lg cursor-pointer'>
        <img src={image} alt="shoe" className='w-full h-40 object-cover bg-slate-200' />
        <div className='p-2 flex flex-row justify-between'>
            <div className=''>
                <h1 className='text-base font-semibold'>{title}</h1>
                <p className='text-sm font-thin'>{category}</p>
            </div>
            <div>
                <span className='text-primary-400 font-semibold'>
                    Kes. {price}
                </span>
            </div>
        </div>
    </Link>
  )
}
