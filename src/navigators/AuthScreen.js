import {View,StyleSheet,StatusBar,ActivityIndicator} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {AppStackName,AuthStackName} from "./NavigatorConstants";

class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
     componentWillMount() {
        this.validateToken();
    }
    validateToken = () => {
        let userToken = await AsyncStorage.getItem("Token");
        this.props.navigation.navigate(userToken ? AppStackName : AuthStackName);
    }
    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

export default AuthScreen;