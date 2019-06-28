import React,{Component} from 'react';
import {Row,Col,Container,Card,Button} from 'react-bootstrap';
import {data} from '../dummydb';
import {formatRupiah,cekExistCart} from '../function';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cart';

class home extends Component{

    constructor(){
        super();
        this.state={
            phone:[]
        }
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){
        this.setState({phone:data})
        
    }

    addToCart(id,count){
       
        let data = {
            id:id,
            count:count
        }
        this.props.addToCart(data)
    }

    render(){
        
        return(
            <>
                <Container>
                    <h2 className="text-center " style={{margin:20}}>Produk kami</h2>
                    <Row >
                        {this.state.phone.map((item,key)=>{
                            return <Col key={key} md={3} style={{paddingTop:20,paddingBottom:20}}>
                            <Card style={{maxHeight:"400px"}} className="custom-href">
                                <Link to={"/detail/"+item.id+"-"+item.name.toLowerCase().replace(/\s+/g, '-')}>
                                    <Card.Img variant="top" src={item.image_url} width="100%" height="200px" />
                                </Link>
                                    <Card.Body>
                                    <Link to={"/detail/"+item.id+"-"+item.name.toLowerCase().replace(/\s+/g, '-')}>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                            {formatRupiah(item.price)}
                                            </Card.Text>
                                    </Link>
                                    {cekExistCart(this.props.cart.cart_product,item.id) ?  
                                        <Link to="/mycart">
                                            <Button variant="success" style={{marginTop:10}}>
                                        <i className="fa fa-credit-card"></i> Bayar</Button>
                                        </Link>
                                    
                                    : <Button variant="primary" style={{marginTop:10}}
                                        onClick={()=>this.addToCart(item.id,1)}
                                        >
                                        <i className="fa fa-shopping-cart"></i> Add to Cart</Button>}
                                    
                                </Card.Body>
                                
                                </Card>
                            </Col>
                        })}
                    </Row>
                </Container>
            </>
        );
    }
}
home.propTypes = {
    cart: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    cart:state.cart
})

export default connect(mapStateToProps, { addToCart })(home)