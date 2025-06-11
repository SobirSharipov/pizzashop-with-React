
import './App.css'
import Cart1 from '@/component/Carti';
import img1 from '#/img1.png'
import img2 from '#/img2.png'
import img3 from '#/img2 (1).png'
import img4 from '#/img2 (2).png'
import img5 from '#/img1 (2).png'
import img6 from '#/img1 (1).png'
import img7 from '#/img1 (3).png'
import img8 from '#/img1 (4).png'
import img9 from '#/img2 (3).png'
import img10 from '#/Group 60.png'
import img11 from '#/nng.png'
import img12 from '#/img4.png'


function App() {


  return (
    <div className='body'>
      <header>
        <h1>pizzashop</h1>
        <div className='pheader'>
          <p style={{ "color": "#FF6432" }}>Home</p>
          <p>Menu</p>
          <p>Events</p>
          <p>About us</p>
        </div>
        <div>
          <div>
            <button className='btnlog'>Log in</button>
          </div>
          <div className='svg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <div className="svg svg1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </div>

        </div>
      </header>
      <div className='box'>
        <div className='box1'>
          <img src={img5} alt="" className='img5' />
          <h1>The Fastest <br /> Pizza  ⚡  Delivery</h1>
          <p>We will deliver juicy pizza for your family in 30 <br /> minutes, if the courier is late - pizza is free!</p>
          <p>Cooking process:</p>
          <img src={img1} alt="" />
          <div className='divbtn1'>
            <button className='btn1'>To order</button>
            <span style={{ marginLeft: "20px" }}>Pizza-Menu</span>
          </div>
          <img src={img6} alt="" className='img6' />
        </div>
        <div>
          <img src={img3} alt="" className='img3' />
          <img src={img2} alt="" className='img2' />
          <img src={img4} alt="" className='img4' />
        </div>
      </div>
      <div className='Allbtn'>
        <h1>Menu</h1>
        <div className='Allbtn1'>
          <button className='btn11'>Show All</button>
          <button>Meat</button>
          <button>Vegetarian</button>
          <button>Sea products</button>
          <button>Mushroom</button>
        </div>
      </div>
      <div className="AllCart">
        <Cart1 />
        <Cart1 />
        <Cart1 />
        <Cart1 />
      </div>
      <div className='Fon'>
        <h1>MOST POPULAR PIZZA</h1>
      </div>
      <div className="AllCart">
        <Cart1 />
        <Cart1 />
        <Cart1 />
        <Cart1 />
      </div>
      <img src={img7} alt="" className='img7' />
      <div className='miniProduct'>
        <div className='product1'>
          <h1>HOW WE <br /> COOKING</h1>
          <button className='btn1'>More</button>
        </div>
        <div className='product2'>
          <h1>OUR BLOG</h1>
          <button className='btn1'>More</button>
        </div>
        <div className='text1'>
          <h1>Events</h1>
          <p>There are regular events in our pizzeria that will  allow you to eat delicious food for a lower price!</p>
        </div>
      </div>
      <img src={img8} alt="" className='img8' />
      <div className='maxProduct'>
        <div className='product3'>
          <h1>TWO PIZZA <br /> FOR 1 PRICE</h1>
          <button className='btn1'>More</button>
        </div>
        <div className='product4'>
          <h1>KITCHEN <br /> TOUR</h1>
          <button className='btn1'>More</button>
        </div>
      </div>
      <img src={img9} alt="" className='img9' />
      <div className='miniProduct'>
        <div className='product1 pr3'>
          <h1>FREE COFFEE <br /> FOR 3 PIZZA</h1>
          <button className='btn1'>More</button>
        </div>
        <div className='product1 pr4'>
          <h1>OUR <br /> INSTAGRAM</h1>
          <button className='btn1'>More</button>
        </div>
        <div className='product1 pr5'>
          <h1>WHERE ARE <br /> YOU CHOOSE <br /> US?</h1>
          <button className='btn1'>More</button>
        </div>
      </div>
      <div className='box111'>
        <div className='infoProduct'>
          <h1>About us</h1>
          <p>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</p>
          <img src={img5} alt="" className='ing5'/>
          <img src={img10} alt="" className='img10' />
          <p>The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.</p>

        </div>
        <div>
          <img src={img3} alt="" className='img31' />
          <img src={img11} alt="" className='img2' />
          <img src={img4} alt="" className='img41' />
        </div>
      </div>
      <footer>
        <h1>pizzashop</h1>
        <div className='foot'>
          <div>
            <h2>Home</h2> 
            <p>To Order</p> 
            <p>About us</p> 
            <p>Events</p> 
            <p>Menu</p>
          </div>
          <div>
            <h2>Events</h2> 
            <p>3 Pizza 1 Free Coffee</p> 
            <p>2 Pizza for 1 Price</p> 
            <p>Kitchen Tour</p> 
          </div>
          <div>
            <h2>Menu</h2> 
            <p>Show All</p> 
            <p>Seaproducts</p> 
            <p>Vegan</p> 
            <p>Meat</p>
          </div>
          <div>
            <h2>About Us</h2> 
            <p>Our History</p> 
            <p>Why We?</p> 
          </div>
        </div>
      </footer>
      <div className='miniFooter'>
        <p>+7 (937) 333-55-33</p>
        <div>

        <img src={img12} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
