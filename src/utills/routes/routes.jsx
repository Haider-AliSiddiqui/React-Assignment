// All routes are defined here
import {Routes, Route} from "react-router-dom";
import Counter from '../../Pages/counter/counter';
import Ourmenu from "../../Pages/ourmenu/ourmenu";
import ColorChanger from "../../Pages/colorChanger/colorChanger";

const AppRoutes = () => {
    return(
            <Routes> 
                <Route path='/' element={<Counter/>}/>
                <Route path='/ourmenu' element={<Ourmenu/>}/>
                <Route path='/colorChanger' element={<ColorChanger/>}/>
            </Routes> 
    )
}
export default AppRoutes;
