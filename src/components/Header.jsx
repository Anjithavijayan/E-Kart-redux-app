import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
    //useSelector hook is used to access state available in store
    const wishlist=useSelector((state)=>state.wishlistReducer)
    // console.log("====wishlist items====");
    // console.log(wishlist);
    const cart=useSelector((state)=>state.cartReducer)
     // console.log("====cart items====");
    // console.log(cart);
    
    
    return (
        <>
            <Navbar expand="lg" className='bg-primary'>
                <Container>
                    <i style={{color:' #FFD43B'}} class="fa-solid fa-cart-shopping fa-bounce me-3 fs-4"></i>
            
                    <Navbar.Brand style={{ color: '#fff' }}>
                        <Link to={'/'} style={{ color: '#fff', textDecoration: 'none'}}className='fs-4'>
                            E-KART
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to={'/wishlist'} style={{ color: 'white', textDecoration: 'none' }} className='btn btn border'>
                                    Wishlist
                                    <Badge className='ms-2 fs-7' bg="secondary">{wishlist?.length}</Badge>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/cart'} style={{ color: 'white', textDecoration: 'none' }} className='btn btn border'>
                                    Cart
                                    <Badge className='ms-2 fs-7' bg="secondary">{cart?.length}</Badge>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header