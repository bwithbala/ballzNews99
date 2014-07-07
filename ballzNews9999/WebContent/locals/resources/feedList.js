//alert("Inside Feed List");
		//jQuery.sap.require("ballznews999.resources.jgfeed");	

      //  selectedNews = "http://www.maalaimalar.com/RSS/SectionRssFeed.aspx?Id=1&Main=18";

			jQuery.sap.require("sap.ui.core.IconPool");
		function fillFeedListData(url) {

			var urlFeed = url;
			var feedData = {
					chunks : []
				};

			$.jGFeed(urlFeed, function(feeds) {

				if (!feeds.entries.length) {
					// there was an error
					jQuery.sap.require("sap.m.MessageToast");
					sap.m.MessageToast.show("No Data Found!");
				}
				else {
					for ( var i = 0; i < feeds.entries.length; i++) {
						var entry = feeds.entries[i];

						var feedArray = {};

						var date = new Date(entry.publishedDate);

						var months = Array("January", "February", "March", "April",
								"May", "June", "July", "August", "September",
								"October", "November", "December");
						var string = date.getDate() + " " + months[date.getMonth()]
								+ " " + date.getFullYear();

					feedArray.timestamp = string;
						feedArray.sender = entry.title;
						feedArray.text = entry.contentSnippet;
						feedArray.info = entry.link;
					//	feedArray.iconActive = entry.link;
						feedArray.showIcon = false;
						feedArray.senderActive = false;

						var fName = entry.author.substr(0, entry.author.indexOf(' '));
						var lName = entry.author.substr(entry.author.indexOf(' ') + 1);
						var fullName = fName.toLowerCase() + "." + lName.toLowerCase();
						feedData.chunks.push(feedArray);
					}
					
					var oModel = new sap.ui.model.json.JSONModel();
					// set the data for the model
					oModel.setData(feedData);
					// set the model to the list
					oFeedList.setModel(oModel);
					// bind Aggregation
					oFeedList.bindAggregation("items", "/chunks", oFeedListItemTemplate);			
				}
			},
			20);
		}

		var w = window.innerWidth;
		w = w - 350;
		//alert("inner width" + w);
		var h = window.innerHeight;
		h = h - 350;
		//alert("inner Height" + h);

		var strHeight = "height=";
		var strWidth = " width=";
		var px = "px";
		var strConcat = strHeight.concat(h);

		strConcat = strConcat.concat(px);
		strConcat = strConcat.concat(strWidth);
		strConcat = strConcat.concat(w);
		strConcat = strConcat.concat(px);
		
		var saveArtInfo;
		var saveArtSender;
		var saveArtText;
		var saveArtTimestamp;
		
		var oSavedListItemTemplate = new sap.m.FeedListItem({
			type : sap.m.ListType.Active,
			text : "{text}",
			sender : "{sender}",
			showIcon : "{showIcon}",
			senderActive: "{senderActive}",
			info : "{info}",
			timestamp : "{timestamp}",

		});		
		
		var oSavedFeedList = new sap.m.List("oSavedFeedItemList", {
			inset : false,
			showUnread: true,
			BackgroundDesign: sap.m.BackgroundDesign.Transparent,	
			
			});		
		
		var savedFeedData = {
				chunks : []
			};				
		
		var oSavedFeedModel = new sap.ui.model.json.JSONModel();
		// set the data for the model
		oSavedFeedModel.setData(savedFeedData);
		// set the model to the list
		oSavedFeedList.setModel(oSavedFeedModel);
		// bind Aggregation
		oSavedFeedList.bindAggregation("items", "/chunks", oSavedFeedListItemTemplate);				
		
		var oFeedList = new sap.m.List("oFeedItemList", {
			inset : false,
			showUnread: true,
		//	mode : "SingleSelectMaster",
			BackgroundDesign: sap.m.BackgroundDesign.Transparent,
			swipeContent : 
				
				new sap.m.Button({
			        text : "Save",
			        icon: sap.ui.core.IconPool.getIconURI("save"),			        
			        type : "Reject",
			            tap : function() { 

                            alert("Inside Tap Function");
                          //  alert("selectedItem after Tap" +selectedItem);	
			            	

			    		
			    					var savedFeedArray = {};	
			    						
			    					savedFeedArray.timestamp = saveArtTimestamp;
			    					savedFeedArray.sender = saveArtSender;
			    					savedFeedArray.text = saveArtText;
			    					savedFeedArray.info = saveArtInfo;
			    					savedFeedArray.showIcon = false;
			    					savedFeedArray.senderActive = false;
			    					alert("Saved Feed Title:" +savedFeedArray.text);
			    					savedFeedData.chunks.push(savedFeedArray);
			    	
			                // we are done hide the swipeContent from screen
			            	oFeedList.swipeOut();
			            }
			        }),				
				

		    swipeDirection: sap.m.SwipeDirection.RightToLeft,		
		    swipe : function(e) { // register swipe event
		        var oSwipeListItem = e.getParameter("listItem"), // get swiped list item from event
		            oSwipeContent = e.getParameter("swipeContent"); // get swiped content from event
		      //  alert("Swipe Triggered");
		       // alert("Swipe Data:" +oSwipeListItem.data);
		       // alert("Swipe Content:" +oSwipeContent);
		        
		     	 saveArtInfo = e.getParameter('listItem').getInfo();
		     	 saveArtSender = e.getParameter('listItem').getSender();
		     	 saveArtText = e.getParameter('listItem').getText();
		     	 saveArtTimestamp = e.getParameter('listItem').getTimestamp();
		     	
		     	 
		    // 	alert("selectedItem" +selectedItem);		        
		        

/*		        // Check swiped list item if it is already approved or not
		        if (oSwipeListItem.data("approved")) {
		            // List item is approved, change swipeContent(button) text to Disapprove and type to Reject
		            oSwipeContent.setText("Disapprove").setType("Reject");
		        } else {
		            // List item is not approved, change swipeContent(button) text to Approve and type to Accept
		            oSwipeContent.setText("Approve").setType("Accept");
		        }*/
		    },		    
			
		/*	select: function(event){
			     	var selectedInfo = event.getParameter('listItem').getInfo();
			     	 selectedItem = selectedInfo ;
			     	alert("selectedItem" +selectedItem);
			     	
			     	window.location.replace("newsPage.html");*/

			     //	sap.m.URLHelper.redirect(selectedInfo);
			     	
		/*	     	 appFeedList.to("newsPage", {payloadInfo:selectedInfo});
			     	 
			     	var str = "'";
		     		var link = str.concat(selectedInfo); 
		     		link = link.concat(str);	     	 
			     	 
		       		var HtmlIFrame = new sap.ui.core.HTML({
		     			  preferDOM: true,
		    			  content:
		    				 "<div style='overflow: scroll'>" + 
		      	    "<object type=\"text/html\" data=\"http://www.maalaimalar.com\" width=\"300px\" height=\"300px\"" +
		      	    	"style=\"overflow: scroll;border:0px \">" +
		      	    "</object></div>"
		    		});	             
			     	 
			     	var scr1 = new sap.m.ScrollContainer({
						horizontal: true,
						vertical: true,
						content:[HtmlIFrame],
						height: "500px",
						width: "400px"
					}); 	     	 
			     	 
			     	newsPage.addContent(scr1);*/

		 /*       		var str = "'";
		        		var link = str.concat(selectedInfo); 
		        		link = link.concat(str);
		        		
		        		var ow = window.outerWidth; //including toolbars and status bar etc.
		        		alert("outer Width " + ow);
		        		var oh = window.outerHeight;
		        		alert("outer Height " + oh);
		        		//alert("Link: " +link);
		        		
		        		var scrolling = "scrolling=yes";
		        		var style     = "class='noScrolling'";
		        		
		        		var HtmlIFrame = new sap.ui.core.HTML({
		        			  content:
		        			          "<iframe src=" + link 
		        			      // + strConcat
		        			         //"height=500px width=1200px>" 
		        			      //  +  style
		        			      //  + scrolling  
		        			        + ">" +
		        			        "<div style='overflow:scroll;'>" +
		        			        "</div>"
		        			          + "</iframe>"
		        				  
		        				  "<iframe src=" +
		        				  link +
		        				  //"width=\"200\" height=\"500\" " +
		        				  "scrolling=\"yes\"> </iframe>"
		        		});	          
		        		
		 
		        		
		        		var oHTML = new sap.ui.core.HTML("contentCtrl", {	
		        			preferDOM: true,
		        			content: "<div id=\"diviframe\" style=\"overflow: scroll\"><iframe id=\"iframeiframe\" src=\"http://www.maalaimalar.com\" ></iframe></div>" });  */      		
		        		
		        	//	$("#siteloader").html('<object data="http://www.maalaimalar.com" />');        		
		        	//	newsPage.addContent(HtmlIFrame);
		        		
		/*        		$(window).resize( function () {
		        			var iWidth = $("#diviframe").width();
		        			var iHeight = $(window).height();
		        			
		        			$("#iframeiframe").width(iWidth - 4);
		        			$("#iframeiframe").height(iHeight - 200);		
		        	}).resize();

		        	$(document).ready( function() {
		        			$(window).resize();
		        		}
		        	);  */      		
		        		
		//	}
		//showSeparators: sap.m.ListSeparators.All,
  
			
		});


		var oFeedListItemTemplate = new sap.m.FeedListItem({
			type : sap.m.ListType.Active,
			//type : sap.m.ListType.Detail ,
			//icon : "{icon}",
			//activeIcon : "{activeIcon}",
			text : "{text}",
			sender : "{sender}",
			showIcon : "{showIcon}",
			senderActive: "{senderActive}",
			//iconActive : "{iconActive}",
			info : "{info}",
			timestamp : "{timestamp}",

		});

//		fillFeedListData(selectedNews);
		
