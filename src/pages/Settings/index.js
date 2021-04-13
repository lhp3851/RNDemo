import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../utils';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeInfo: {c: 0},
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            name="bell-o"
            size={20}
            style={styles.notice}
            color={Colors.white}
            onPress={() => this.setCount(c => c + 1)}
          />
        );
      },
    });
  }

  setCount = value => {
    this.setState(
      {
        noticeInfo: {c: value},
      },
      () => {
        console.log(this.state.noticeInfo);
      },
    );
  };

  render() {
    const {navigation} = this.props;
    const {
      noticeInfo: {c},
    } = this.state;
    return (
      <View style={styles.root}>
        <Text>Settings Screen</Text>
        <Button
          title="Detail"
          onPress={() => {
            // navigation.navigate('Home', {
            //   screen: 'Details',
            //   params: {
            //     noticeInfo: c,
            //   },
            // });
            navigation.navigate('Profile');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  notice: {
    marginRight: 15,
  },
});

export default SettingsScreen;
