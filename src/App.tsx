import React from "react";
import { Text, SafeAreaView } from "react-native";

class App extends React.Component {
    
    getWelcomeMessage(name: string): string {
        return `Hello ${name}`;
    }

    render() {
        return (
            <SafeAreaView>
                <Text>{this.getWelcomeMessage("TypeScript")}</Text>
            </SafeAreaView>
        );
    }
    
}

export default App;
