import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  ScrollView,
  TextInput
} from 'react-native'
import { Button, Icon, Avatar, Card } from 'react-native-elements'

export default class Kiji extends Component {
  state = {
    mode: 'select'
  }

  moveSelect() {
    this.setState({
      mode: 'select'
    })
  }

  moveInput() {
    this.setState({
      mode: 'input'
    })
  }

  moveRead() {
    this.setState({
      mode: 'read'
    })
  }

  render() {
    if (this.state.mode == 'select') {
      return (
        <View>
          {/* タイトル */}
          <View style={styles.screenTitleView}>
            <Text style={styles.screenTitleText}>記事を選択</Text>
          </View>
          {/* 1行目 */}
          <View style={styles.articleLine}>
            <View style={styles.articleTitleView}>
              <Text style={styles.articleTitleText}>　　　ライフハック</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.nonReadMark}>{'   1   '}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="white"
                onPress={() => this.moveRead()}
              />
            </View>
          </View>
          {/* 2行目 */}
          <View style={styles.articleLine}>
            <View style={styles.articleTitleView}>
              <Text style={styles.articleTitleText}>　　　おすすめの本</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.nonReadMark}>{'   2   '}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="white"
                onPress={() => this.moveRead()}
              />
            </View>
          </View>
          {/* 3行目 */}
          <View style={styles.articleLine}>
            <View style={styles.articleTitleView}>
              <Text style={styles.articleTitleText}>　　　イベント情報</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }} />
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="white"
                onPress={() => this.moveRead()}
              />
            </View>
          </View>
          {/* 4行目 */}
          <View style={styles.articleLine}>
            <View style={styles.articleTitleView}>
              <Text style={styles.articleTitleText}>　　　美味しいお店</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }} />
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="white"
                onPress={() => this.moveRead()}
              />
            </View>
          </View>
          {/* 5行目 */}
          <View style={styles.articleLine}>
            <View style={styles.articleTitleView}>
              <Text style={styles.articleTitleText}>　　　その他</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }} />
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="white"
                onPress={() => this.moveRead()}
              />
            </View>
          </View>
        </View>
      )
    } else if (this.state.mode == 'read') {
      return (
        <View>
          <View
            style={[
              styles.screenTitleView,
              {
                flexDirection: 'row'
              }
            ]}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                marginLeft: 10
              }}
            >
              <Icon
                name="chevron-left"
                type="font-awesome"
                color="white"
                onPress={() => this.moveSelect()}
              />
            </View>
            <View style={{ flex: 7, alignItems: 'center' }}>
              <Text style={styles.screenTitleText}>イベント情報</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Icon name="search" type="font-awesome" color="white" />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
              <Icon
                name="edit"
                type="font-awesome"
                color="white"
                onPress={() => this.moveInput()}
              />
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', marginRight: 5 }}>
                  <Text style={styles.dateTimeText}>6/25</Text>
                  <Text style={styles.dateTimeText}>18:14</Text>
                  <Avatar
                    rounded
                    source={require('./../images/person1.png')}
                    activeOpacity={0.7}
                  />
                </View>
                <View style={{ flex: 4 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 4 }}>
                      <Text style={{ fontSize: 20, color: 'black' }}>
                        佐藤　陸
                      </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                      <Icon
                        name="pencil"
                        type="font-awesome"
                        onPress={() => this.moveInput()}
                      />
                    </View>
                  </View>
                  <Text style={{ fontSize: 16, color: 'blue' }}>
                    【マラソン大会へのお誘い】
                  </Text>
                  <Text style={{ fontSize: 12, color: 'blue' }}>
                    #スポーツ　#マラソン
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text>
                  今年もこの時期がやってまいりました！
                  {'\n'}
                  北海道の大自然の中を颯爽と走る事ができるマラソン大会です。
                  {'\n'}
                  自然あふれる風景を満喫しながら走りませんか？
                  {'\n'}
                  フルマラソンだけでなく、20kmや10kmもありますので、初心者の方も是非どうぞ。
                  {'\n'}
                  {'\n'}
                  申し込み用のホームページです{'\n'}
                  https://xxxxxxxxxx.jp/123456789-entry{'\n'}
                </Text>
              </View>
            </Card>
            {/* 2行目 */}
            <Card>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', marginRight: 5 }}>
                  <Text style={styles.dateTimeText}>7/3</Text>
                  <Text style={styles.dateTimeText}>23:31</Text>
                  <Avatar
                    rounded
                    source={require('./../images/person2.png')}
                    activeOpacity={0.7}
                  />
                </View>
                <View style={{ flex: 4 }}>
                  <Text style={{ fontSize: 20, color: 'black' }}>
                    佐々木　澪
                  </Text>
                  <Text style={{ fontSize: 16, color: 'blue' }}>
                    【ビアガーデン開催】
                  </Text>
                  <Text style={{ fontSize: 12, color: 'blue' }}>
                    #飲み会　#お店
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text>
                  どこよりも早く、会社の最寄り駅にてビアガーデンが開催されるようです。
                  {'\n'}
                  今年から始まるとの事で、イベントも盛り沢山みたいですね。
                  {'\n'}
                  {'\n'}
                  URLを貼っておきますので、是非見てください。{'\n'}
                  https://xxxxxxxxxx-xxxxx.jp{'\n'}
                  {'\n'}
                  ちなみに私は来週の金曜日にチームメンバーと繰り出そうと思っています！
                  {'\n'}
                </Text>
              </View>
            </Card>
            <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </View>
      )
    } else if (this.state.mode == 'input') {
      const txt =
        '今年もこの時期がやってまいりました！\n' +
        '北海道の大自然の中を颯爽と走る事ができるマラソン大会です。\n' +
        '自然あふれる風景を満喫しながら走りませんか？\n' +
        'フルマラソンだけでなく、20kmや10kmもありますので、初心者の方も是非どうぞ。\n\n' +
        '申し込み用のホームページです\n' +
        'https://xxxxxxxxxx.jp/123456789-entry'
      return (
        <View>
          <View
            style={[
              styles.screenTitleView,
              {
                flexDirection: 'row'
              }
            ]}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                marginLeft: 10
              }}
            >
              <Icon
                name="chevron-left"
                type="font-awesome"
                color="white"
                onPress={() => this.moveRead()}
              />
            </View>
            <View style={{ flex: 7, alignItems: 'center' }}>
              <Text style={styles.screenTitleText}>記事投稿</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }} />
          </View>
          <Card>
            <View>
              <View>
                <Text style={{ fontSize: 16, color: 'gray' }}>投稿先</Text>
                <TextInput
                  style={{ fontSize: 16, color: 'black', padding: 5 }}
                  value="イベント情報"
                />
              </View>
              <View>
                <Text style={{ fontSize: 16, color: 'gray' }}>タイトル</Text>
                <TextInput
                  style={{ fontSize: 16, color: 'black', padding: 5 }}
                  value="マラソン大会へのお誘い"
                />
              </View>
              <View>
                <Text style={{ fontSize: 16, color: 'gray' }}>タグ</Text>
                <TextInput
                  style={{ fontSize: 16, color: 'black', padding: 5 }}
                  value="スポーツ　マラソン"
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginButtom: 10
                }}
              >
                <Text style={{ fontSize: 16, color: 'gray', padding: 5 }}>
                  記事
                </Text>
                <TextInput
                  multiline={true}
                  numberOfLines={12}
                  style={{
                    fontSize: 16,
                    color: 'black',
                    textAlignVertical: 'top'
                  }}
                  value={txt}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Button
                  title="save"
                  onPress={() => this.moveRead()}
                  textStyle={{ fontSize: 30 }}
                  buttonStyle={{
                    backgroundColor: 'gray',
                    borderRadius: 10
                  }}
                  icon={{ name: 'sign-in', type: 'font-awesome' }}
                />
              </View>
            </View>
          </Card>
        </View>
      )
    }
  }
}
const styles = StyleSheet.create({
  screenTitleView: {
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#ff5622'
  },
  screenTitleText: {
    fontSize: 26,
    color: 'white',
    padding: 10
  },
  articleLine: {
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#660000',
    flexDirection: 'row'
  },
  articleTitleView: {
    flex: 8,
    alignItems: 'center'
  },
  articleTitleText: {
    fontSize: 26,
    color: 'white',
    padding: 10
  },
  nonReadMark: {
    color: 'white',
    backgroundColor: '#FF3333',
    padding: 0,
    borderRadius: 40,
    borderWidth: 0,
    borderColor: 'white',
    overflow: 'hidden'
  },
  dateTimeText: {
    fontSize: 14,
    color: 'gray'
  }
})
