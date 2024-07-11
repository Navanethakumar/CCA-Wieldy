import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './action/Color';
import GetCallCentreUserDD from './action/UserDD';
import GetCCATotalCalls from './action/CallsWidget';
import GetCallCentreFCRWidget from './action/Fcrwidget';
import GetTransferDD from './action/TransferWidget';
import GetConferenceWidget from './action/ConferenceWidget';
import GetUserDetails from './action/GetUserDetails';
import GetImporsinationDD from './action/ImpersonationDD';
import GetServiceLevelWidget from './action/ServiceLevel';
import GetCallVolumePrediction from './action/CallVolumePrediction';
import GetSplitGroup from './action/SplitGroup';
import GetBottom10AgentFCR from './action/Bottom10AgentFcr';
import GetTop10AgentFCR from './action/Top10AgentFcr';
import GetDispositionPieChart from './action/DispositionPieChart';
import GetCallByRegionDrilldown from './action/CallByRegionDrilldown';
import GetCallByRegionMap from './action/CallByRegionMap';
import GetTopCallDurationAnomaly from './action/TopCallDurationAnomaly';
import GetBottom5CallDurationAnomaly from './action/BottomCallDurationAnomaly';
import GetCallDurationAnomalyAgent from './action/CallDurationAnomalyAgent';
import GetCallByRegion from './action/CallByRegion';
import GetEmployeeIDSlice from './action/GetEmployeeID';
import GetDefaultDateFilter from './action/InitialDate';
import DatepickerredSlice from './action/Datepickerred';
import ClearUserDetails from './action/ClearuserDetails';

const Store = configureStore({
  reducer: {
    color: colorReducer,
    GetCallCentreUserDD,
    GetCCATotalCalls,
    GetCallCentreFCRWidget,
    GetTransferDD,
    GetConferenceWidget,
    GetUserDetails,
    GetImporsinationDD,
    GetServiceLevelWidget,
    GetCallVolumePrediction,
    GetSplitGroup,
    GetBottom10AgentFCR,
    GetTop10AgentFCR,
    GetDispositionPieChart,
    GetCallByRegionDrilldown,
    GetCallByRegionMap,
    GetTopCallDurationAnomaly,
    GetBottom5CallDurationAnomaly,
    GetCallDurationAnomalyAgent,
    GetCallByRegion,
    GetEmployeeIDSlice,
    GetDefaultDateFilter,
    DatepickerredSlice,
    ClearUserDetails
  }
});

export default Store;
