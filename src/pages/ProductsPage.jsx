import { useState, useEffect } from 'react';
import { Header, Footer, ProductCard } from '../components';
import data from '../services/response.json';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        setProducts(data.products);
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
            <main className="page-content">
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
            </main>
            <Footer />
        </>
    );
}

export default ProductsPage;
