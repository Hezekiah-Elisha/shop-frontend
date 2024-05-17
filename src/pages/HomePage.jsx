import {
  useEffect,
  useState
} from 'react'
import { instance } from '../api'

import Products from "../components/Products";


export default function HomePage() {
  const [categories, setCategories] = useState('')
  useEffect(() => {
    instance.get('/products')
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div className="font-manrope">
      <div className="flex flex-row">
        <Products />
        <div>
        {/* {categories.map(categories => (
          <div key={categories.id}>
            <h1>{categories.category}</h1>
          </div>
        ))} */}
        </div>
      </div>
      <div className="p-10">
        <h2 className="uppercase text-primary-400 font-semibold text-5xl">Women&apos;s Clothing & shoes</h2>
        <p className="text-sm text-primary-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quisquam delectus id fugiat, veniam natus beatae dolores nobis totam quos deserunt vero atque nam iure consequatur error impedit ratione quaerat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis neque consequuntur. Earum ullam ad reprehenderit voluptate cumque porro distinctio sint repellendus officia, quidem, id a labore, debitis placeat. Numquam.
        </p>
      </div>
    </div>
  )
}
