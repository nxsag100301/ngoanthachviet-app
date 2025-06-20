import { useEffect } from 'react';
import Index from './src/index';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // ẩn splash sau khi load xong
  }, []);
  return <Index />;
};

export default App;
