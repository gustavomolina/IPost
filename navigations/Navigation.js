import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LikedPosts from '../screens/LikedPosts';
import PostsList from '../screens/PostsList';

const Navigation = createStackNavigator({
  posts:  PostsList,
  likes: LikedPosts
});

export default createAppContainer(Navigation);