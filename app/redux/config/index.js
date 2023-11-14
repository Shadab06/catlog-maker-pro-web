import { API } from "./axios";

//nadir
//dashboard apis
export const fetchPendingAccountList = () => API.post('nadir/fetchAllUserDetails.php');