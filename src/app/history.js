import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

export const push = browserHistory.push;
export const goBack = browserHistory.goBack;
export const replace = browserHistory.replace;

export const goToMainPage = () => {
    window.location = document.location.origin;
};

export default browserHistory;
