import React from 'react'
import {shallow} from 'enzyme'
import Card from '../js/components/card'
import { mount } from 'enzyme'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});
describe('renders a card with text', () => {
  it('has text', () => {
    const card = mount (
      <Card text = 'test' />
    );
    expect(card.text()).toEqual("test");
  });
});
