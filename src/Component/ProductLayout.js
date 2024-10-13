import React from "react";
import "./CSS files/HomePage.css";

function ProductLayout({ products }) {
    if (!Array.isArray(products)) {
        return <p>No data available</p>; // Or handle the case differently
      }
    return (
        
      <>
        {products.map((item, id) => {
          return (
            <div key={id} className="product_item">
              <img src={item.src} alt={item.description} />
              <p>
                {item.description ||
                  "Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officiis, harum aspernatur hic doloremque error ab temporibus cumque asperiores! Amet?"}
              </p>
            </div>
          );
        })}
      </>
    );
  }
export default ProductLayout;