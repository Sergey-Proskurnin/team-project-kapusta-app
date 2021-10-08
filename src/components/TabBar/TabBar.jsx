import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
// import { useStyles } from 'components/TabBar/useStyles';
import TabPanel from 'components/TabPanel';
import { useBreakpoints } from 'hooks/useBreakpoints';

const TabBar = ({ tabs, fullWidth, variant, onChange }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].label);

  const isMd = useBreakpoints('md');

  const handleChangeTab = newValue => {
    if (onChange) {
      onChange(newValue);
    }
    setCurrentTab(newValue);
  };

  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        orientation="horizontal"
        variant={
          variant ||
          (isMd ? (fullWidth ? 'fullWidth' : 'standard') : 'fullWidth')
        }
      >
        {tabs.map(tab => (
          <Tab key={tab.label} label={tab.label} value={tab.label} />
        ))}
      </Tabs>
      {tabs.map(
        tab =>
          currentTab === tab.label && (
            <TabPanel key={tab.label} value={currentTab} index={tab.label}>
              {tab.tabContent}
            </TabPanel>
          ),
      )}
    </>
  );
};

export default TabBar;
