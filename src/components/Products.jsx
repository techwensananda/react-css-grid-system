import React from 'react';
import product1 from '../assets/img/product1.png';
import product2 from '../assets/img/product2.png';
import product3 from '../assets/img/product3.png';
import product4 from '../assets/img/product4.png';
import product5 from '../assets/img/product5.png';
const Products = () => {
  return (
    <>    <section className="products section container" id="products">
    <h2 className="section__title">Products</h2>

    <div className="products__container grid">
      <article className="products__card">
        <img src={product1} alt="" className="products__img" />

        <h3 className="products__title">Spirit rose</h3>
        <span className="products__price">$1500</span>

        <button className="products__button">
          <i className="bx bx-shopping-bag"></i>
        </button>
      </article>

      <article className="products__card">
        <img src={product2} alt="" className="products__img" />

        <h3 className="products__title">Khaki pilot</h3>
        <span className="products__price">$1350</span>

        <button className="products__button">
          <i className="bx bx-shopping-bag"></i>
        </button>
      </article>

      <article className="products__card">
        <img src={product3} alt="" className="products__img" />

        <h3 className="products__title">Jubilee black</h3>
        <span className="products__price">$870</span>

        <button className="products__button">
          <i className="bx bx-shopping-bag"></i>
        </button>
      </article>

      <article className="products__card">
        <img src={product4} alt="" className="products__img" />

        <h3 className="products__title">Fosil me3</h3>
        <span className="products__price">$650</span>

        <button className="products__button">
          <i className="bx bx-shopping-bag"></i>
        </button>
      </article>

      <article className="products__card">
        <img src={product5} alt="" className="products__img" />

        <h3 className="products__title">Duchen</h3>
        <span className="products__price">$950</span>

        <button className="products__button">
          <i className="bx bx-shopping-bag"></i>
        </button>
      </article>
    </div>
  </section></>
  )
}

export default Products