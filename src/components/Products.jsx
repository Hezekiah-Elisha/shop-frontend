import {
  useState, useEffect
} from 'react'
import SingleProduct from './SingleProduct'
import { instance } from '../api'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    instance.get('/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className='font-manrope flex flex-row flex-wrap w-full gap-3 p-10 items-center justify-center'>
      {products.map(product => (
        <SingleProduct
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          image={product.image}
          desciption={product.description}
        />
      ))}

    </div>
  )
}
