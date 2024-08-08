import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function About (){
  return(
    <>
  <section id="page-header" className=" bg-[url('/src/mss/aboutbg.webp')]">
    <h2 className="text-3xl font-bold text-slate-100 md:text-white">ABOUT US</h2>
    

  </section>
 
    <section id="about-head" className="section-p1">
      <img className="rounded-3xl hidden md:block" src="/src/img/about/a6.jpg" alt=""/>
      <div>
        <h2>Who We Are?</h2>
        <p>We are MSS  Enterprises Located Kitebi Kampala,we sell all types of shoes for ladies, gentlemen and children, we also deal in outfits and technology
           staff such as airpodes and powerbanks. </p>
       
        <marquee bgcolor="" loop="-1" scrollamount="5" width="100%">We offer the best fashion Products and services at affordable prices.</marquee>
      </div>
    </section>
    
    <section id="about-app" className="section-p1">
      <h1>Download Our <NavLink to="#">App</NavLink></h1>
      <div className="h-[700px]  bg-[url('/src/mss/leo.jpeg')] rounded-2xl ">
        <h1 className="relative top-80 text-white">Oops, coming soon!</h1>
      </div>
    </section>
   
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src="src/img/features/f1.png" alt=""/>
        <h6>Borderless</h6>
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
        
        <NavLink to="#">About Us</NavLink>
        <NavLink to="#">Delivery Information</NavLink>
        <NavLink to="#">Privacy Policy</NavLink>
        <NavLink to="#">Terms & Conditions</NavLink>
        <NavLink to="#">Contact Us</NavLink>
      </div>
      
      
      <div className="copyright">
        <p>&copy; 2024 MSS Shoe Enterprise Uganda.</p>
      </div>
    </footer>
    
    
    </>

  )
}
export default About;