       
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
					alert("News Link from News Page:" +newsLink);
				}
			});
        
        
	var HtmlIFrame = new sap.ui.core.HTML({
			  content:
				  "<iframe src=" +
				  newsLink +
				  //"width=\"200\" height=\"500\" " +
				  //"scrolling=\"yes\" +
				  " > </iframe>"
		});	          
		
		//sap.m.URLHelper.redirect(newsLink);
		
		newsPage.addContent(HtmlIFrame); 