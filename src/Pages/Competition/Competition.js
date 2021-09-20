import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';

import Teams from '../Teams/Teams';
import Matches from '../Matches/Matches';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Competition() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Календарь лиги" />
          <Tab label="Список команд" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Matches />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Teams />
      </TabPanel>
    </Box>
  )
}

export default Competition
