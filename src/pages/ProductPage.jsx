import {
    useEffect,
    useState
} from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../api'

export default function ProductPage() {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    // convert id to int
    // const id = parseInt(id)
    useEffect(() => {
        instance.get(`/products/${id}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
  return (
    <div className='w-full p-10'>
        <div className='font-manrope flex flex-row justify-between align-middle h-48 items-center gap-2'>
            <img src={product.image} alt='shoe' className='w-1/2 h-full  object-contain bg-slate-200 rounded-md' />
            <div className='w-1/2 h-full'>
                <h1 className='text-3xl font-semibold'>{product.title}</h1>
                <p className='text-lg font-thin'>{product.category}</p>
                <p className='text-lg font-thin'>{product.description}</p>
                <span className='text-primary-400 font-semibold'>
                    Kes. {product.price}
                </span>
            </div>
        </div>
    </div>
  )
}
