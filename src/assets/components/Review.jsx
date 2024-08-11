import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa'
//images
import vwb from "/src/mss/vwb.jpg"
import vbk from "/src/mss/vbk.jpg"
import vbg from "/src/mss/vbg.jpg"
import vb from "/src/mss/vbb.jpg"

import alr from "/src/img/products/alr.jpg"
import jb from "/src/img/products/jb.jpg"
import jw from "/src/img/products/jw.jpg"
import jy from "/src/img/products/jy.jpg"

function Review (){
useEffect(()=>{
    var MainImg = document.getElementById("MainImg");
    var smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function () {
      MainImg.src = smallimg[0].src;
    };
    smallimg[1].onclick = function () {
      MainImg.src = smallimg[1].src;
    };

    smallimg[2].onclick = function () {
      MainImg.src = smallimg[2].src;
    };

    smallimg[3].onclick = function () {
      MainImg.src = smallimg[3].src;
    };
});
    return(
        <>
        <section id="prodetails" className="section-p1">
    <div className="single-pro-image">
      <img src={vwb} width="100%" id="MainImg" alt="" className="mb-2" />

      <div className="small-img-group ">
        <div className="small-img-col border border-2 p-1 rounded-lg">
          <img src={vwb} width="100%" className="small-img rounded-lg" alt="" />
        </div>
        <div className="small-img-col border border-2 p-1 rounded-lg">
          <img src={vbk} width="100%" className="small-img rounded-lg" alt="" />
        </div>
        <div className="small-img-col border border-2 p-1 rounded-lg">
          <img  src={vbg} width="100%" className="small-img rounded-lg" alt="" />
        </div>
        <div className="small-img-col border border-2 p-1 rounded-lg">
          <img  src={vb} width="100%" className="small-img rounded-lg" alt="" />
        </div>
      </div>
    </div>

    <div className="single-pro-details">
      <h6>Versace</h6>
      <h4>Men's Versace</h4>
      <h2>80,000 UGX</h2>
      <h2>Select Size</h2>
      <select>
        
        <option>40</option>
        <option>41</option>
        <option>42</option>
        <option>42</option>
        <option>43</option>
        <option>44</option>
        <option>45</option>
      </select>
      <input type="number" value="1" />
      <button className="normal rounded-xl ">Add To cart</button>
      <h4>Product Details</h4>
      <span>
        Versace in colors,plain black ,black and white and green and black</span>
    </div>
  </section>

  <section id="product1" className="section-p1">
    <h2>Featured Products</h2>
    <p className="heading"> Collection of New Modern Design</p>
    <div className="pro-container">
      <div className="pro">
        <img src={alr} alt="" />
        <div className="des">
          <span>ALR</span>
          <h5>Regular </h5>
          <div className="star flex">

          <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
        
           
          </div>
          <h4>47,000 UGX</h4>
          <NavLink  to="/#"><FaShoppingCart className="cart"/></NavLink>
        </div>
      </div>
      <div class="pro">
        <img src={jb} alt="" />
        <div class="des">
          <span>JORDAN 9 BLACK</span>
          <h5>Classic </h5>
          <div class="star flex">
          <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
          </div>
          <h4>150,000 UGX</h4>
          <NavLink  to="/#"><FaShoppingCart className="cart"/></NavLink>
        </div>
      </div>
      <div class="pro">
        <img src={jw} alt="" />
        <div class="des">
          <span>JORDAN 9 WHITE</span>
          <h5>Regular </h5>
          <div class="star flex">
          <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
          </div>
          <h4>150,000 UGX</h4>
          <NavLink  to="/#"><FaShoppingCart className="cart"/></NavLink>
        </div>
      </div>
      <div class="pro">
        <img src={jy} alt="" />
        <div class="des">
          <span>JORDAN 9 BLACK AND YELLOW</span>
          <h5>Polo </h5>
          <div class="star flex">
          <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
          </div>
          <h4>150,000 UGX</h4>
          <NavLink  to="/#"><FaShoppingCart className="cart"/></NavLink>
        </div>
      </div>
    </div>
  </section>

        </>
    )
}
export default Review;