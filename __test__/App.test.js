import React from 'react';
import App from '../client/src/components/App.jsx';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';

import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Test to check Jest', () => {
  it('1 plus 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('Renders components in DOM', () => {
  test('Renders comments', async () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AppBody)).toHaveLength(1);
  })
});

describe('Renders all the components in App', () => {
  jest.mock('./Song', () => () => <div id="mockSong">mockSong</div>)
  const wrapper = mount(<App />)
  expect(wrapper.find('mockSong').length).toEqual(1)
})