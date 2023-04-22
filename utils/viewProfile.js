import { View,Text, Scroll } from "react-native-web";
import {images} from '../constants';
const ViewProfile= ({url}) => {
    return(
        <View>
            <Image  
                source= {{uri:'../assets/images/me.png'}}
                resizeMode= "contain"
            />
            <Text>
                Name: Vighnesh
            </Text>
            <Text>
                Username: lagger
            </Text>
        </View>
    );
};

export default ViewProfile;