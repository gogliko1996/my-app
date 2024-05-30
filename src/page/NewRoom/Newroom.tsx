import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "../../utils/hooks/usenavigation";


export const Newroom:React.FC = () => {
    const location = useLocation();
    const {goback} = useNavigation()
    return(
        <div>
            <p>
                {location.pathname}
            </p>
            <button onClick={() => goback()}>
                go back
            </button>
        </div>
    )
}