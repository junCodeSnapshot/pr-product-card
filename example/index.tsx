import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCart, ProductButtons, ProductImage, ProductTitle } from '../.';

const App = () => {

  const product = {
    id: '1',
    title: 'Item Name - Card',
    // image: 'coffee-mug.png'
  }

  return (
    <>
      <ProductCart
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >

        {
          ({ count, increaseBy, isMaxCountReached, maxCount, reset }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCart>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
