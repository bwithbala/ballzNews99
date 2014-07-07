

        var savedListPage = new sap.m.Page("savedListPage", {
				title : "Saved Articles",
				BackgroundDesign: sap.m.BackgroundDesign.Transparent,
				showHeader : true,
				enableScrolling : true,
				navButtonPress: function(){ appFeedList.back(); },
			});
        
        