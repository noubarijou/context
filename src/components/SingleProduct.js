import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const SingleProduct = ({product}) => {
    return (
        <div className="products">
            <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom:10}}>
                        <span>{product.price.split(".")[0]}</span>
                        {product.fastDelivery ? (
                            <div>Fast delivery</div>
                        ):(
                            <div>4 days delivery</div>
                        )}
                        <Rating rating={product.rating} />
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct;
