$( document ).ready( function()
{
	gu_showUsers();
} );

function gu_showUsers()
{
	$( document ).ready( function()
	{
		var sActif = "";
		var sLibelleActif = "";
		document.getElementById( 'gu_tableau' ).innerHTML = "";
		sHTML = "";
		sHTML += "<table id ='gu_test' class='gu_display' cellspacing='auto' width='100%'>";
		sHTML += "<thead>";
		sHTML += "<tr id='gu_entete'>";
		sHTML += "<td width='20%' id='uti'>####</td>";
		sHTML += "<td width='20%'>####</td>";
		sHTML += "<td width='auto'>####</td>";
		sHTML += "<td width='10%'>#### </td>";
		sHTML += "<td width='10%'>Desactiver<br>Ré-activer</td>";
		sHTML += "</tr>";
		sHTML += "</thead>";
		sHTML += "<tbody>";
		for ( i = 0; i < aOfRecapUsager.length; i++ )
		{
			if ( aOfRecapUsager[ i ][ "####" ] == 0 )
			{
				sActif = "<i>";
				sLibelleActif = "&nbsp;(Inactif)";
			}
			else
			{
				sActif = "";
				sLibelleActif = "";
			}
			sHTML += "<tr id='gu_active'>";
			sHTML += "<td class='gu_date'>" + sActif + aOfRecapUsager[ i ][ "####" ] + "</td>";
			sHTML += "<td>" + sActif + aOfRecapUsager[ i ][ "####" ] + "</td>";
			sHTML += "<td>" + sActif + aOfRecapUsager[ i ][ "####" ] + "</td>";
			sHTML += "<td class='gu_coloration_ligne' id='gu_toto' onClick='guEditUser(" + i + ", \"modifier\")'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></td>";
			sHTML += "<td class='gu_coloration_desactiver' id='form_valid' onClick='guEditUser(" + i + ", \"desactiver\")' ><i id='enlever' class='fa fa-ban' aria-hidden='true'>" + sLibelleActif + "</i></td>";
			sHTML += "</tr>";
		}
		sHTML += "</tbody>";
		sHTML += "</table>";
		document.getElementById( 'gu_tableau' ).innerHTML = sHTML;

		$( '.gu_coloration_ligne' ).on( 'mouseenter', function()
		{
			$( this ).children().css(
			{
				'cursor': 'pointer',
				'color': '#E810DA'
			} );
			$( this ).siblings( 'td:not(:last-child)' ).css(
			{
				'color': '#E810DA'
			} );
		} );
		$( '.gu_coloration_ligne' ).on( 'mouseleave', function()
		{
			$( this ).children().css(
			{
				'color': 'black'
			} );
			$( this ).siblings( 'td:not(:last-child)' ).css(
			{
				'color': 'black'
			} );
		} );
		$( '.gu_coloration_desactiver' ).on( 'mouseenter', function()
		{
			$( this ).children().css(
			{
				'cursor': 'pointer',
				'color': 'green'
			} );
		} );
		$( '.gu_coloration_desactiver' ).on( 'mouseleave', function()
		{
			$( this ).children().css(
			{
				'color': 'black'
			} );
		} );
	} );
}

// la fonction guEditUser est appellé dans gu_showUsers, on clik sur les icons modifier (colonne 4) et desactiver (colonne 5)
function guEditUser( iIndice, gu_gabarit )
{
	if ( gu_gabarit == "modifier" )
	{
		$( '.gu_green' ).text( 'Valider la Modification' );
		$( '#gu_actif' ).val( 1 );
	}
	else if ( gu_gabarit == "desactiver" )
	{
		$( '#gu_actif' ).val( 0 );
		$( '.gu_green' ).text( 'Valider la DESACTIVATION' );
		alert( "Vous allez desactiver un utilisateur en appuyant sur le bouton vert." );
	}
	// console.log("iIndice = " + iIndice);
	$( '#gu_id_utilisateur' ).val( aOfRecapUsager[ iIndice ][ "####" ] );
	$( '#gu_nameT' ).val( aOfRecapUsager[ iIndice ][ "####" ] );
	$( '#gu_Prenom' ).val( aOfRecapUsager[ iIndice ][ "####" ] );
	$( '#gu_Email' ).val( aOfRecapUsager[ iIndice ][ "####" ] );
	$( '#gu_tel' ).val( aOfRecapUsager[ iIndice ][ "####" ] );
	$( '#gu_identifiant' ).val( aOfRecapUsager[ iIndice ][ "####" ] );
	$( 'select#gu_sl_groupe option[value=' + aOfRecapUsager[ iIndice ][ "####" ] + ']' ).prop( 'selected', true );
	$( '#gu_todo' ).val( "UPP" );
	guFillRights( aOfRecapUsager[ iIndice ][ "####" ], 'REAL' );
}

// la fonction guFillRights qui pre check en fonction du tableau qui lui est passé en paramètre
function guFillRights( id_right, gabarit )
{
	var change = "";
	var arights_generic = [];
	if ( gabarit == "REAL" )
	{
		arights_generic = arights_real;
		change = '####'
	}
	else
	{
		arights_generic = arights_defaults;
		change = '####'
	}
	for ( var i = 0; i < arights_generic.length; i++ )
	{
		if ( id_right === arights_generic[ i ][ change ] )
		{

			if ( $( "#gu_chk_interface" + arights_generic[ i ][ '####' ] ).val() === arights_generic[ i ][ "####" ] )
			{

				if ( arights_generic[ i ][ "####" ] == 1 )
				{
					$( "#gu_chk_interface" + arights_generic[ i ][ '####' ] ).prop( 'checked', true );
					$( '#gu_sel_interface' + arights_generic[ i ][ '####' ] ).show();
					$( '#gu_sel_interface' + arights_generic[ i ][ '####' ] ).val( 1 );

				}
				else if ( arights_generic[ i ][ "####" ] == 2 )
				{
					$( "#gu_chk_interface" + arights_generic[ i ][ '####' ] ).prop( 'checked', true );
					$( '#gu_sel_interface' + arights_generic[ i ][ '####' ] ).show();
					$( '#gu_sel_interface' + arights_generic[ i ][ '####' ] ).val( 2 );
				}
				else
				{
					$( "#gu_chk_interface" + arights_generic[ i ][ '####' ] ).prop( 'checked', false );
					$( '#gu_sel_interface' + arights_generic[ i ][ '####' ] ).hide();
					$( '#gu_sel_interface' + arights_generic[ i ][ '####' ] ).val( 3 );
				}
			}
		}
	}
}

// la fonction gu_showAcces montre ou cache le select des interfaces et remet la valeur du select
// à 3 (non visible) si uncheck.
function gu_showAcces( obj, #### )
{
	if ( obj.checked == true )
	{
		$( '#gu_sel_interface' + #### ).show();
	}
	else
	{
		$( '#gu_sel_interface' + #### ).hide();
		$( '#gu_sel_interface' + #### ).val( 3 );
	}
}

// au changement de la selection du poste va pre checker les doits par defauts
$( document ).on( 'change', 'select#gu_sl_groupe', function()
{
	guFillRights( $( 'select#gu_sl_groupe' ).val(), "DEFAULT" );
} );
/////////////////////////fonction mdp////////////////////////////


// function gu_checkPass() {
//     var gu_pass1 = $('#gu_password').val();
//     var gu_pass2 = $('#gu_password_2').val();
//     if (gu_pass1 == gu_pass2) {
//         $('#gu_message_psw').text('');
//     } else {
//         $('#gu_message_psw').text('Les mots de passe doivent concorder.');
//     }
// }

// function gu_generer_password(id, id2) {
//     // la fonction génére un mdp en fonction de la string ci-dessous
//     var gu_ok = 'azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN';
//     var gu_pass = '';
//     var gu_longueur = 5;
//     for (i = 0; i < gu_longueur; i++) {
//         var gu_wpos = Math.round(Math.random() * gu_ok.length);
//         gu_pass += gu_ok.substring(gu_wpos, gu_wpos + 1);
//     }
//     document.getElementById(id).value = gu_pass;
//     // il ya deux document.getElementById pour qu'il génére deux mdp similaire dans deux input
//     document.getElementById(id2).value = gu_pass;
//     $('#gu_message_psw').text('');
// }