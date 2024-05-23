sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("test.controller.UserIdView", {
            onInit: function () {
                var oUser = sap.ushell.Container.getUser();
                var username = oUser.getId();
                console.log("Logged in username", username)
                this.getView().byId("usernameDisplay").setText(username);
            }
        });
    });
