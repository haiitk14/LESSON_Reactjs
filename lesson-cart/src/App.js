import React, { Component } from 'react';
import Headers from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Headers></Headers>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer></ProductsContainer>
                        <MessageContainer></MessageContainer>
                        <CartContainer></CartContainer>    
                    </div>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
