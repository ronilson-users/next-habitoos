import { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import { Button } from '@/components/Button';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const googleOAuth = useOAuth({ strategy: "oauth-google" });

  async function onGoogleSignin() {
    try {
      setIsLoading(true);
      console.log('Starting OAuth flow');

      const oAuthFlow = await googleOAuth.startOAuthFlow();
      console.log('oAuthFlow:', oAuthFlow);

      if (oAuthFlow.authSessionResult?.type === "success") {
        console.log('OAuth success:', oAuthFlow.authSessionResult);

        if (googleOAuth.setActive) {
          console.log('Setting active session');
          await googleOAuth.setActive({ session: oAuthFlow.createdSessionId });
          console.log('Session set active');
        } else {
          console.error('googleOAuth.setActive is undefined');
        }
      } else {
        console.log('OAuth flow was not successful:', oAuthFlow.authSessionResult);
      }
    } catch (error) {
      console.error('Error during sign-in:', error.message, error.stack);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync().then(() => console.log('WebBrowser warmed up')).catch(console.error);
    return () => {
      WebBrowser.coolDownAsync().then(() => console.log('WebBrowser cooled down')).catch(console.error);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={onGoogleSignin}
        icon="logo-google"
        title="Entrar com Google"
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    gap: 12,
  }
});