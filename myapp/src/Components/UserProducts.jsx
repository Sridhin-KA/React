import {useEffect,useState} from 'react'

function UserProducts() {

    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{

        const allproducts = JSON.parse(localStorage.getItem('Products')) || []

        const savedcart = JSON.parse(localStorage.getItem('Cart')) || []

        setProducts(allproducts)

        setCart(savedcart)
    },[])

    const addtocart = (item) =>{
        const savedcart = JSON.parse(localStorage.getItem('Cart')) || []

        const user = JSON.parse(localStorage.getItem('loggedUser'))
        console.log(user);
        
        const existing = savedcart.find((p)=>p.product_name === item.product_name && p.user_email === user.Email)

        let updated;

       if (existing){
        updated = savedcart.map((p)=>
            p.product_name === item.product_name && p.user_email === user.Email
            ? {...p,quantity:p.quantity+1}:
            p
        )
       }
       else{
        updated = [
            ...savedcart,{
                ...item,
                quantity:1,
                user_email:user.Email,
                user_name:user.Name
            }
        ]
       }
        setCart(updated)
        localStorage.setItem('Cart',JSON.stringify(updated))
        alert('Product Added to Cart')
    }
  return (
    <div>
        <h2>All Products</h2>

        {
        products.map((item)=>(
             <div key={item.product_name}>
                        <h3>{item.product_name }</h3>
                        <p>Price:{item.product_price}</p>
                       <button onClick={()=>addtocart(item)} >Add to Cart</button>
             </div>
        ))
        
        }
    </div>
  )
}

export default UserProducts