import React from 'react';
import DuyLongNavigator from "../Components/DuyLongNavigator.tsx";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import {Container} from "@mui/material";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const  HomePage:React.FC=()=>{
    const navigationItems = [
        {label: 'Home', icon: <HomeIcon/>, href: '/'}, // Added href for Home
        {label: 'Favorites', icon: <FavoriteIcon/>,href: '/favorites'},
        {label: 'Profile', icon: <PersonIcon/>,href: '/profile'}
    ];
    return (
        <Container disableGutters maxWidth={false}
                    style={{width: '100vw'}}>
            <DuyLongNavigator  sx={{
                display: 'flex',
                justifyContent: 'space-between',
                top: 0,
                width: '100%',

                // Add your custom styles here
                backgroundColor: '#f5f5f5',
                boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',

            }} label_icons={navigationItems} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeContent/>}/>
                    <Route path="/favorites" element={<div>Favorites</div>}/>
                    <Route path="/profile" element={<div>Profile</div>}/>
                </Routes>
            </BrowserRouter>

        </Container>)
}
const HomeContent:React.FC=()=>{
    return (
        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center',border: '1px solid black',height:'100vh'}}>
            <h1>HI</h1>
        </div>
    );
}
export default HomePage;


