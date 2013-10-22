<?php
session_start();
include("config.php");
if(isset($_POST['add_item']))
{
	$insert=mysql_query("insert into match_item set title='".$_POST["title"]."'") or die(mysql_error());
	$idd=mysql_insert_id();
			
	if(isset($_SESSION["session_temp"]))
	{
		mysql_query("update match_item_image set item_id='".$idd."' where item_id='".$_SESSION["session_temp"]."'") or die(mysql_error());
		unset($_SESSION["session_temp"]);
	}
	$_SESSION["sess_msg"]="Item has been added successfully.";
}
?>
<script type="text/javascript" src="js/jquery-1.3.2.js" ></script>
<script type="text/javascript" src="js/ajaxupload.3.5.js" ></script>
<script language="javascript" type="text/javascript">
$(function()
{
	var btnUpload=$('#upload');
	var status=$('#status');
	new AjaxUpload(btnUpload, {
	action: 'upload-file.php',
	name: 'uploadfile',
	onSubmit: function(file, ext)
	{
	 if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){ 
     // extension is not allowed 
	status.text('Only JPG, PNG or GIF files are allowed');
	return false;
	}status.text('Uploading...');
	},
	
	onComplete: function(file, response)
	{
		//On completion clear the status
		status.text('');
		//Add uploaded file to list
		var bb=response.substr(0,7)
		var idd=response.replace('success',' ');
		var idb =idd.replace(/^\s*|\s*$/g,'');
		if(bb==="success")
		{
			$('<span></span>').appendTo('#files').html('<img src="images/'+file+'" alt="" width="120" height="120" style="margin:5px;" />').addClass('success');
		}
		else
		{
			$('<span></span>').appendTo('#files').text(file).addClass('error');
		}
	}});
});

</script>
<style type="text/css">
#upload{
	-moz-border-radius:5px 5px 5px 5px;
background:none repeat scroll 0 0 #FF0000;
color:#FFFFFF;
cursor:pointer !important;
font-family:Arial,Helvetica,sans-serif;
font-size:1.3em;
font-weight:bold;
margin:10px 0;
padding:5px;
text-align:center;
width:98px;
}
#upload1{
	-moz-border-radius:5px 5px 5px 5px;
background:none repeat scroll 0 0 #000000;
color:#FFFFFF;
cursor:pointer !important;
font-family:Arial,Helvetica,sans-serif;
font-size:1.3em;
font-weight:bold;
margin:10px 0;
padding:5px;
text-align:center;
width:98px;
}
.darkbg{
	background:#ddd !important;
}
#status{
	font-family:Arial; padding:5px;
}


.error{ background:#f0c6c3; border:1px solid #cc6622; }
.baltr{background-image:url(../images/head_bg.png); color:#FFFFFF}
.baltd1{ background-color:#e9e5e5}
.baltd2{ background-color:#f4f1f1}

#files span{float:left;}

</style>
<table width="100%" align="center" border="0">
<?php if(isset($_SESSION["sess_msg"]) && $_SESSION["sess_msg"]!=""){ ?>
<tr>
	<td width="100%" valign="middle" class="admin_error"  align="center">
		<?php echo $_SESSION["sess_msg"]; $_SESSION["sess_msg"]="";?>
	</td>
</tr>
<?php 
}
?>
<form method="post" enctype="multipart/form-data">
<tr>
	<td width="25%">Title :</td>
	<td><input type="text" name="title" id="title" size="30" value=""/></td>
</tr>

<tr>
	<td valign="top">Item Avatar :</td><td valign="top">
	<div id="upload" ><span>Upload Image<span></div><span id="status"></span>
	<table><tr><td id="files"></td></tr></table>
	</td>
</tr>
<tr>
	<td colspan="2" align="center">
	<input type="submit" name="add_item" value="Submit" id="sub_button" />&nbsp;
	</td>

</tr>
</form>
</table>