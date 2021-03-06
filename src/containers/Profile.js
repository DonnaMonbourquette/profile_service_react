import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ProfileInfo from '../components/GQLProfileInfo';
import OrgChart from '../components/GQLOrgChart';

const Profile = ({ match }) => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <ProfileInfo gcID={match.params.id} />
    </Grid.Column>
    <Grid.Column>
      <OrgChart gcID={match.params.id} />
    </Grid.Column>
  </Grid>
);

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

Profile.defaultProps = {
  match: { params: { id: 0 } },
};

export default Profile;
