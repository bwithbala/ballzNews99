      
jQuery.sap.require("locals.resources.feedList");

 

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
					//$('#container').load(newsLink);
				//	alert("News Link from News Page:" +newsLink);
				}
			});
       

        
     //  alert("News Link:" +newsLink);
        
       function getPageData(url) {

       var your_url = url;


       alert("My Url:" +your_url);

       // jquery.xdomainajax.js  ------ from padolsey

       jQuery.ajax = (function(_ajax){

           var protocol = location.protocol,
               hostname = location.hostname,
               exRegex = RegExp(protocol + '//' + hostname),
               YQL = 'http' + (/^https/.test(protocol)?'s':'') + '://query.yahooapis.com/v1/public/yql?callback=?',
               query = 'select * from html where url="{URL}" and xpath="*"';

           function isExternal(url) {
               return !exRegex.test(url) && /:\/\//.test(url);
           }

           return function(o) {

               var url = o.url;

               if ( /get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url) ) {

                   // Manipulate options so that JSONP-x request is made to YQL

                   o.url = YQL;
                   o.dataType = 'json';

                   o.data = {
                       q: query.replace(
                           '{URL}',
                           url + (o.data ?
                               (/\?/.test(url) ? '&' : '?') + jQuery.param(o.data)
                           : '')
                       ),
                       format: 'xml'
                   };

                   // Since it's a JSONP request
                   // complete === success
                   if (!o.success && o.complete) {
                       o.success = o.complete;
                       delete o.complete;
                   }

                   o.success = (function(_success){
                       return function(data) {

                           if (_success) {
                               // Fake XHR callback.
                               _success.call(this, {
                                   responseText: data.results[0]
                                       // YQL screws with <script>s
                                       // Get rid of them
                                       .replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')
                               }, 'success');
                           }

                       };
                   })(o.success);

               }

               return _ajax.apply(this, arguments);

           };

       })(jQuery.ajax);



       $.ajax({
           url: your_url,
           type: 'GET',
           success: function(res) {
             var  text = res.responseText;
               // then you can manipulate your text as you wish
               alert(text);
               return text;
           }
       });
       
       }
 