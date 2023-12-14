const LocalStorageService = (function () {
      
    const _clearToken = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
      };

    const _getAccessToken = () => {
      return localStorage.getItem("access_token");
    };

    const _setAccessToken = (accessToken: string) => {
      localStorage.setItem("access_token", accessToken);
    };
  
    const _getRefreshToken = () => {
      return localStorage.getItem("refresh_token");
    };
  
    const _setRefreshToken = (refresh_token: string) => {
      localStorage.setItem("refresh_token", refresh_token);
    };
  
    return {
      getRefreshToken: _getRefreshToken,
      setRefreshToken: _setRefreshToken,
      setAccessToken: _setAccessToken,
      getAccessToken: _getAccessToken,
      clearToken: _clearToken,
    };
  })();
  
  export default LocalStorageService;