~function(){

	$(document).ready(function(){
		var Wrap = "";
		var Tags = "";
		var TagsInner = "";
		for(i in TagDate.son){
			Wrap += ("<h5>" + TagDate.son[i].name + "</h5><div class='tag_" + TagDate.son[i].id + "'>");
			//console.log(TagDate.son[i]);
			for(j in TagDate.son[i].son){
				if(TagDate.son[i].son[j].son){
					Wrap += ("<a href='#' onclick='ShowTag("+TagDate.son[i].son[j].id+")' class='button tiny'>" + TagDate.son[i].son[j].name + "</a><div class='more_tags'></div>")
				}else{
					Wrap += ("<a href='#' class='button tiny'>" + TagDate.son[i].son[j].name  + "</a>");
				}
			}
			Wrap += Tags;
		}
		$('#tags').html(Wrap)
	})
	
	var ListsShow = window.ListsShow = function(){
		if(isTagsShow){

		}
	}

	var Select_tag = window.Select_tag = function(text,id,ele){
	
	}
	var Select_tags = $("#Select-tags");
    	$(Select_tags).click(function(){
        	$('#Tag-Select').foundation('reveal', 'open');
    	});
	var TypeTag = $("#TypeTag");
    
}()