import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, View, Text } from "react-native";

const FontContext = createContext({});

export function FontProvider({ children }) {

    const [loaded, error] = useFonts({
        thin: require("../../assets/fonts/AlegreyaSans-Thin.ttf"),
        bold: require("../../assets/fonts/AlegreyaSans-Bold.ttf"),
        italic: require("../../assets/fonts/AlegreyaSans-Italic.ttf"),
        medium: require("../../assets/fonts/AlegreyaSans-Medium.ttf"),
        regular: require("../../assets/fonts/AlegreyaSans-Regular.ttf"),
        black: require("../../assets/fonts/AlegreyaSans-Black.ttf"),
    });
    if (!loaded && !error) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
                <Text style={{fontSize:20}}>CARREGANDO AS FONTES..</Text>
                <ActivityIndicator size={60} color="#b4c5d8" />
            </View>
        );
    }

    return (
        <FontContext.Provider value={{loaded}}>
            {children}
        </FontContext.Provider>
    );
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}