import "./ProductCard.css"
import Product from "./Products/glove.jpg";

function ProductCard({image, title, price}) {
    return (
        <div className="product-card">
            <img src={image} alt={title}/>
            <div className="product-info">
                <h3>{title}</h3>
                <div className="rating">
                    ★★★★★
                </div>
                <p className="price">{price} $</p>
                <button className="buy-btn">Jetzt Kaufen</button>
                <button className="cart-btn">In den Warenkorb</button>
            </div>
            
        </div>

    )
}

export default ProductCard