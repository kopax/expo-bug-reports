import 'react-native';
import React from 'react';
import { Platform } from 'react-native';
import Logo from '..';
import renderer from 'react-test-renderer';

describe(`Logo is tested on Platform: ${Platform.OS}`, () => {
  it('should not be a string', async () => {
    expect(typeof Logo).not.toBe('string');
  });
  it('should not be a number', async () => {
    expect(typeof Logo).not.toBe('number');
  });
  it('should be a component', async () => {
    expect(renderer(<Logo />).toJSON().tree.children.length).toBe(1);
  });
});
