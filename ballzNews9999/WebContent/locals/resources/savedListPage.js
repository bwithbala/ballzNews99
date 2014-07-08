jQuery.sap.require("locals.resources.feedList");

        var savedListPage = new sap.m.Page("savedListPage", {
				title : "Saved Articles",
				BackgroundDesign: sap.m.BackgroundDesign.Transparent,
				showHeader : true,
				enableScrolling : true,
				showNavButton: true,
				navButtonPress: function(){ appFeedList.back(); },
			});
        
        savedListPage.addContent(oSavedFeedList);        