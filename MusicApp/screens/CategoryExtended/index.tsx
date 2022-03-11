import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//
import global from '../../global';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  selectVideosByGenre,
  setSelectedGenres,
} from '../../store/slices/videosSlice';
import {Routes, ScreenProps, Video} from '../../Types';
import {style} from './categoryExtended.style';

interface CategoryExtendedScreenProps
  extends ScreenProps<Routes.CategoryExtended> {}

function CategoryExtended({route}: CategoryExtendedScreenProps) {
  const {itemDetails} = route.params;

  const dispatch = useAppDispatch();
  const videos = useAppSelector(selectVideosByGenre);

  useEffect(() => {
    if (itemDetails) {
      dispatch(setSelectedGenres([itemDetails]));
    }
  }, [itemDetails, dispatch]);

  const renderItem = ({item}: {item: Video}) => <ListItem item={item} />;

  return (
    <global.components.StaticLayout>
      <>
        <global.components.Text style={style.title}>
          {itemDetails.name}
        </global.components.Text>
        <FlatList
          contentContainerStyle={style.contentContainer}
          style={style.list}
          data={videos}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </>
    </global.components.StaticLayout>
  );
}

export default CategoryExtended;

export function ListItem({item}: {item: Video}) {
  const {navigate} = useNavigation();
  return (
    <global.components.Touchable
      style={style.itemWrap}
      onPress={() => {
        navigate({
          name: Routes.Details,
          params: {
            itemDetails: item,
          },
        });
      }}>
      <>
        <global.components.Image style={style.image} uri={item.image_url} />
        <View style={style.contentWrap}>
          <global.components.Text
            style={style.songArtist}
            numberOfLines={1}>{`${item.artist}`}</global.components.Text>
          <global.components.Text
            style={style.songTitle}
            numberOfLines={1}
            ellipsizeMode="tail">{`${item.title}`}</global.components.Text>
        </View>
      </>
    </global.components.Touchable>
  );
}
