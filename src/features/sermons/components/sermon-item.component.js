import React from "react";
import { Image } from "react-native";

export const SermonItemCard = ({ sermon = {} }) => {

    // this is a placeholder sermon to make sure flatlist works
    const {
        id = "asdfhfe8j2f3ojdfwo8er",
        title = "Maundy Thursday",
        description = "Proident excepteur ad velit minim anim officia ex.",
        artwork = require("../../../../assets/artwork/maundythursday.jpg"),
    } = sermon;

    return (
        <Image
            source={artwork}
            style={{
                width: 143,
                height: 143,
            }}
            key={id}
            title={title}
            description={description}
        />
    )
}