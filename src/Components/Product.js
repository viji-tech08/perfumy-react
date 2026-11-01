import one from "../assets/images/image1.avif";
import two from "../assets/images/image2.webp";
import three from "../assets/images/image3.webp";

function Product()
{
  return(
    <div class="products">
        <div class="box">
            <img src= {one} alt="One" ></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi, laudantium ipsam quidem in ipsa temporibus delectus eaque assumenda voluptates?</p>
        </div>
        <div class="box">
            <img src={two} alt="Two"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi, laudantium ipsam quidem in ipsa temporibus delectus eaque assumenda voluptates?</p>
        </div>
        <div class="box">
            <img src={three} alt="Three"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi, laudantium ipsam quidem in ipsa temporibus delectus eaque assumenda voluptates?</p>
        </div>

    </div>
  )
}

export default Product