import React,{Component} from 'react';
import {data} from '../dummydb';
import { Container,Row,Col,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {formatRupiah,cekExistCart} from '../function';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cart';

class detail extends Component{

    constructor(){
        super()
        this.state={
            id:0,
            data_detail:{},
            isMatch:false
        }
    }

    componentDidMount(){
       
        let params = this.props.match.params.id
        let datas = data.filter(id=>id.id === Number(params[0]))
            if(datas.length > 0){
            this.setState({data_detail:datas[0]})
            document.title = 'Phone-Shop: '+datas[0].name
        }else{
            this.setState({isMatch:!this.state.isMatch})
        }
        
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
            <Container style={{paddingTop:40,maxWidth:1024}}>
                <Row>
                    {this.state.isMatch ? <h1>Maaf product tidak tersedia</h1> :
                    <>
                    <Col md={4}>
                        <img alt="images" src={this.state.data_detail.image_url} width="100%"></img>
                    </Col>
                    <Col md={8}>
                        <h3>{this.state.data_detail.name}</h3>
                        <p>Deskripsi : {this.state.data_detail.description}</p>
                        <p>Harga : {formatRupiah(this.state.data_detail.price)}</p>
                        
                        <Link to="/"><Button variant="warning" style={{marginRight:10}}>
                            <i className="fa fa-arrow-left"></i> Kembali</Button>
                        </Link>
                        {cekExistCart(this.props.cart.cart_product,this.state.data_detail.id) ?  
                            <Link to="/mycart">
                                <Button variant="success" >
                            <i className="fa fa-credit-card"></i> Bayar</Button>
                            </Link>
                        
                        : <Button variant="primary" 
                            onClick={()=>this.addToCart(this.state.data_detail.id,1)}
                            >
                            <i className="fa fa-shopping-cart"></i> Add to Cart</Button>}
                    </Col>
                    </>
                    }
                </Row>
            </Container>
        );
    }
}

detail.propTypes = {
    cart: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    cart:state.cart
})

export default connect(mapStateToProps, {addToCart})(detail)