(function($){
        $.fn.extend({
            tableExport: function(hosts,type) {
                var defaults = {
						separator: ' ',
						ignoreColumn: [0],
						tableName:'hosts',
						type:'txt',
						escape:'false',
						htmlContent:'true',
						consoleLog:'false'
				};
               
				var el = this;
					// Header
					var tdData ="\r\n";		
					//tdData = $.trim(tdData);
					var tagname = [];
					var sdata = [];
					var n = 0;
					var c = 0;
					// Row vs Column
					$(el).find('tr').each(function() {
					var tdata='';
					var tn='';
					var status = 1;
					var control = 0;
						$(this).filter(':visible').find('td').each(function(index,data) {
							control++;
							if ($(this).css('display') != 'none'){
								if(defaults.ignoreColumn.indexOf(index) == -1){
									if(control==5){	
										tn = parseString($(this));
										/*if('#' != hosts[c].note[0] && hosts[c].note[0]){
											tdata += '#' + hosts[c].note;
										}else{
											tdata += hosts[c].note;
										}*/
										
									}else if(control == 2){
										if(-1 == $(this).html().trim().indexOf("status-enabled")){
											status = 0;
										}
									}else if(control == 3){
										if(status){
											tdata += parseString($(this)) + ' '+ defaults.separator;
										}else{
											tdata += '#' + parseString($(this)) + ' '+ defaults.separator;
										}
									}else if(control != 7){
										tdata += parseString($(this)) + ' '+ defaults.separator;
									}
								}
							}
						});
						
						c++;
						if(!in_array(tn,tagname)){
							tagname[n] = tn;
							sdata[n]=[];
							sdata[n]['data'] = '#' + tn + '    ###################\r\n' + tdata + '\r\n';
							n++;
						}else{
							var m = tagname.indexOf(tn);
							sdata[m]['data'] += tdata + '\r\n';
						}
						
					});
					
					
					
					for(var i=0;i<n-1;i++){
						for(var j=i+1;j<n;j++){
							var temp='';
							if(tagname[i][0]>tagname[j][0]){
								temp = tagname[i];
								tagname[i] = tagname[j];
								tagname[j] = temp;
							}
						}
						//tdData += sdata[i]['data'];
					}
					
					for(var i=0;i<n;i++){
						var ch = tagname[i];
						for(var j=0;j<n;j++){
							var str = "#" + ch + "\\s*#*";
							var th = ch;
							var reg = new  RegExp(str);
							if(sdata[j]['data'].match(reg)){
								if(th == sdata[j]['data'].split(' ')[0].substr(1)){
									tdData += sdata[j]['data'];
								}
								
							}
						}
					}
					
					
					//output
					if(defaults.consoleLog == 'true'){
						console.log(tdData);
					}
					//alert(tdData);
					
					if(0 == type){
						//document.write(tdData);
						$("#exportArea").text(tdData);
					}else{
						/*var base64data = "base64," + $.base64.encode(tdData);
						
						window.open('data:application/'+defaults.type+';filename='+defaults.tableName+';' + base64data);*/
					}
					
					
					
				
				
				function parseString(data){
				
					if(defaults.htmlContent == 'true'){
						content_data = data.html().trim();
					}else{
						content_data = data.text().trim();
					}
					
					if(defaults.escape == 'true'){
						content_data = escape(content_data);
					}
					
					
					return content_data;
				}
				
				function in_array(stringToSearch, arrayToSearch) {
					 for (s = 0; s < arrayToSearch.length; s++) {
					  thisEntry = arrayToSearch[s].toString();
					  if (thisEntry == stringToSearch) {
					   return true;
					  }
					 }
					 return false;
				}
			}
        });
    })(jQuery);
        