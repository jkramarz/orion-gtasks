/*******************************************************************************
 * @license
 * Copyright (c) 2012 Jakub Kramarz
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: Jakub Kramarz
 ******************************************************************************/

window.onload = function() {
	function showGtasks(){
		var outline_div = parent.document.getElementById('outline');
		if(outline_div){
			todo_div = parent.document.createElement('div');
			todo_div.id = "todos";
			todo_div.className="sidePanelMargins";
			todo_div.innerHTML = '<div class="sectionWrapper sectionWrapperAux toolComposite" id="outlinerHeading"><div id="outlinerHeadingTitle" class="sectionAnchor sectionTitle layoutLeft">Google Tasks</div></div><div id="outlinerHeadingContent" role="region" class="sectionTable" aria-labelledby="outlinerHeadingTitle" style="display: block; "><div id="outlineSectionContent" tabindex="0" class="selectionModelContainer"><iframe src="http://mail.google.com/tasks/ig" width="90%" height="200px" style="width: 100%; border: 0"></iframe><table id="outlineSectionContentinnerTree" class="outlineExplorer"><thead class="navTableHeading"><tr></tr></thead><tbody id="outlineSectionContentinnerTreetbody"></tbody></table></div></div>';
			outline_div.parentNode.insertBefore(todo_div, outline_div);
		}
		}
		function hideGtasks(){
			var todos_div = parent.document.getElementById('todos');
			todos_div.parentNode.removeChild(todos_div);
		}
	var headers = {
		name: "Google Tasks",
		version: "0.1",
		description: "Plugin showing Google Tasks in Edit"
	};
	var provider = new orion.PluginProvider(headers);
	var serviceImpl = {
              run: function(text) {
             	  if(!parent.document.getElementById('todos')){
              	  	showGtasks();
              	  }else{
              	  	hideGtasks();
              	  }
                  return text;
              }
          };
          
	var serviceProperties = {
		name: "Google Tasks",
		key: ["t", true, true]
	};
	provider.registerServiceProvider("orion.edit.command", serviceImpl, serviceProperties);
    provider.connect();
};


