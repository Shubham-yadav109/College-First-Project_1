import React from "react";
import "./KG.css";
import Navbar from "../../Navbar";
import Footer from "../../../Footer/Footer";

const KG = () => {
  return (
    <div  className="main-class-kg">
      <Navbar/>
    <div className="kg-container">

      <h1 className="kg-title">🌸 Raised-Bed Gardening: How Can You Start?
      🌸</h1>
      <img src="/BlogImg/GB/KG_1.webp" alt="Lupine Flowers" className="kg-big-image" />

      <p className="kg-description">
      Gardening in raised beds looks super fun, no doubt. Plus, when done the right way, it is also very aesthetically pleasing and makes excellent use of space. 

However,  <strong>the questions always remain - "are the extra costs worth it?", "is it really needed in outdoor gardens?". These are some questions this blog will answer for you. So, read on!</strong>
      </p>
      <p className="kg-sub-text">🌿  What Really Is Gardening in Raised Beds?! 🌿</p>

      <p>
      Essentially, raised bed gardening involves growing vegetables, herbs, or fruits in soil that is enclosed and elevated above ground level. The enclosure or frame is generally made of wood, stone, or metal. 

When adding raised beds in gardens, one of the best things is that you have complete control over the soil quality. This soil thus ensures better nutrients, aeration, drainage, and a controlled growing environment.   

Apart from soil quality control, there are also several other benefits of growing plants in raised garden beds that leave you wanting more. Here are a few!

      </p>
     
      
      
      <h2 className="kg-section-title">🌱 Benefits of Planting Raised Garden Beds: What Makes it Ideal for All Gardens?🌱</h2>
      <img src="/BlogImg/GB/KG_2.webp" alt="Germination" className="kg-big-image" />
      <p className="kg-description">
      Yes, creating raised beds in gardens means bearing extra costs. But, more often than not, these costs are worth it if you're looking for proper quality control and healthier, faster growth. 

Here are some benefits of raised bed gardening that will have you hooked and wanting more:!
      </p>
      
    
      <div className="kg-step">
        <h3 className="kg-step-title">🚀 Step 1. Better Soil Quality</h3>
        <img src="/BlogImg/GB/KG_3.webp" alt="Seed Location" className="kg-big-image" />
        <p className="kg-description">Since you are creating a whole new enclosure for your raised beds, you have space to plant new seeds and plants from scratch. So, you have complete control over the soil that you add to this enclosure. 

You can ensure the usage of a potting soil mix that has ingredients such as Coco Peat, Perlite, and more to ensure better aeration and drainage for your plants.  

Perfect customization = perfect growth!

</p>
      
      </div>

      <div className="kg-step">
        <h3 className="kg-step-title">☀ Step 2. Enhanced Drainage
        </h3>
        <img src="/BlogImg/GB/KG_4.webp" alt="Sunny Spot" className="kg-big-image" />
        <p className="kg-description">The elevated garden beds make sure that any excess water has proper space for optimal drainage. So, the bed does not retain any more water than it needs to, thus ensuring proper hydration for your plants and reducing the risk of overwatering. 

</p>
      </div>

      <div className="kg-step">
        <h3 className="kg-step-title">💦 Step 3. Fewer Weeds and Pests</h3>
        <img src="/BlogImg/GB/KG_5.webp" alt="Watering" className="kg-big-image" />
        <p className="kg-description">
        Since building raised garden beds ensures that you have a whole new environment to grow your plants and seeds in, you automatically get the benefit of a more controlled space.

Whether you're growing fruits, seeds, or herbs, you have complete control over what grows in your garden bed. This minimizes weed intrusion and also deters ground-level pests. 

This just made your garden maintenance process 10x easier!
        </p>
      </div>

      <div className="kg-step">
        <h3 className="kg-step-title">🌿 Step 4. Greater Accessibility</h3>
        <img src="/BlogImg/GB/KG_6.webp" alt="Transplanting" className="kg-big-image" />
        <p className="kg-description">In-ground gardening is not necessarily the easiest thing because it involves a lot of bending, sitting down on the ground, and kneeling over things to sow things, prune, and do overall maintenance. 

However, when you choose to have raised beds in garden spaces, you can customize the height according to your preference and convenience. This also makes gardening easier and more accessible to senior citizens & physically disabled. </p>
      </div>
      <div className="kg-step">
        <h3 className="kg-step-title">🌿 Step 5. Water and Maintain</h3>
        <img src="/BlogImg/GB/KG_8.jpg" alt="Transplanting" className="kg-big-image" />
        <p className="kg-description">After planting, water deeply and regularly. Add mulch to retain moisture and prevent weeds. Fertilize and maintain as needed throughout the growing season.</p>
      </div>
      
     
      <table className="kg-info-table">
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
      </table>
      
      <p className="kg-final-text">🌿 Now you know how to grow beautiful Lupine flowers! 🌿</p>
    </div>

<Footer/>
    </div>

  );
};

export default KG;
