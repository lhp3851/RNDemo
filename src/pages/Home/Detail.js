import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: '',
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    this._focous_unsubscribe = navigation.addListener('focus', () => {
      console.log('DetailScreen mounted---focus');
    });
    this._blur_unsubscribe = navigation.addListener('blur', () => {
      console.log('DetailScreen unMounted---blur');
    });
  }

  componentWillUnmount() {
    this._focous_unsubscribe();
    this._blur_unsubscribe();
  }

  updateState = value => {
    this.setState({
      postText: value,
    });
  };

  updateParams = () => {
    const {navigation} = this.props;
    navigation.setParams({
      parentRoute: 'someText',
    });
  };

  goBack = () => {
    const {navigation} = this.props;
    const {postText} = this.state;
    navigation.navigate('Home', {post: postText});
  };

  render() {
    const {
      route: {
        params: {parentItemId, parentRoute},
      },
    } = this.props;

    const {postText} = this.state;

    console.log(parentItemId, parentRoute);

    return (
      <View style={styles.background}>
        <Text>Details!</Text>
        <Text>
          {parentRoute}: {parentItemId}
        </Text>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={styles.textInput}
          value={postText}
          onChangeText={this.updateState}
        />
        <Button title="Back" onPress={this.goBack} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 100,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default DetailScreen;
