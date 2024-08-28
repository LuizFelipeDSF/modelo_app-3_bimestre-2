import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';


export default function App() {

  const { signIn, signOut } = useAuth();

  const handleEntrarSuper = () => {
    try {
      signIn({ email: "super@email.com", password: "Super123!" });
      router.replace("/");
    } catch (error) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nona tentativa</Text>

      <Button title="Signin " onPress={() => signIn({ email: "super@email.com", password: "Super123!" })} />

      <Button title="Signin Adm" onPress={() => signIn({ email: "adm@email.com", password: "Adm123!" })} />

      <Button title="Signin user" onPress={() => signIn({ email: "user@email.com", password: "User123!" })} />

      <Button title="SignOut" onPress={() => signOut()} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,

  },
  title: {
    fontSize: 20,
    fontFamily: 'thin',
  },

});