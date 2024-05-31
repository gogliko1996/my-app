import { Spacer } from "../../../components/Spacer/Spacer";
import { SwitchCont } from "../../../components/SwitchCont/SwitchCont";
import { SwitchContArray } from "../../../constant/optional";





export const Integration: React.FC = () => {
    return (
      <Spacer mt={150}>
        <SwitchCont opionals={SwitchContArray}/>
      </Spacer>
    );
  };