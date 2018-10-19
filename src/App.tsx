import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AppNavigator } from "./common/AppNavigator";

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
});

class App extends React.Component {
    
    render() {
        return (
            <ApolloProvider client={client} >
                <AppNavigator />
            </ApolloProvider>
        );
    }
    
}

export default App;
