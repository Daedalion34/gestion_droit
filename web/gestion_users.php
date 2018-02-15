<?php
class Specific	{
	public function returnAllResults($GLOBALS_INI, $VARS_HTML, $dbh, $dbInstance, $function)	{
		// va chercher les postes
		$spathSQL= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_poste_select.sql";
		$sql= $function->protectSQL($spathSQL, array());
		$res_poste= $dbInstance->execSQL($dbh, $sql);
		$resultats["####"]= $res_poste;

		// va cherhcer les droits par defauts
		$spathSQL5= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_droit_defaut_select.sql";
		$sql5= $function->protectSQL($spathSQL5, array());
		$pattern_droits= $dbInstance->execSQL($dbh, $sql5);
		$resultats["####"]= $pattern_droits;


		// ajoute un nouvel utilisateur
		if ((isset($VARS_HTML['gu_todo'])) && ($VARS_HTML['gu_todo'] == "ADD")) {
			$spathSQL2= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_add_insert.sql";
			$sql2= $function->protectSQL($spathSQL2,
				array(
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $function->crypterssl('####', $VARS_HTML["####"])
					)
				);
			$add_utilisateur= $dbInstance->execSQL($dbh, $sql2);
			$id_utilisateur= $dbh->insert_id;

			// insertion des droits reels
			for ($i=9; $i < 16 ; $i++) {
				$spathSQL2_1= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_add_droit_insert.sql";
				$sql2_1= $function->protectSQL($spathSQL2_1,
					array(
						'####' => ####,
		 				'####' => $VARS_HTML["####".$i],
		 				'####' => $i
		 				)
					);
				$dbInstance->execSQL($dbh, $sql2_1);
			}
		}

		// modification d'un utilisateur
		if ((isset($VARS_HTML['####'])) && ($VARS_HTML['####'] == 'UPP')) {
			if (!empty($VARS_HTML['####'])) {
			$spathSQL6= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_update.sql";
			// error_log('__USER__', $VARS_HTML['gu_password_2']);
			$sql6= $function->protectSQL($spathSQL6,
				array(
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $VARS_HTML["####"],
					'####' => $function->crypterssl('####', $VARS_HTML["####"])
					)
				);
			} else {
				$spathSQL6= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_update_two.sql";

				$sql6= $function->protectSQL($spathSQL6,
					array(
						'####' => $VARS_HTML["####"],
						'####' => $VARS_HTML["####"],
						'####' => $VARS_HTML["####"],
						'####' => $VARS_HTML["####"],
						'####' => $VARS_HTML["####"],
						'####' => $VARS_HTML["####"],
						'####' => $VARS_HTML["####"],
						'####' => $VARS_HTML["####"],
						)
					);
			}
			$update_utilisateur= $dbInstance->execSQL($dbh, $sql6);

			// modification des droits reels
			for ($i=9; $i < 16 ; $i++) {
				$spathSQL7= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_droit_update.sql";
				$sql7= $function->protectSQL($spathSQL7,
					array(
						'####' => $VARS_HTML["####"],
						'####' => $VARS_HTML["####".$i],
						'####' => $i
					)
				);
			$dbInstance->execSQL($dbh, $sql7);
			}
		}

		// va chercher les interfaces
		$spathSQL3= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_interface_select.sql";
		$sql3= $function->protectSQL($spathSQL3, array());
		$res_interface= $dbInstance->execSQL($dbh, $sql3);
		$resultats["####"]= $res_interface;

		// va chercher tout les utilisateurs => creation tableau et affichage dans le html
		$spathSQL4= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_tableau_select.sql";
		$sql4= $function->protectSQL($spathSQL4, array());
		$res_tableau= $dbInstance->execSQL($dbh, $sql4);
		$resultats["####"]= $res_tableau;

		// va chercher les droits reels
		$spathSQL8= $GLOBALS_INI{'PATH_HOME'} . $GLOBALS_INI{'PATH_MODEL'} . "gestion_users_droit_reel_select.sql";
		$sql8= $function->protectSQL($spathSQL8, array());
		$gu_droits_reel= $dbInstance->execSQL($dbh, $sql8);
		$resultats["####"]= $gu_droits_reel;


		return $resultats;
	}
}
?>
