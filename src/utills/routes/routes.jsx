// All routes are defined here
import {Routes, Route} from "react-router-dom"

import {Routes, Route} from "react-router-dom";
import Counter from '../../Pages/counter/counter';
import OurMenu from "../../Pages/ourMenu/ourMenu";
import ColorChanger from "../../Pages/ColorChanger/ColorChanger";

const AppRoutes = () => {
    return(
        
            <Routes> 
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/ourMenu' element={<OurMenu/>}/>
                <Route path='/colorChanger' element={<ColorChanger/>}/>
            </Routes>
        
    )
}
export default AppRoutes;
