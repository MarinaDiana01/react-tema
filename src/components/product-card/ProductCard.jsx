import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className="product-card-container">
      <div className="product-card-image" style={{ backgroundImage: `url(${props.image})` }}></div>
      <div className="product-card-content">
        <h2 className="product-card-title"> {props.title} </h2>
        <p className="product-card-description"> {props.description} </p>
        <p className="product-card-price"> $ {props.price} </p>
      </div>
      <button className="product-card-button">add to cart</button>
    </div>
  )
};

export default ProductCard;