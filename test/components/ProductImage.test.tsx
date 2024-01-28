import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { ProductCart, ProductImage } from "../../src/components";
import { product2 } from "../data/productData";


describe('Tests on ProductImage Component', () => {

    test('Loads the product image propertly', () => {
        const wrapper = ReactTestRenderer.create(
            <ProductCart product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCart>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Loads the custom image propertly', () => {
        const wrapper = ReactTestRenderer.create(
            <ProductImage img="../testpath/customimage.png" className="customClass"/> 
        )
        expect(wrapper.toJSON()).toMatchSnapshot();

    });
})