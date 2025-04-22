import React from 'react';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
interface DuyLongDictionary {
    label: string;
    icon: React.ReactNode;
    href: string;
}

const DuyLongNavigator: React.FC<{ label_icons: DuyLongDictionary[], sx?: any }> = ({label_icons, sx}) => {
    // const [value, setValue] = useState(0);
    return (
        <BottomNavigation sx={{width: '100%', ...sx}} style={{border: '2px solid #6172FE'}}>
            {label_icons.map((item, index) => (
                <BottomNavigationAction key={index} label={item.label} icon={item.icon} style={{border: '1px solid black'}} href={item.href}/>
            ))}
        </BottomNavigation>
    )
}
export default DuyLongNavigator;
