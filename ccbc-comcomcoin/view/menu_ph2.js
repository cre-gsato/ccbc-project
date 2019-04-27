import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Header, Icon, Text } from 'react-native-elements'

export default class MenuPh2 extends Component {
  state = {
    open: false
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount() {}

  onPressLogoutButton = () => {
    this.props.navigation.navigate('MenuPh2')
  }
  onPressMenuButton = () => {
    this.props.navigation.navigate('MenuPh2')
  }
  onPressChatButton = () => {
    this.props.navigation.navigate('Chat')
  }
  onPressChatSelectButton = () => {
    this.props.navigation.navigate('ChatSelect')
  }
  onPressChatMsgButton = () => {
    this.props.navigation.navigate('ChatMsg')
  }
  onPressChatCoinButton = () => {
    this.props.navigation.navigate('ChatCoin')
  }
  onPressKijiButton = () => {
    this.props.navigation.navigate('Kiji')
  }
  onPressShoppingButton = () => {
    this.props.navigation.navigate('Shopping')
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Icon
              name={'home'}
              type={'font-awesome'}
              color="#fff"
              onPress={this.onPressMenuButton}
            />
          }
          centerComponent={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View>
                <Image source={require('./../images/ComComCoin_logo_02.png')} />
              </View>
            </View>
          }
          rightComponent={
            <Icon
              name={'sign-out'}
              type={'font-awesome'}
              color="#fff"
              onPress={this.onPressLogoutButton}
            />
          }
          backgroundColor="#ff5622"
        />
        <View style={{ marginTop: 20, marginLeft: 10 }}>
          <Text h4 onPress={this.onPressChatButton}>
            画面モックアップメニュー
          </Text>
        </View>
        <View style={styles.font_view}>
          <Text style={styles.font} onPress={this.onPressChatSelectButton}>
            【チャット機能】チャット選択
          </Text>
        </View>
        <View style={styles.font_view}>
          <Text style={styles.font} onPress={this.onPressChatMsgButton}>
            【チャット機能】チャット照会
          </Text>
        </View>
        <View style={styles.font_view}>
          <Text style={styles.font} onPress={this.onPressChatCoinButton}>
            【チャット機能】コイン送付
          </Text>
        </View>
        <View style={styles.font_view}>
          <Text style={styles.font} onPress={this.onPressKijiButton}>
            【記事投稿機能】記事投稿
          </Text>
        </View>
        <View style={styles.font_view}>
          <Text style={styles.font} onPress={this.onPressShoppingButton}>
            【支払機能】支払
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  },
  header: {},
  font_view: {
    marginTop: 20,
    marginLeft: 30
  },
  font: {
    fontSize: 20
  },
  menu_item: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30
  },
  menu_icon: {
    width: 50,
    height: 50
  },
  menu_button: {},
  menu_icon_view: {},
  menu_button_view: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10
  }
})
