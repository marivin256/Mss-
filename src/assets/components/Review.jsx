import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa'
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
      <img src="/src/mss/vwb.jpg" width="100%" id="MainImg" alt="" className="mb-2" />

      <div className="small-img-group ">
        <div className="small-img-col border border-2 p-1 rounded-lg">
          <img src="/src/mss/vwb.jpg" width="100%" className="small-img rounded-lg" alt="" />
        </div>
        <div className="small-img-col border border-2 p-1 rounded-lg">
          <img src="/src/mss/vbk.jpg" width="100%" className="small-img rounded-lg" alt="" />
        </div>
        <div className="small-img-col border border-2 p-1 rounded-lg">
          <img  src="/src/mss/vbg.jpg" width="100%" className="small-img rounded-" alt="" />
        </div>
        <div className="small-img-col">
          <img  src="/src/mss/vb.jpg" width="100%" className="small-img" alt="" />
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
        <img src="/src/img/products/alr.jpg" alt="" />
        <div className="des">
          <span>H&M</span>
          <h5>Regular </h5>
          <div className="star flex">

          <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
        
           
          </div>
          <h4>279 UGX</h4>
          <NavLink  to="/#"><FaShoppingCart className="cart"/></NavLink>
        </div>
      </div>
      <div class="pro">
        <img src="/src/img/products/jb.jpg" alt="" />
        <div class="des">
          <span>LC WAIKIKI</span>
          <h5>Classic </h5>
          <div class="star flex">
          <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
          </div>
          <h4>230 UGX</h4>
          <NavLink  to="/#"><FaShoppingCart className="cart"/></NavLink>
        </div>
      </div>
      <div class="pro">
        <img src="/src/img/products/jw.jpg" alt="" />
        <div class="des">
          <span>H&M</span>
          <h5>Regular </h5>
          <div class="star flex">
          <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
          </div>
          <h4>350 UGX</h4>
          <NavLink  to="/#"><FaShoppingCart className="cart"/></NavLink>
        </div>
      </div>
      <div class="pro">
        <img src="/src/img/products/jy.jpg" alt="" />
        <div class="des">
          <span>POLO</span>
          <h5>Polo </h5>
          <div class="star flex">
          <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
          </div>
          <h4>285 UGX</h4>
          <NavLink  to="/#"><FaShoppingCart className="cart"/></NavLink>
        </div>
      </div>
    </div>
  </section>

        </>
    )
}
export default Review;