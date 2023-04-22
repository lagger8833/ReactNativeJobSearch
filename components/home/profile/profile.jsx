import React from "react";
import { View,Text,ScrollView} from "react-native";
import { ScreenHeaderBtn, icons, images,SIZES, COLORS} from '../../components';
import styles from "./profile.style";
const Profile = () => {
    <ScrollView>
        <Image
            source={{uri:images.profile}}
            resizeMode = "contain"
            />
        <Text>Name : Vighnesh</Text>
        <Text> UserName : lagger </Text>
        <Text> Date of Birth : 02 June 1998 </Text>
        <Text> Gender : Male</Text>
    </ScrollView>
}

export default Profile;