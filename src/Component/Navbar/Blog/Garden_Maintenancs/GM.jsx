import React from "react";
import "./GM.css";
import Navbar from "../../Navbar";
import Footer from "../../../Footer/Footer";

const GM = () => {
  return (
    <div className="main-class-gm">
      <Navbar />
      <div className="gm-container">
     
        <h1 className="gm-title">🌸 Overwatered Your Plant? Here's How You Can Save It! 🌸</h1>
                <img src="/BlogImg/GB/GM_1.webp" alt="Lupine Flowers" className="gm-big-image" />
                <p>Unfortunately, overwatered plants are a more common issue than you'd think. It can get pretty difficult to gauge whether or not you've watered your plant enough and sometimes, you might just pour a little extra thinking it wasn't enough. </p>

        <p className="gm-description">
          The question we really like to ask is <strong>"What isn't special about them?"</strong>
        </p>
        <p className="gm-sub-text">🌿 Here's everything that makes Lupines the best garden flowers! 🌿</p>

      

        
        <table className="gm-info-table">
          <tbody>
            <tr>
              <th>🌱 Other Names</th>
              <td>Lupine, Lupin, Bluebonnet flowers</td>
            </tr>
            <tr>
              <th>⏳ Lifespan</th>
              <td>2-5 years, with the right care</td>
            </tr>
          </tbody>
        </table>

  
        <h2 className="gm-section-title">🌱 How to Germinate Lupin Seeds 🌱</h2>
        <img src="/BlogImg/GB/GM_4.webp" alt="Germination" className="gm-big-image" />
        <p className="gm-description">
          Want to grow Lupin flowers? Follow these simple steps to germinate seeds at home!
        </p>

       
        <div className="gm-step">
          <h3 className="gm-step-title">🚀 Step 1: Yellowing Leaves</h3>
          <img src="/BlogImg/GB/GM_5.webp" alt="Seed Location" className="gm-big-image" />
          <p className="gm-description">Confusing, yes, because yellow leaves occur due to a variety of reasons. However, they are also indicators that your plant's roots might be suffocating.</p>
          <ul className="gm-details">
            <li><strong>🌿 :</strong> They turn yellow because the root area is filled with water and unable to take up the nutrients needed by the plant. </li>
            <li><strong>🌿 :</strong> Note: the lower ones turn yellow first </li>
          </ul>
        </div>

        <div className="gm-step">
          <h3 className="gm-step-title">☀ Step 2: Wilting Leaves (not as common)</h3>
          <img src="/BlogImg/GB/GM_5.webp" alt="Sunny Spot" className="gm-big-image" />
          <p className="gm-description">Lupins need <strong>6-8 hours</strong> A lot of the signs lie in the leaves. So, always listen to what they're telling you. 

While wilting is typically a sign of underwatering, an overwatered plant can also wilt. This happens because the roots are drowning, preventing the plant from absorbing water effectively.

</p>
        </div>

        <div className="gm-step">
          <h3 className="gm-step-title">💦 3. Brown, Soft Spots on Leaves
          </h3>
          <img src="/BlogImg/GB/GM_6.webp" alt="Watering" className="gm-big-image" />
          <p className="gm-description">
          Drowning plants often develop soft, brown spots, especially near the edges of the leaves.

How? The excess moisture in the soil encourages fungal or bacterial growth, leading to this discoloration.

Out of most overwatered plant signs, this is one of the most common ones.
          </p>
        </div>

        <div className="gm-step">
          <h3 className="gm-step-title">🌿 4. Soggy Soil 
          </h3>
          <img src="/BlogImg/GB/GM_7.webp" alt="Transplanting" className="gm-big-image" />
          <p className="gm-description">If it's been a while since you last watered your plant, but the soil still feels overly wet and heavy, it has definitely been overwatered. 

Ideally, the soil must dry out within a few days of watering, thus indicating that you're on the right path of hydration</p>
        </div>
        
        <div className="gm-step">
          <h3 className="gm-step-title">🌿 5. Falling Leaves

          </h3>
          <img src="/BlogImg/GB/GM_9.webp" alt="Transplanting" className="gm-big-image" />
          <p className="gm-description">If your plant's leaves feel soft and start dropping off easily, this could be due to root rot and overwatering, which damages the plant’s ability to support its foliage. 

Always remember that it's easier to save your plants if you spot any signs of overwatering plants sooner, rather than later. So, always watch out!</p>
        </div>

      
        <table className="gm-info-table">
          <tbody>
            <tr>
              <th>🌞 Sunlight</th>
              <td>6-8 hours a day</td>
            </tr>
            <tr>
              <th>🌱 Growth</th>
              <td>Fast-growing legume</td>
            </tr>
            <tr>
              <th>⚠ Toxicity</th>
              <td>Toxic to humans and animals upon ingestion</td>
            </tr>
          </tbody>
        </table>

        <p className="gm-final-text">🌿 Now you know how to grow beautiful Lupine flowers! 🌿</p>
      </div>
      <Footer/>
    </div>
  );
};

export default GM;
