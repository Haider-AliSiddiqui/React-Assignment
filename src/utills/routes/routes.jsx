// All routes are defined here
import { Routes, Route } from "react-router-dom";
import Counter from '../../Pages/Counter/Counter';
import OurMenu from "../../Pages/OurMenu/OurMenu";
import ColorChanger from "../../Pages/ColorChanger/ColorChanger";

const AppRoutes = () => {
    return (
        <Routes> 
            <Route path='/' element={<Counter />} />
            <Route path='/ourmenu' element={<OurMenu />} />
            <Route path='/colorChanger' element={<ColorChanger />} />
        </Routes> 
    );
};

export default AppRoutes;
