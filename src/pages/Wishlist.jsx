import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {

  const wishlistItems = useSelector((state) => state.wishlistReducer);
  console.log("====wishlist items in whishlist page====");
  console.log(wishlistItems);

  const dispatch = useDispatch();

  const handleWishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <>
      <button className='btn btn-success mt-4 ms-4 border shadow'>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back to home
        </Link>

      </button>
      <Row className='m-5'>

        {
          wishlistItems?.length > 0 ?
            wishlistItems.map((item) => (
              <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>  {/* card from react bootstrap :copy first card:paste inside <Col> tag
                                                                                        :import button and card top  */}
                <Card style={{ width: '18rem' }} className='border shadow'>
                  <Card.Img variant="top" src={item.image} height={'200px'} className='p-3' />
                  <Card.Body>

                    <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)}...</p>
                      <p className='fw-bolder'>Price: &#x20B9; {item.price}</p>
                    </Card.Text>
                    <div className='d-flex align items-center justify-content-between'>  {/* d-flex is must be provide*/}
                      <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash" ></i></Button> {/* delete icon from fontawesome site*/}
                      <Button variant="outline-success" onClick={()=>handleWishlist(item)}><i class="fa-solid fa-cart-plus"></i></Button>
                    </div>

                  </Card.Body>
                </Card>

              </Col>
            ))
            :
            <div style={{ height: '100vh' }} className='d-flex align-items-center flex-column '>
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-5875081.png?f=webp" height='300px' alt="" />
              <h4 className='text-danger fw-bolder'>Your Cart Is Empty</h4>
            </div>

        }

      </Row>

    </>
  )
}

export default Wishlist