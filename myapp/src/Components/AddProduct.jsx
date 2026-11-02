import {useState}from 'react'
import {useNavigate} from 'react-router-dom'
function AddProduct() {
  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [price,setPrice] = useState("")
  const [quantity,setQuantity] = useState('')


  const handlesubmit = (e)=>{
    e.preventDefault()

    if (localStorage.getItem('admin') !== 'true'){
      alert('Only Admin can add the products')
      navigate('/login')
      return
    }
    const products = JSON.parse(localStorage.getItem('Products')) || []

    const newProduct = {
      product_name : name,
      product_price:price,
      product_quantity:quantity
    }
    products.push(newProduct)
    localStorage.setItem('Products',JSON.stringify(products))
    alert("product added Successfully")
    setName("")
    setPrice("")
    setQuantity("")

  }

  return (
    <div>
        <h1>Add Product</h1>

        <form onSubmit={handlesubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Product Name' />
            <br /><br />
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Product Price' />
            <br /><br />
            <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder='Product Quantity' />
            <br /><br />
            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct