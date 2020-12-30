import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Button } from 'react-native-paper';
// import { DataGrid } from '@material-ui/data-grid';
// import Autocomplete from '@material-ui/lab/Autocomplete';

export default function App() {

  const _goBack = () => alert('Went back');

  // const _handleSearch = () => console.log('Searching');

  // const _handleMore = () => console.log('Shown more');

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);




  const [data, setDate] = useState([
    { main: "Services 1", offer: "10%", discription: "Lorem ipsum dolor sit amet, consectetur " },
    { main: "Services 1", offer: "20%", discription: "Lorem ipsum dolor sit amet, consectetur" },
    { main: "Services 1", offer: "30%", discription: "Lorem ipsum dolor sit amet, consectetur" },
    { main: "Services 1", offer: "10%", discription: "Lorem ipsum dolor sit amet, consectetur" },
    { main: "Services 1", offer: "10%", discription: "Lorem ipsum dolor sit amet, consectetur" },
    { main: "Services 1", offer: "20%", discription: "Lorem ipsum dolor sit amet, consectetur" },
    { main: "Services 1", offer: "10%", discription: "Lorem ipsum dolor sit amet, consectetur" },
    { main: "Services 1", offer: "40%", discription: "Lorem ipsum dolor sit amet, consectetur" },
    { main: "Services 1", offer: "10%", discription: "Lorem ipsum dolor sit amet, consectetur" },
    { main: "Services 1", offer: "00%", discription: "Lorem ipsum dolor sit amet, consectetur" },
  ])
  return (
    <View >
      {/* Top Headding Starts */}
      <Appbar.Header style={{ backgroundColor: "#e1fafc" }}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Available Services In Hospital" subtitle="" />
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
      {/* Top Headding ends */}
      {/* search bar starts */}
      <View>
        <Searchbar style={styles.searchstyle}
          placeholder="Search Here"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
       {/* search bar ends */}
       {/* filter starts */}
      <View style={{ flex: 1, flexDirection: "row", textAlign: "right", margin: 10 }}>
        <Button icon="filter" style={styles.filterA}>A-Z</Button>
        <Button icon="filter" style={styles.filterB}>A-Z</Button>
      </View>
        {/* filter ends */}
        {/* card starts */}
      <FlatList data={data} style={{}}
        renderItem={({ item }) => (
          <View style={styles.main} >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Button icon="check" style={styles.checkBTN}></Button>
              <View >
                <View style={{ flex: 1, flexDirection: "row", }}>
                  <Text style={{ fontWeight: "bold" }}> {item.main}</Text>
                  <Text style={styles.offer}> {item.offer}</Text>
                </View>
                <Text style={styles.description}>{item.discription}</Text>
              </View>
            </View>
          </View>
        )} />
         {/* card endss */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',

  },
  searchstyle: { margin: 15, oufocus: "none" },
  filterA: { textAlign: "start", marginLeft: 20 },
  filterB: { textAlign: "right", marginLeft: 150, color: "black" },
  main: { marginLeft: 10, marginRight: 10, paddingBottom: 10, marginTop: 10, borderBottomWidth: 1, borderBottomColor: "#c7bfa9" },
  checkBTN: { color: "green", marginTop: 10 },
  offer: { marginLeft: 140, fontWeight: "bold" },
  description: { textAlign: "center", marginTop: 15, color: "#32a2a8" },
});
