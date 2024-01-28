import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { ProductCart } from "../../src/components";
import { product1 } from "../data/productData";

const { act } = ReactTestRenderer;

describe('Test on Product Cart', () => {

    test('Should load propertly', () => {
        const wrapper = ReactTestRenderer.create(
            <ProductCart product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCart>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Should increase the counter', () => {
        const wrapper = ReactTestRenderer.create(
            <ProductCart product={product1}>
                {
                    ({count, increaseBy}) => (
                        <div>
                            <h1>{count}</h1>
                            <button onClick={() => increaseBy(1)}>+1</button>
                        </div>
                    )
                }
            </ProductCart>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
        act(() => {
            wrapper.root.findByType('button').props.onClick();
        });
        expect((wrapper as any).toJSON().children[0].children[0].children[0]).toBe("1");
    })


})