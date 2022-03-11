import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
//
import global from '../../global';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  selectGenres,
  selectReload,
  setReload,
} from '../../store/slices/videosSlice';
import {Routes, ScreenProps} from '../../Types';
import {style} from './categories.style';

interface CategoriesScreenProps extends ScreenProps<Routes.Categories> {}

function Categories({}: CategoriesScreenProps) {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const reload = useAppSelector(selectReload);
  const genres = useAppSelector(selectGenres);
  const dispatch = useAppDispatch();

  return (
    <global.components.Layout
      refreshing={reload}
      onRefresh={() => {
        dispatch(setReload(true));
      }}>
      <>
        <global.components.Text style={style.title}>
          {t('screens.categories.section-label')}
        </global.components.Text>
        {genres.map(item => {
          return (
            <global.components.Touchable
              key={item.id}
              style={style.item}
              onPress={() => {
                navigate({
                  name: Routes.CategoryExtended,
                  params: {
                    itemDetails: item,
                  },
                });
              }}>
              <global.components.Text style={style.itemText}>
                {item.name}
              </global.components.Text>
            </global.components.Touchable>
          );
        })}
      </>
    </global.components.Layout>
  );
}

export default Categories;
