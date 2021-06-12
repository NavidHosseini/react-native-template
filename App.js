import React from "react"
import { I18nManager, View, StatusBar, Text } from "react-native"

import { Provider } from "./states/Context"
import { ProviderColor } from "./states/ContextColor"
import { ProviderAllText } from "./states/ContextAllText"

const App = () => {
  I18nManager.forceRTL(true)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor={'#0f527c'} />
      <View>
        <Text>asssss</Text>
      </View>
    </View>

  )
}

export default () => {
  return (
    <ProviderAllText>
      <Provider>
        <ProviderColor>
          <App />
        </ProviderColor>
      </Provider>
    </ProviderAllText>
  )
}
