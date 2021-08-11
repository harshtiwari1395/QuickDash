import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FcUpload } from "react-icons/fc";
import ControlledAccordions from './accordian';
import AccordianTable from '../components/accordianTable/accordian';
import BasicTable from './table';
import TabulatorTable from './reactTabulator';
import PureReactTable from './pureReactTable';
const TabComponent= () => (
  <Tabs>
    <TabList>
      <Tab>
          <div style={{display: "flex", flexDirection: "column"}}> 
          <div>Experience Summary</div>
          <div>Data consumption: 812MB<FcUpload /></div>
          <div>Total Voice Mou: 900 min <FcUpload /></div>
          </div>
      </Tab>
      <Tab>
      <div style={{display: "flex", flexDirection: "column"}}> 
          <div>Experience Summary</div>
          <div>Data consumption: 812MB  </div>
          <div>Total Voice Mou: 900 min</div>
          </div>
      </Tab>
      <Tab>
      <div style={{display: "flex", flexDirection: "column"}}> 
          <div>Experience Summary</div>
          <div>Data consumption: 812MB  </div>
          <div>Total Voice Mou: 900 min</div>
          </div>
      </Tab>
      <Tab>
      <div style={{display: "flex", flexDirection: "column"}}> 
          <div>Experience Summary</div>
          <div>Data consumption: 812MB  </div>
          <div>Total Voice Mou: 900 min</div>
          </div>
      </Tab>
    </TabList>

    <TabPanel>
    <BasicTable/>
    </TabPanel>
    <TabPanel>
    <AccordianTable/>
    </TabPanel>
    <TabPanel>
    <PureReactTable/>
    </TabPanel>
    <TabPanel>
    tab4
    </TabPanel>
  </Tabs>
);
export default TabComponent;