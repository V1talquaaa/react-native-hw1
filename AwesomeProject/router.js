import Auth from "./Screens/Auth/Auth";
import Main from "./Screens/Main/Main";

 export const useRoute = (isAuth) => {
    return isAuth ? <Main /> : <Auth />
  }