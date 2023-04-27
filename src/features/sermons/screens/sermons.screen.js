import React from "react";
import { FlatList, View } from 'react-native';
import { SermonItemCard } from "../components/sermon-item.component";


export const SermonsScreen = () => {


    return (
        <View
            style={{
                backgroundColor: '#F1F1F1',
                flex: 1,
            }}
        >
            <FlatList
                data={[
                    { id: 1 },
                    { id: 2 },
                    { id: 2 },
                    { id: 2 },
                    { id: 2 },
                    { id: 2 },
                ]}
                renderItem={() => <SermonItemCard />}
                //renderItem={({ item }) => <SermonItemCard sermon={item} />}
                keyExtractor={item => item.id}
                numColumns={3}
                columnWrapperStyle={{
                }}
            />
        </View>
    )
}