import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CityDetails from './CityDetails';

const Navigator = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      header: {
        visible: false
      },
    },
  },
  City: { 
    screen: CityDetails ,
    navigationOptions: {
      title: ({ state }) => state.params.name,
    },
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'screen', 
});

export default Navigator;