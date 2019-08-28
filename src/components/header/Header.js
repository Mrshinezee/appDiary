/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import Button from '../Button';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={{uri: 'http://res.cloudinary.com/dowmiccxo/image/upload/v1531260429/love.jpg'}}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Pen down your thoughts and feelings</Text>
    <Button 
    extraStyle={styles.button}
    buttonText='Get Started' />
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default Header;
