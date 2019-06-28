import React,{Component} from 'react';
import {Navbar,Nav,NavDropdown,Container}  from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class navbar extends Component{

    render(){
        return(
           
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container style={{maxWidth:1024}}>
            <Navbar.Brand href="/">Phone-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav className="nav-link"><Link to="/" 
                    style={{textDecoration:"none",color:"#ffffff"}}>Product</Link></Nav>
                <Nav className="nav-link">
                    <Link to="/mycart"
                    style={{textDecoration:"none",color:"#ffffff"}}
                    >
                    <i className="fa fa-shopping-cart" style={{position:"relative"}}>
                      {this.props.cart.cart_product.length > 0 ?
                        <p style={{position:"absolute",
                        top:-5,left:-5,color:"#ffffff",width:15,height:15,
                        background:"red",borderRadius:"90%",textAlign:"center",
                        fontSize:13,fontFamily:"Roboto",fontWeight:500
                      }}>{this.props.cart.cart_product.length}</p>: ''
                      }
                       </i> Keranjang
                    </Link>
                </Nav>
                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Saldo : Rp 100.000 </Nav.Link>
                <NavDropdown title="Akun" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Akun Saya</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Dompet</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Keluar</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
 
        );
    }
}
navbar.propTypes = {
  cart: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  cart:state.cart
})

export default connect(mapStateToProps, null)(navbar)