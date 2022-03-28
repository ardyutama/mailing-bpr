import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const CustomTabs = ({ data,currentValue,value}) => {
    
    const handleChange = (event, newValue) => {
        currentValue(newValue);
    };
    return (
        <Tabs onChange={handleChange} value={value}>
            {data.map((value, key) => {
                return <Tab label={value.label} value={key} key={key}/>;
            })}
        </Tabs>
    );
};

export default CustomTabs;
