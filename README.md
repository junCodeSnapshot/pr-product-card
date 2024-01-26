# PR_product_cart
This is a test NPM package deployed just for learning.

### PRC

## Example
```
import {ProductCart, ProductImage, ProductTitle, ProductButtons} from 'pr-product-card'

```
```
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
```