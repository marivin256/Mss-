import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Body () {
    return(
        <>
        <section id="hero" className=''>
        <h1 className='font-bold text-2xl'>MSS SHOE ENTERPRISE</h1>
        <h2 className='text-green-800 '>Super value deals</h2>
        <h1 className='text-5xl'>On all products</h1>
        <p>Save more the more <span className='text-white'>when you purchase & up to </span><span className='text-red-500'>70% off!</span> </p>
        <NavLink to="/shop"><button className='border border-2 p-2 rounded-lg border-black hover:bg-black hover:text-white'>Shop Now</button></NavLink>
    </section>
    
    <section id="feature" className="section-p1">
        <div className="fe-box">
            <img src="src/img/features/f1.png" alt=""/>
            <h6>Secure</h6>
        </div>
        <div className="fe-box">
            <img src="src/img/features/f2.png" alt=""/>
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src="src/img/features/f3.png" alt=""/>
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src="src/img/features/f4.png" alt=""/>
            <h6>Promotions</h6>
        </div>
        <div className="fe-box">
            <img src="src/img/features/f5.png" alt=""/>
            <h6>xHappy Sell</h6>
        </div>
        <div className="fe-box">
            <img src="src/img/features/f6.png" alt=""/>
            <h6>F24/7 Support</h6>
        </div>
    </section>
    
    <section id="product1" className="section-p1">
        <h2 className='text-2xl'>Featured Products</h2>
        <p className="heading">Collection of New Modern Lukizhale Shoe Designs</p>
        <div className="pro-container">
            <div className="pro" >
                <NavLink to="/review"><img src="/src/mss/vwb.jpg" alt=""/></NavLink>
                <div className="des">
                    <span>Versace</span>
                    <h5>Black and White Print</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStarHalf/>
                        
                    </div>
                    <h4>80,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/zbb.jpg" alt=""/>
                <div className="des">
                    <span>Rostory Child</span>
                    <h5>Plain Brown</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStarHalf/>
                    </div>
                    <h4>40,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/yjg.jpg" alt=""/>
                <div className="des">
                    <span>A533</span>
                    <h5>Plain Brown Jungle</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStarHalf/>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>120,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/xoo.jpg" alt=""/>
                <div className="des">
                    <span>Ooiy~</span>
                    <h5>Purple white Green print</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>55,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/xnx.jpg" alt="" />
                <div className="des">
                    <span>Naked Wolfe</span>
                    <h5>Black and Orange</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>75,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/xbr.jpg" alt=""/>
                <div className="des">
                    <span>H&M</span>
                    <h5>Plain Green</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <h4>130,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/xnf.jpg" alt=""/>
                <div className="des">
                    <span>Naked Wolfe</span>
                    <h5>Black and Orange</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>75,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/xbl.jpg" alt=""/>
                <div className="des">
                    <span>BBB</span>
                    <h5>Ocean Blue</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>95,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            </div>
    </section>
    
    <section id="banner" className="section-m1">
        <h4>Loyal Customer Services</h4>
        <h2>Up to <span>70% off</span> - All Types of shoes</h2>
        <button className="normal rounded-xl">Explore More</button>
    </section>
   
    <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p className="heading "> Collection of New Modern Designs</p>
        <div className="pro-container">
            <div className="pro">
                <img src="/src/mss/xbb.jpg" alt=""/>
                <div className="des">
                    <span>AirForce</span>
                    <h5>Plain Black</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        
                    </div>
                    <h4>55,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/xaf.jpg" alt=""/>
                <div className="des">
                    <span>AirForce</span>
                    <h5>Plain white</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        
                    </div>
                    <h4>85,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/wbb.jpg" alt=""/>
                <div className="des">
                    <span>H&M</span>
                    <h5>Black and white stripes</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <h4>5,5000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/sb.jpg" alt=""/>
                <div className="des">
                    <span>SKT</span>
                    <h5>Polo T-Shirt</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>60,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/wb.jpg" alt=""/>
                <div className="des">
                    <span>H&M</span>
                    <h5>Black and White</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <h4>120,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/opp.jpg" alt=""/>
                <div className="des">
                    <span>Push in</span>
                    <h5>Black and REd</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>25,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/vwb.jpg" alt=""/>
                <div className="des">
                    <span>Versace</span>
                    <h5>Black and white</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>80,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
            <div className="pro">
                <img src="/src/mss/xnx.jpg" alt=""/>
                <div className="des">
                    <span>Naked Wolfe</span>
                    <h5>Black and Orange</h5>
                    <div className="star flex">
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <h4>75,000 UGX</h4>
                    <NavLink to="#"><FaShoppingCart className='cart'/></NavLink>
                </div>
            </div>
        </div>
    </section>

    <footer className="section-p1">
      <div className="col">
        <img src="img/logo.svg" alt="" className="logo" />
        <h4>Contact</h4>
        <p><strong>Adress:</strong> Kampala, Uganda.</p>
        <p><strong>Phone:</strong> +256757671763/+256761700498</p>
        <p><strong>Hours:</strong> 08:00am -6:00pm, 24/7</p>
        <h4>Follow US</h4>
        <div className="flex gap-4 text-2xl" >
          
          <FaFacebook/>
          <FaInstagram/>
            <a href="https://wa.me/256757671763"><FaWhatsapp className='text-2xl'/></a> 
          
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="#">Delivery Information</NavLink>
        <NavLink to="#">Privacy Policy</NavLink>
        <NavLink to="#">Terms & Conditions</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      
      
      <div className="copyright">
        <p>&copy; 2024 MSS Shoe Enterprise Uganda.</p>
      </div>
    </footer>
    
    
    
        </>
    )
}
export default Body;