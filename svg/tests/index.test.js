import 'react-native';
import React from 'react';
import { Platform } from 'react-native';
import Logo from '..';
import renderer from 'react-test-renderer';
import SvgMock from '../../__mocks__/svgMock';

describe(`Logo is tested on Platform: ${Platform.OS}`, () => {
  it('should be a SVG mock when imported in test', () => {
    expect(Logo).toBe(SvgMock);
  });
});
