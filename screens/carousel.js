import React from 'react'
import {View, Text} from 'react-native'
import carausel from '../component/Carousel'

import { dummyData} from '../data/data'

const Carousel = ({navigation}) =>{
    return (
        <View>
           <Carousel data = {dummydata}/>
        </View>
    )
}

export default Carousel