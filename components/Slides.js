import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';

class Slides extends Component {
  renderSlides() {
    console.log('data', this.props.data)
    return this.props.data.map((slide) => {
      return (
        <View style={styles.slideStyle} key={slide.text}>
          <Text style={styles.textStyle}>{slide.text}</Text>
        </View>
      );
    })
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        // style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  textStyle: {
    fontSize: 30
  }
}

export default Slides;