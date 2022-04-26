import * as MODEL from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Content";
    console.log(pageContent);
    if(pageName == "") {
        pageContent = "homeContent";
    }

    MODEL.modelPageName(pageContent);
}

function dynamicListeners() {
    console.log("dynamic");
}

function initListeners() {
    
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    console.log("hi");
    initListeners();
});