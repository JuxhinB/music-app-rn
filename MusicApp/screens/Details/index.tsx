import React from 'react';
import {ScrollView, View} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
//
import global from '../../global';
import styles from '../../styles';
import theme from '../../styles/theme';
import {Routes, ScreenProps} from '../../Types';
import {style} from './details.style';

interface DetailsScreenProps extends ScreenProps<Routes.Details> {}

function DetailsScreen({route}: DetailsScreenProps) {
  const {artist, title, release_year, image_url} = route.params.itemDetails;

  return (
    <global.components.Layout>
      <ScrollView style={styles.general.flex_1}>
        <View style={style.coverWrap}>
          <global.components.Image
            uri={image_url}
            style={styles.general.flex_1}
          />
        </View>

        <View style={style.contentWrap}>
          <View style={style.contentHeaderWrap}>
            <View>
              <global.components.Text style={style.contentReleaseYear}>
                {`${release_year}`}
              </global.components.Text>
              <global.components.Text style={style.contentArtist}>
                {artist}
              </global.components.Text>
              <global.components.Text
                style={style.contentTitle}>{`${title}`}</global.components.Text>
            </View>

            <View>
              <global.components.IconButton>
                <MCIcon
                  name="heart"
                  size={20}
                  color={`${theme.colors.primary500}`}
                />
              </global.components.IconButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </global.components.Layout>
  );
}

export default DetailsScreen;
