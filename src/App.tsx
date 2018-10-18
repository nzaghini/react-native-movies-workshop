import React from "react";
import { AppNavigator } from "./common/AppNavigator";

class App extends React.Component {
    
    getWelcomeMessage(name: string): string {
        return `Hello ${name}`;
    }

    render() {
        return (
            <AppNavigator />
        );
    }
    
}

export default App;
