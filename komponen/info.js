import * as React from 'react'; 
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ListView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import AssetExample from '../components/AssetExample';
import { Card } from 'react-native-paper';

const { width } = Dimensions.get('window');

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class Info extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      rowData: ds.cloneWithRows([]),
    };
  }
  componentWillMount() {
    let postData = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    fetch('http://api.teknonusantara.com/api_bangunan/index_get', postData)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          rowData: ds.cloneWithRows(responseJson),
          refresh: false,
          isLoading: false,
        });
      })
      .catch(error => {
        Alert.alert('error cek lagi');
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'purple' }}>
        <ListView
          dataSource={this.state.rowData}
          enableEmptySections={true}
          onEndReachedThreshold={500}
          renderRow={rowData => (
            <TouchableOpacity>
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'white' }}>{rowData.npm}</Text>
                <Text>{rowData.barang}</Text>
                <Text>{rowData.deskripsi}</Text>
                <Text>{rowData.harga}</Text>
                
              </View>
              <View style={styles.dividerHorizontal} />
              <View style={{ marginBottom: 10 }} />
            </TouchableOpacity>
          )}
        />


    <Text style={[styles.emptyText,
      (this.props.darkMode ? styles.cellCopyDark : null)
      ]}>
      You do not have any stories saved.
    </Text>



      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  dividerHorizontal: {
    backgroundColor: '#ebebeb',
    height: 1,
    width: width * 0.94,
    alignSelf: 'center',
  },
 
});



export default Info;
