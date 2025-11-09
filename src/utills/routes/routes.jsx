// All routes are defined here
import {Routes, Route} from "react-router-dom";
import Counter from '../../Pages/counter/counter';
import ourmenu from "../../Pages/ourmenu/OurMenu";
import ColorChanger from "../../Pages/colorChanger/colorChanger";

const AppRoutes = () => {
    return(
            <Routes> 
                <Route path='/' element={<Counter/>}/>
                <Route path='/ourmenu' element={<ourmenu/>}/>
                <Route path='/colorChanger' element={<ColorChanger/>}/>
            </Routes> 
    )
}
export default AppRoutes;
