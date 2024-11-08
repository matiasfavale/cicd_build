sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'buidci/redemptions/test/integration/FirstJourney',
		'buidci/redemptions/test/integration/pages/PurchasesList',
		'buidci/redemptions/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('buidci/redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);