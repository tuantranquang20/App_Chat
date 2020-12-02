import axios from "axios";
import { Alert } from "react-native";
import NavigationUtil from "../navigation/NavigationUtil";
import I18n from "../i18n/i18n";
import reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";

function createAxios() {
  // AsyncStorage.setItem("token", '773DE1FE9732F26F7552BC921CBE347E')
  var axiosInstant = axios.create();
  axiosInstant.defaults.baseURL = "http://192.168.43.100:3001/";
  axiosInstant.defaults.timeout = 20000;
  axiosInstant.defaults.headers = { "Content-Type": "application/json" };

  axiosInstant.interceptors.request.use(
    async config => {
      config.headers.Authorization = `Bearer ${await AsyncStorage.getItem(
        "TOKEN"
      )}`;
      return config;
    },
    error => Promise.reject(error)
  );

  axiosInstant.interceptors.response.use(response => {
    if (response.data && response.data.code == 403) {
      setTimeout(() => {
        Alert.alert("Thông báo", I18n.t("relogin"));
      }, 100);

      // AsyncStorage.setItem("token", "", () => {
      //   NavigationUtil.navigate("Auth");
      // });
    } else if (response.data && response.data.status != "success") {
      setTimeout(() => {
        Alert.alert("Thông báo", response.data.message);
      }, 100);
    }
    return response;
  });
  return axiosInstant;
}

export const getAxios = createAxios();

/* Support function */
function handleResult(api) {
  return api.then(res => {
    if (res.data.status != "success") {
      return Promise.reject(new Error("Co loi xay ra"));
    }
    return Promise.resolve(res.data);
  });
}

export const requestLogin = (username, password) => {
  return handleResult(
    getAxios.post("users/login", {
      phone: username,
      password: password
    })
  );
};

export const requestHomeData = (deviceID = "") => {
  return handleResult(
    getAxios.get(`api/Service/GetHomeScreen?deviceID=${deviceID}`)
  );
};
