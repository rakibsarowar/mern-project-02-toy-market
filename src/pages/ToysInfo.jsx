import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FilterData1 from './FilterData1';
import FilterData2 from './FilterData2';
import FilterData3 from './FilterData3';

const ToysInfo = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('https://easymeal-server-rakibsarowar.vercel.app/chefs/')
            .then(res => res.json())
            .then((data) => setAllToys(data))
    }, [])
    // console.log(allToys);
    const { id, likes, name, picture, recipes, years_of_experience } = allToys;
    return (
        <>
            <div className='flex justify-center mb-10'>
                <Tabs>
                    <TabList className="flex flex-col md:flex-row">
                        <Tab><span className='font-bold'>LEGO CITY</span></Tab>
                        <Tab><span className='font-bold '>LEGO STAR WARS</span></Tab>
                        <Tab><span className='font-bold '>LEGO ARCHITECTURE</span></Tab>
                    </TabList>

                    <TabPanel>
                      <FilterData1></FilterData1>
                    </TabPanel>

                    <TabPanel>
                        <FilterData2></FilterData2>
                    </TabPanel>

                    <TabPanel>
                        <FilterData3></FilterData3>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default ToysInfo;