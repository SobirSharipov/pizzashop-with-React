
import './cart.css'
import img3 from '#/img3.png'

const Cart1 = () => {
  return (
    <div className="cart1">
      <img src={img3} alt="" className='igm3' />
      <h2>Italian</h2>
      <p style={{color:"grey"}}>Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>
      <div className='divradius'>
        <div>22</div>
        <div className='div28'>28</div>
        <div>33</div>
      </div>
      <button className='bn1'>+ Ingridients</button>
      <div className='Sum'>
        <h2>8,35 $</h2>
        <div>
          <button className='btnmin'>-</button>
          <span>1</span>
          <button className='btnpl'>+</button>
        </div>
      </div>
      <button className='Order'>Order Now</button>
    </div>
  )
}
export default Cart1;