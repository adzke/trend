import * as React from 'react';
import { Avatar, Button, Card, Text, Icon, MD3Colors } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const MyComponent = (url) => (
  <Card mode='contained' style={{backgroundColor: 'black'}}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent}/> */}
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text style={{color: 'white'}} variant="bodyMedium">Exploring the options we have</Text>
    </Card.Content>
    <Card.Actions>
        <Icon
          source="cards-heart"
          color={MD3Colors.error50}
          size={20}
        />
    </Card.Actions>

  </Card>
);

