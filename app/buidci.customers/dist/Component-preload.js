//@ui5-bundle buidci/customers/Component-preload.js
sap.ui.require.preload({
	"buidci/customers/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("buidci.customers.Component",{metadata:{manifest:"json"}})});
},
	"buidci/customers/i18n/i18n.properties":'# This is the resource bundle for buidci.customers\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Customers\n\n#YDES: Application description\nappDescription=My SAP application\n\n#XFLD,27\nflpTitle=Customers\n',
	"buidci/customers/manifest.json":'{"_version":"1.60.0","sap.app":{"id":"buidci.customers","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.4","toolsId":"496f13b8-ba01-46e7-b357-4b24570f67ae"},"dataSources":{"mainService":{"uri":"service/buidci/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"buidcicustomers-display":{"semanticObject":"buidcicustomers","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.13","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"buidci.customers.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"CustomersList","target":"CustomersList"},{"pattern":"Customers({key}):?query:","name":"CustomersObjectPage","target":"CustomersObjectPage"}],"targets":{"CustomersList":{"type":"Component","id":"CustomersList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Customers","variantManagement":"Page","navigation":{"Customers":{"detail":{"route":"CustomersObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"CustomersObjectPage":{"type":"Component","id":"CustomersObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Customers"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.buidci"}}'
});
//# sourceMappingURL=Component-preload.js.map
