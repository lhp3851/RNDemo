import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('HomeScreen props:', props);
    this.onSettings = this.onSettings.bind(this);
  }

  componentDidMount() {
    const {navigation} = this.props;
    this._focous_unsubscribe = navigation.addListener('focus', () => {
      console.log('HomeScreen mounted---focus');
    });
    this._blur_unsubscribe = navigation.addListener('blur', () => {
      console.log('HomeScreen unMounted---blur');
    });
  }

  componentWillUnmount() {
    this._focous_unsubscribe();
    this._blur_unsubscribe();
  }

  onSettings() {
    const {navigation} = this.props;
    navigation.navigate('Details', {
      parentRoute: 'Home',
      parentItemId: 1,
    });
  }

  render() {
    console.log(this.props.route?.params?.post);

    return (
      <View style={styles.root}>
        <Text>Hello React Native Navigation 👋</Text>
        <Text style={styles.params}>
          Post: {this.props.route?.params?.post}
        </Text>
        <Button
          title="Push Detail Screen"
          color="#710ce3"
          onPress={this.onSettings}
        />
      </View>
    );
  }
}

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  params: {
    margin: 10,
  },
});

export default HomeScreen;
