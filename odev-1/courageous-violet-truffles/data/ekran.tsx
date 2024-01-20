import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { liste } from '../data/liste'

const ConcertsScreen = () => {

  return (<>
    <ScrollView style={{ paddingLeft: '3%', paddingRight: '3%' }}>

      {
        liste.map((item, index) => {
          return <Card key={item.Id}>
            <Card.Cover source={{ uri: item.Image }} />
            <Card.Title titleStyle={{ fontSize: 25 }} title={item.Name} subtitle={item.UnitPrice} />
            <Card.Content>
            
            </Card.Content>
          </Card>
        }
        )
      }



    </ScrollView>


  </>)
}

export default ConcertsScreen