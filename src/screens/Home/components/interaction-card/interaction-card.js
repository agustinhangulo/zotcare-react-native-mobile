import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {Button, Card} from 'react-native-paper';

const InteractionCard = props => {
  const {name, id, description, image, available} = props;
  const navigation = useNavigation();

  return (
    <Card>
      <Card.Title title={name} subtitle={description} />
      {image && <Card.Cover source={{uri: image}} />}
      <Card.Actions>
        <Button
          disabled={!available}
          onPress={() => {
            navigation.push('interaction', {id});
          }}>
          Open Interaction
        </Button>
      </Card.Actions>
    </Card>
  );
};

InteractionCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  available: PropTypes.bool,
};

InteractionCard.defaultProps = {
  description: '',
  image: '',
  available: true,
};

export default InteractionCard;
