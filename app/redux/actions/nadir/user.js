import { fetchPendingAccountList } from "../../config";
import { ERROR, PROGRESS, userConst } from "../../constants/apiConstants";

export const getPendingUserAccountList = () => async (dispatch) => {
  try {
    dispatch({ type: PROGRESS });
    const { data } = await fetchPendingAccountList();
    dispatch({ type: userConst.GET_LISTS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
