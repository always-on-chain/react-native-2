import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide) => {
      return (
        <View key={slide.text} 
              style={[styles.slideStyle, {backgroundColor: slide.color}]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
      );
    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    padding: 10,
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
  }
}

export default Slides;