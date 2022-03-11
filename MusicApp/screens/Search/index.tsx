import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, FlatList, TextInput} from 'react-native';
//
import global from '../../global';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  selectVideosBySearch,
  setVideosBySearch,
} from '../../store/slices/videosSlice';
import theme from '../../styles/theme';
import {Routes, ScreenProps, Video} from '../../Types';
import {ListItem} from '../CategoryExtended';
import {style} from './search.style';

interface SearchScreenProps extends ScreenProps<Routes.Search> {}

function Search({}: SearchScreenProps) {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const videos = useAppSelector(selectVideosBySearch);

  const renderItem = ({item}: {item: Video}) => <ListItem item={item} />;

  return (
    <global.components.StaticLayout>
      <>
        <TextInput
          style={style.input}
          placeholderTextColor={theme.colors.gray600}
          placeholder={t('screens.search.input-placeholder')}
          onChangeText={text => {
            dispatch(setVideosBySearch(text));
          }}
        />

        <FlatList
          contentContainerStyle={style.contentContainer}
          style={style.list}
          data={videos}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={<View></View>}
        />
      </>
    </global.components.StaticLayout>
  );
}

export default Search;
