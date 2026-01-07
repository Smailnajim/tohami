import { useState, useEffect } from 'react';
import { Header, Footer, Hero, Categories, Features, Newsletter, ProductCard } from '../components';
import productsData from '../services/response.json';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        setProducts(productsData.products);
    }, []);

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    return (
        <>
            <Header />
            <Hero />
            <Categories />

            {/* Products Section */}
            <section className="products" id="products">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-label">Our Products</span>
                        <h2 className="section-title">Featured Collection</h2>
                        <p className="section-subtitle">
                            Handpicked furniture pieces that blend style with exceptional craftsmanship
                        </p>
                    </div>

                    <div className="products-filter">
                        {['All', 'Couches', 'Tables'].map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                formatPrice={formatPrice}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Features />
            <Newsletter />
            <Footer />
        </>
    );
}

export default HomePage;
