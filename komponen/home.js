import React, { Component } from 'react'; 
import { Constants, MapView } from 'expo';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';
class Home extends React.Component {
state = {
    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Header>
          <Body>
            <Title>Best App Ever!</Title>
          </Body>
        </Header>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>

          <Button full primary style={{ paddingBottom: 4 }}>
            <Text> Login n </Text>
          </Button>
          <Button full light primary><Text> Sign Up </Text></Button>
          <MapView
            style={{ alignSelf: 'stretch', height: 200 }}
            region={this.state.mapRegion}
            onRegionChange={this._handleMapRegionChange}
          />
        
        </Form>
      </Container>
    );
  }
}

export default Home;
