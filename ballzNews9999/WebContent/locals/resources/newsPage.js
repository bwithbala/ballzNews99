       
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
			        "<div style='overflow:scroll;'>" +
			          "<iframe src=" + newsLink 
			      // + strConcat
			         //"height=500px width=1200px>" 
			      //  +  style
			      //  + scrolling  
			        + ">" +
			        + "</iframe>" +
			        "</div>"
				  
/*				  "<iframe src=" +
				  newsLink +
				  //"width=\"200\" height=\"500\" " +
				  "scrolling=\"yes\"> </iframe>"*/
		});	              
		
		
		newsPage.addContent(HtmlIFrame);