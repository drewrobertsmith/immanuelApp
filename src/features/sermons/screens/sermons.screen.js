import React from "react";
import { FlatList, View, Image } from 'react-native';


export const SermonsScreen = () => {

    const Item = ({ artwork }) => (
        <Image
            source={artwork}
            style={{
                //flex: 1,
                width: 143,
                height: 143,

            }}
        />


    )


    const DATA = [
        {
            id: 'asdfhfe8j2f3ojdfwo8er',
            title: 'Maundy Thursday',
            description: 'lorum ipsem',
            artwork: require("../../../../assets/artwork/maundythursday.jpg"),
        },
        {
            id: 'as9dasda98sd',
            title: 'Good Friday',
            description: 'lorum ipsem',
            artwork: require("../../../../assets/artwork/goodfriday.jpg"),
        },
        {
            id: 'lk23j4lk23j4lk234j',
            title: 'Easter Sunday',
            description: 'lorum ipsem',
            artwork: require("../../../../assets/artwork/easter.jpg"),
        },
        {
            id: 'lk23j4lk23423j4lk234j',
            title: 'Easter Sunday',
            description: 'lorum ipsem',
            artwork: require("../../../../assets/artwork/easter.jpg"),
        },
    ];




    return (
        <View
            style={{
                backgroundColor: '#F1F1F1',
                flex: 1,
            }}
        >
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} description={item.description} artwork={item.artwork
                } />}
                keyExtractor={item => item.id}
                numColumns={3}
                columnWrapperStyle={{
                }}
            />
        </View>
    )
}