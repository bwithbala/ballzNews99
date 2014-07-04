			var feedListPage = new sap.m.Page("feedListPage", {
				title : "Ballz News",
				BackgroundDesign: sap.m.BackgroundDesign.list,
				showHeader : true,
				enableScrolling : true
			});
			
			
			feedListPage.addContent(oFeedList);
			
			
			jQuery.sap.require("sap.ui.core.IconPool");
			var sURI = sap.ui.core.IconPool.getIconURI("personnel-view");
			
			//Create a ColorPicker Control without parameters
			var oColorPicker1 = new sap.ui.commons.ColorPicker();

			//Attach eventhandler for change event
			oColorPicker1.attachChange(handleColorPickerChange);

			function handleColorPickerChange(oEvent) {
				var colors = oEvent.getParameters();
				this.app.setBackgroundColor(colors.hex);
				this.app.setBackgroundOpacity(0.6);
				sap.ui.getCore().byId("opacitySlider")
						.setValue(0.6);
				this.app.setBackgroundRepeat(true);
				/*this.app.ui.getCore().byId("repeatSelect")
						.setSelectedKey("repeat");
				*/
			};
					

				var oPopover = new sap.m.Popover(
						{
							placement : sap.m.PlacementType.Bottom,
							title : "Settings",
							showHeader : true,
							//		beginButton: oBeginButton,
							//	endButton: oEndButton,
							beforeOpen : function(oEvent) {
								jQuery.sap.log.info("before popover opens!!!");
							},
							afterOpen : function(oEvent) {
								jQuery.sap.log.info("popover is opened finally!!!");
							},
							beforeClose : function(oEvent) {
								jQuery.sap.log.info("before popover closes!!!");
							},
							afterClose : function(oEvent) {
								jQuery.sap.log.info("popover is closed properly!!!");
							},
							//	footer: footer,
							content : [
									oColorPicker1,
									// background image switches
									new sap.m.Button(
											{
												text : "Stretched Cheetah",
												press : function() {
													this.app
															.setBackgroundImage("images/Telangana_logo.jpg");
													this.app.setBackgroundColor("");
													this.app.setBackgroundOpacity(1);
													this.app.ui.getCore().byId("opacitySlider")
															.setValue(1);
													this.app.setBackgroundRepeat(false);
													sap.ui.getCore().byId("repeatSelect")
															.setSelectedKey("stretch");
												}
											}),

									new sap.m.Button(
											{
												text : "Repeating translucent Cheetah",
												press : function() {
													this.app
															.setBackgroundImage("images/Telangana_logo.jpg");
													this.app.setBackgroundColor("#67E02B");
													this.app.setBackgroundOpacity(0.6);
													sap.ui.getCore().byId("opacitySlider")
															.setValue(0.6);
													this.app.setBackgroundRepeat(true);
													sap.ui.getCore().byId("repeatSelect")
															.setSelectedKey("repeat");
												}
											}),

									new sap.m.Button({
										text : "Clear Background",
										press : function() {
											this.app.setBackgroundImage("");
											this.app.setBackgroundColor("");
											this.app.setBackgroundOpacity(1);
											sap.ui.getCore().byId("opacitySlider").setValue(1);
											this.app.setBackgroundRepeat(false);
											sap.ui.getCore().byId("repeatSelect")
													.setSelectedKey("stretch");
										}
									}),
								new sap.m.Slider("opacitySlider", {
										width : "50%",
										min : 0,
										max : 1,
										step : 0.01,
										liveChange : function(oEvent) {
											var value = oEvent.getParameter("value");
											this.app.setBackgroundOpacity(value);
										}
									}),

							],
							initialFocus : "focusInput"
						});	     	


			var d = sap.ui.Device;
			var Bar = new sap.m.Bar({
				/*contentLeft : [ new sap.m.Button('SlideRight', {
					icon : sap.ui.core.IconPool.getIconURI("menu2"),
					press : function() {
						//app.to("page2", "slide");
					}
				}) ],*/
				
				contentMiddle : [ 
				                //  oSelect0
				],
			    contentRight: [
					new sap.m.Button('settings', {
						icon : sap.ui.core.IconPool.getIconURI("settings"),
						press : function() {
					
							oPopover.setPlacement(sap.m.PlacementType.Left);
							oPopover.openBy(this);
						}
					})
			]
			});
			
			feedListPage.setCustomHeader(Bar);  	
			