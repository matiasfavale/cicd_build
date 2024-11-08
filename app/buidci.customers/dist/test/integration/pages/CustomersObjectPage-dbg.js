sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'buidci.customers',
            componentId: 'CustomersObjectPage',
            contextPath: '/Customers'
        },
        CustomPageDefinitions
    );
});