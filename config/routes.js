import { StackNavigator } from 'react-navigation';

import RootNavigator from '../navigation/RootNavigation';
import LandingPage from '../screens/LandingPage';

export default StackNavigator(
    {
        Login: {
            screen: LandingPage
        }
    }
);