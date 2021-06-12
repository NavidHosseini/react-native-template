import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'



const Stack = createStackNavigator()

const StackNavigator = () => {


    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home}
                options={{
                    //  headerTitleStyle: { fontFamily: 'Sans', color: textScreenColor, fontSize: 14 },
                    headerTitleAlign: "center",
                    //headerStyle: { backgroundColor: screenColor },
                    //  headerTintColor: textScreenColor,
                    //   title: langText.Subscription,
                    //  headerLeft: () => <BackArrow />
                }} />
        </Stack.Navigator>
    )
}

export default StackNavigator
