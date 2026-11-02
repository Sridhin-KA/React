import { useState,useEffect } from "react"
function AdminViewProduct(){
    const [product,setProduct] = useState([])

    useEffect(()=>{
        const allproducts = JSON.parse(localStorage.getItem("Products")) ||[]
        console.log(allproducts);
        
        setProduct(allproducts)
    },[])
    const deleteproduct = (productname)=>{
        
        const new_array = product.filter((item)=> item.product_name !== productname)
        setProduct(new_array)
        localStorage.setItem("Products",JSON.stringify(new_array))
    }
    return(
        <div>
            <h1>All Products</h1>
            {
                product.map((item)=>(
                    <div key={item.product_name}>
                        <h3>{item.product_name }</h3>
                        <p>Price:{item.product_price}</p>
                       <button onClick={()=>deleteproduct(item.product_name)} >Delete</button>
                    </div>

                ))
            }
        </div>
    )
}
export default AdminViewProduct