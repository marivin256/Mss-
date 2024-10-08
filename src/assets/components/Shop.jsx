import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
//shoe images
import f1 from "/src/img/products/f1.jpg"
import f2 from "/src/img/products/f2.jpg"
import f3 from "/src/img/products/f3.jpg"
import f4 from "/src/img/products/f4.jpg"
import f5 from "/src/img/products/f5.jpg"
import f6 from "/src/img/products/f6.jpg"
import f7 from "/src/img/products/f7.jpg"
import f8 from "/src/img/products/f8.jpg"
import n1 from "/src/img/products/n1.jpg"
import n2 from "/src/img/products/n2.jpg"
import n3 from "/src/img/products/n3.jpg"
import n4 from "/src/img/products/n4.jpg"
import n5 from "/src/img/products/n5.jpg"
import n6 from "/src/img/products/n6.jpg"
import n7 from "/src/img/products/n7.jpg"
import n8 from "/src/img/products/n8.jpg"

    
    function Porto(){
    
    return(
        <>
        <section id="page-header" className="bg-[url('/src/mss/a5.jpg')]">
    <h2 className='text-black text-4xl font-bold font-serif' >#shop fr<span className='text-red-400'>om h</span>ome</h2>

    <p>Save more Mone<span className='text-red-700'>y</span> when <span className='text-white md:text-black'>you</span> shop with us.</p>
  </section>

 
  <section id="product1" className="section-p1 mr-4">
    <div className="pro-container">
      <div className="pro">
        <img src={f1} alt="" />
        <div className="des">
          <span>Jordan</span>
          <h5>JORDAN 4</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
          </div>
          <h4>140,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={f2} alt="" />
        <div className="des">
          <span>AirForce</span>
          <h5>PRINTED STAR</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4> UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={f3} alt="" />
        <div className="des">
          <span>aIR</span>
          <h5> GREEN AND WHITE </h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>120,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={f4} alt="" />
        <div className="des">
          <span>....</span>
          <h5>FLORAL....</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>95,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={f5} alt="" />
        <div className="des">
          <span>AirForce</span>
          <h5>PLAIN WHITE</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>65,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={f6} alt="" />
        <div className="des">
          <span>AirForce</span>
          <h5>ARMY GREEN & WHITE</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>65,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={f7} alt="" />
        <div className="des">
          <span>Nike</span>
          <h5>.....</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>85,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={f8} alt="" />
        <div className="des">
          <span>....</span>
          <h5>..........</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>69,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={n1} alt="" />
        <div className="des">
          <span>Jordan Nike</span>
          <h5>.....</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>87,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={n2} alt="" />
        <div className="des">
          <span>LC WAIKIKI</span>
          <h5>....</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>40,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={n3} alt="" />
        <div className="des">
          <span>H&M</span>
          <h5>....</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>35,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={n4} alt="" />
        <div className="des">
          <span>Jordan</span>
          <h5>.....</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>140,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={n5} alt="" />
        <div className="des">
          <span>H&M</span>
          <h5>....</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>45,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={n6} alt="" />
        <div className="des">
          <span>Jordan 4</span>
          <h5>ARMY GREEN</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>105,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={n7} alt="" />
        <div className="des">
          <span>LC WIKIKI</span>
          <h5></h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>75,000 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
      <div className="pro">
        <img src={n8} alt="" />
        <div className="des">
          <span>Nike</span>
          <h5>.....</h5>
          <div className="text-yellow-500 flex">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
          <h4>265 UGX</h4>
          <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
        </div>
      </div>
    </div>
  </section>
  
  <section className="section-p1 text-center gap-4 ">
    <NavLink to="#" className="p-2 border border-2 hover:bg-yellow-500 m-2 rounded-lg">1</NavLink>
    <NavLink to="#" className="p-2 border border-2 hover:bg-yellow-500 m-2 rounded-lg">2</NavLink>
    <NavLink to="#" className="p-2 border border-2 hover:bg-yellow-500 m-2 rounded-lg" >3</NavLink>
  </section>
  
 
        </>

    )
}
export default Porto;