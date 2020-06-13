import { createSwitchNavigator, createAppContainer } from "react-navigation";

const MainStack = createAppContainer(
    createSwitchNavigator({

    }),
    {
        initialRouteName: "AuthScreen"
    }
)