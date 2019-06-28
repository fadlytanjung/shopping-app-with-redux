import React,{Component} from 'react';
import {Container} from 'react-bootstrap'

class notfound extends Component{

    render(){
        return(
            <Container style={{paddingTop:40,maxWidth:1024}}>
                <h1>Halaman tidak tersedia</h1>
            </Container>
        );
    }
}

export default notfound;