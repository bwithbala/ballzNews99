       
       var newsLink;
       var newsPage = new sap.m.Page("newsPage", {
				//title : "Saved Articles",
				BackgroundDesign: sap.m.BackgroundDesign.Transparent,
				showHeader : true,
				enableScrolling : false,
				showNavButton: true,
				navButtonPress: function(){ appFeedList.back(); },
			}).addEventDelegate({
				onBeforeShow: function(evt) {
					newsLink = evt.data.payloadInfo;
				//	alert("News Link from News Page:" +newsLink);
				}
			});
        
     //  alert("News Link:" +newsLink);
        
