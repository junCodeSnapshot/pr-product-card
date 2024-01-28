import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { ProductTitle, ProductCart } from '../../src/components';
import { product1 } from "../data/productData";



describe('Test on ProductTitle', () => {

    test('should show the component right with the custom title', () => {
        const wrapper = ReactTestRenderer.create(
            <ProductTitle title="Custom-title" className="customTestClassname"/>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should show the component with the product name', () => {
        const wrapper = ReactTestRenderer.create(
            <ProductCart product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCart>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    })

})
