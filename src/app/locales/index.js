import en from "./en";
import ja from "./ja";
import { createIntl } from "react-intl";
import { store } from "app/store";

const messages = {
    en,
    ja,
};

function getIntlMessages(language = "en") {
    let currentMessages = messages[language] || {};
    let pageMessages = Object.assign(
        {},
        currentMessages["common"],

    );
    return pageMessages;
}

export function getIntl() {
    const state = store.getState();
    const { lan = "en" } = state?.settings ?? {};

    return createIntl({ locale: lan, messages: getIntlMessages(lan) });
}

export default {
    getIntlMessages,
};