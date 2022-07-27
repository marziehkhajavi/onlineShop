import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Styles
import styles from './Store.module.css'

//Component
import Product from './shared/Product'

//Context
// import { ProductsContext } from '../context/ProductContextProvider';

//Redux
import { fetchProducts } from "../redux/products/productsAction";

const Store = () => {

    // const products = useContext(ProductsContext)

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.container} >
            {
                // products.map(product => <Product 
                //                          key={product.id} 
                //                          productData={product}
                //                         />)
                
                productsState.loading ?
                <h2>Loading...</h2> :
                productsState.error ?
                    <p>Something went wrong</p> :
                    productsState.products.map(product => <Product 
                        key={product.id}
                        productData={product}
                />)
            }
        </div>
    );
};

export default Store;