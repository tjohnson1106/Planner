"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Router_1 = require("./Router");
exports.App = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.root },
        react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
            react_1.default.createElement(Router_1.Router, null))));
};
var styles = react_native_1.StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    wrapper: {
        width: "100%",
        maxWidth: 425,
        backgroundColor: "#F5FCFF"
    }
});
