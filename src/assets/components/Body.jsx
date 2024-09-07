import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "/src/mss/logo.jpg"
//feature images
import f1 from "/src/img/features/f1.png"
import f2 from "/src/img/features/f2.png"
import f3 from "/src/img/features/f3.png"
import f4 from "/src/img/features/f4.png"
import f5 from "/src/img/features/f5.png"
import f6 from "/src/img/features/f6.png"

//featured products images
import vwb from "/src/mss/vwb.jpg"
import zbb from "/src/mss/zbb.jpg"
import yjg from "/src/mss/yjg.jpg" 
import xoo from "/src/mss/xoo.jpg"
import xnx from "/src/mss/xnx.jpg"
import xbr from "/src/mss/xbr.jpg"
import xnf from "/src/mss/xnf.jpg"
import xbl from "/src/mss/xbl.jpg"

import xbb from "/src/mss/xbb.jpg"
import xaf from "/src/mss/xaf.jpg"
import wbb from "/src/mss/wbb.jpg" 
import sb from "/src/mss/sb.jpg"
import wb from "/src/mss/wb.jpg"
import opp from "/src/mss/opp.jpg"

function Body () {
    return(
        <>
        <section id="hero" className="bg-[url('/src/assets/components/top.jpg')]">
        <h1 className='font-bold text-2xl '>MSS SHOE ENTERPRISE</h1>
        <h2 className='text-green-800 '>Super value deals</h2>
        <h1 className='text-5xl'>On all products</h1>
        <p>Save more the more <span className='text-white'>when you purchase & up to </span><span className='text-red-500'>70% off!</span> </p>
        <NavLink to="/shop"><button className='border border-2 p-2 rounded-lg border-black hover:bg-black hover:text-white'>Shop Now</button></NavLink>
    </section>
    
    <section id="feature" className="section-p1">
        <div className="fe-box">
            <img src={f1} alt=""/>
            <h6>Secure</h6>
        </div>
        <div className="fe-box">
            <img src={f2} alt=""/>
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src={f3} alt=""/>
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src={f4} alt=""/>
            <h6>Promotions</h6>
        </div>
        <div className="fe-box">
            <img src={f5} alt=""/>
            <h6>xHappy Sell</h6>
        </div>
        <div className="fe-box">
            <img src={f6} alt=""/>
            <h6>F24/7 Support</h6>
        </div>
    </section>
    
    <section id="product1" className="section-p1 mr-4">
        <h2 className='text-2xl'>Featured Products</h2>
        <p className="heading">Collection of New Modern Lukizhale Shoe Designs</p>
        <div className="pro-container">
            <div className="pro" >
                <NavLink to="/review"><img src={vwb} alt=""/></NavLink>
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
                <img src={zbb} alt=""/>
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
                <img src={yjg} alt=""/>
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
                <img src={xoo} alt=""/>
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
                <img src={xnx} alt="" />
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
                <img src={xbr} alt=""/>
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
                <img src={xnf} alt=""/>
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
                <img src={xbl} alt=""/>
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
    
    <section id="banner" className="section-m1 bg-[url('/src/img/about/banner2.jpg')]">
        <h4>Loyal Customer Offer</h4>
        <h2>Up to <span>20% off</span> - All Types of shoes</h2>
        <button className="normal rounded-xl">Explore More</button>
    </section>
   
    <section id="product1" className="section-p1 mr-4">
        <h2>New Arrivals</h2>
        <p className="heading "> Collection of New Modern Designs</p>
        <div className="pro-container">
            <div className="pro">
                <img src={xbb} alt=""/>
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
                <img src={xaf} alt=""/>
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
                <img src={wbb} alt=""/>
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
                <img src={sb} alt=""/>
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
                <img src={wb} alt=""/>
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
                <img src={opp} alt=""/>
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
                <img src={vwb} alt=""/>
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
                <img src={xnx} alt=""/>
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

    <footer className="section-p1 bg-blue-100 border border-t-1 border-t-black">
      <div className="col">
        <img src={logo} alt="" className="logo rounded-xl" />
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