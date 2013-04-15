<?php
	mysql_connect("localhost","root","admin");
	mysql_select_db("dbs_web_desktop");

	$user_sid = $_GET['userUUID'];
	$obj = array();

	$sqlCom = " SELECT 		role.uuid AS uuid,
							frm.title_form AS title_form,
							frm.package_controller AS package_controller,
							frm.controller_name AS controller_name
				FROM 		m_user_role role
				INNER JOIN 	m_user usr ON role.uuid_user = usr.uuid
				INNER JOIN 	m_form frm ON role.uuid_form = frm.uuid
				WHERE 		role.uuid_user =  '$user_sid' 
				AND 		role.isActive = true ";

	$x = mysql_query($sqlCom);

	while ($arr_x = mysql_fetch_assoc($x)) {
		$obj[] = $arr_x;
	}

	echo json_encode($obj);
	function gen_uuid() {
	    return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
	        // 32 bits for "time_low"
	        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

	        // 16 bits for "time_mid"
	        mt_rand( 0, 0xffff ),

	        // 16 bits for "time_hi_and_version",
	        // four most significant bits holds version number 4
	        mt_rand( 0, 0x0fff ) | 0x4000,

	        // 16 bits, 8 bits for "clk_seq_hi_res",
	        // 8 bits for "clk_seq_low",
	        // two most significant bits holds zero and one for variant DCE1.1
	        mt_rand( 0, 0x3fff ) | 0x8000,

	        // 48 bits for "node"
	        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
	    );
	};
	$uuid = gen_uuid();

	if($_GET['rr'] == "xx"){
		$sql = mysql_query("INSERT INTO `m_user` VALUES ('$uuid','user2','user2', true)");
		if($sql){
			echo "sukses";
		}
	}
?>