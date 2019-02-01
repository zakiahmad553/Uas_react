import React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

class ProfileSekolah extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Text style={{fontSize:28, color:"black", fontWeight:'bold'}}>
          Info Sekolah
        </Text>

        <Text style={{fontSize:18, color:"black"}}>
        Pendidikan Budi Pekerti{'\n'}
        Pendidikan Budi Pekerti (PBP) yang Menekankan Pada 6 Pilar Yaitu : {'\n'}
        1. Dapat Dipercaya {'\n'}
        2. Tanggung Jawab {'\n'} 
        3. Menghormati {'\n'}
        4. Fairness/Sportif {'\n'}
        5. Peduli {'\n'}
        6. Warga Negara Yang Baik{'\n'} {'\n'}

        Fasilitas Terlengkap {'\n'}
        Fasilitas Yang Disediakan Oleh Sekolah Wijaya Putra Meliputi : {'\n'}
        - Ruang Kelas ber-AC {'\n'}
        - Laboratorium MIPA {'\n'}
        - Laboratorium Bahasa {'\n'}
        - Laboratorium Kejuruan (Akuntansi,Multimedia,TKJ) {'\n'}
        - Bengkel Otomotif {'\n'}
        - Lapangan Futsal,Basket,dan Bola Voli {'\n'}
        - dll.{'\n'}{'\n'}

        Free Wi-Fi {'\n'}
        Semua Area Tercover Wi-Fi
        </Text>

        

        
     
      </View>
    );
  }
}

export default ProfileSekolah;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});