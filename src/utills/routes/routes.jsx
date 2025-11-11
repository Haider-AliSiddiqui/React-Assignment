// All routes are defined here
import { Routes, Route } from "react-router-dom";
import CounterApp from "../../Pages/CounterApp/CounterApp";
import OurMenu from "../../Pages/OurMenu/OurMenu";
import ColorChanger from "../../Pages/ColorChanger/ColorChanger";

const AppRoutes = () => {
    return (
        <Routes> 
            <Route path='/' element={<CounterApp />} />
            <Route path='/ourmenu' element={<OurMenu />} />
            <Route path='/colorChanger' element={<ColorChanger />} />
        </Routes> 
    );
};

export default AppRoutes;