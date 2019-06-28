import React,{Component} from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {formatRupiah} from '../function';
import {data} from '../dummydb';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addAmount,minAmount} from '../actions/cart';


class mycart extends Component{
    constructor(){
        super()
        this.state={
            amount:1,
        }
    }

    handleChange(e){
        this.setState({amount:e.target.value})
    }

    addAmount(id){
        this.setState({amount:this.state.amount+1})
        this.props.addAmount([id,this.state.amount+1])
        
    }
    minAmount(id){
        this.setState({amount:this.state.amount-1})
        if(this.state.amount === 1){
            this.setState({amount:1})
        }
        this.props.minAmount([id,this.state.amount-1])
    }

    handleKeyPress = (event) => {
        var charCode = (event.charCode) ? event.charCode : ((event.keyCode) ? event.keyCode :
                  ((event.which) ? event.which : 0));
        var allowedCode=[]
        if(charCode > 31 && (charCode < 48 || charCode > 57) && (allowedCode.indexOf(charCode) === -1)){
            event.preventDefault();
            return false;
        }else{
            this.setState({amount:event.target.value})
        }
    }
    
    componentDidUpdate(){
        if(this.state.amount===""){
            this.setState({amount:1})
        }
        if(this.state.amount>100){
            this.setState({amount:100})
        }
    }
    render(){
        
        return(
            <Container style={{paddingTop:40,maxWidth:1024}}>
                {this.props.cart.cart_product.length >0 ? <>{this.props.cart.cart_product.map((item)=>
                {
                return <Card className="m-b-20" key={data[item.id].id}>
                <Card.Body>
                <Row >
                    <Col md={3}>
                    <img alt='datacart' width={"100%"} height={200} src={data[item.id].image_url} />
                    </Col>
                    <Col md={9}>
                    <h3>{data[item.id].name}</h3>
                    <p>{formatRupiah(data[item.id].price)}</p>
                    <p>Jumlah </p>
                    <Row>
                        <Col>
                        <Button variant="danger"
                            onClick={()=>this.minAmount(item.id)}
                        ><i className="fa fa-minus"></i></Button>
                            <input value={this.state.amount} 
                            onChange={this.handleChange.bind(this)}
                            onKeyDown={this.handleKeyPress}
                            type="text" className="input-cart-amount"></input>
                        <Button 
                            onClick={()=>this.addAmount(item.id)}
                        ><i className="fa fa-plus"></i></Button>
                        </Col>
                        <Col className="text-right" style={{paddingTop:20}}>
                            <p>{formatRupiah(this.state.amount*data[item.id].price)}</p>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                </Card.Body>
                    </Card>
                })}
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3}>
                                Total Belanja : 
                            </Col>
                            <Col md={9} className="text-right">
                                <b>Rp. 9000000</b>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                </>
                
                : <Card>
                <Card.Body>
                    <Row>
                        <Col >
                            Maaf keranjang anda kosong, silahkan <Link to="/">belanja</Link> 
                        </Col>
                    </Row>
                </Card.Body>
            </Card>}
                
            </Container>
        );
    }
}

mycart.propTypes = {
    cart: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    cart:state.cart
})

export default connect(mapStateToProps, {addAmount,minAmount})(mycart)