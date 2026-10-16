import toast from "react-hot-toast";
import axios from "axios";
import useApp from "./useApp";

const base_url = "http://localhost:5000";

function useAxios() {
  const { token } = useApp();
  const loadingId = "axios-loader";

  const request = async (requestObj) => {
    try {
      toast.loading("Loading...", { id: loadingId });
      const { method = "GET", url, data, headers = {} } = requestObj;

      const response = await axios({
        method,
        url: `${base_url}/${url}`,
        data,
        headers: token
          ? { Authorization: `Bearer ${token}`, ...headers }
          : headers,
      });

      return { response, responseData: response?.data, _error: false };
    } catch (e) {
      const response = e?.response;
      const responseData = response?.data;
      const detail = responseData?.detail;

      if (typeof detail === "string") toast.error(detail);
      else if (Array.isArray(detail) && detail[0]?.msg)
        toast.error(detail[0].msg);
      else if (typeof e?.message === "string") toast.error(e.message);
      else toast.error("Request contact system admin");

      return { response, responseData, _error: true };
    } finally {
      toast.dismiss(loadingId);
    }
  };

  return request;
}

export default useAxios;