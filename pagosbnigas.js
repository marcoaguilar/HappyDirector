// ARMA Y ENVIA EL CORREO ELECTRÓNICO EN BASE A LA INFO DE LA HOJA DE CALCULO
function emailOnFormSubmit(e) {

	// Variables Generales
    var aleatorio = crearAleatorio();
	var timestamp = e.values[0];
	var nombre = e.values[1];
	var mail = e.values[2];
	var capitulo = e.values[3];
	var tipoPago = e.values[4];
	var datosFactura = e.values[5];
	var monto = "";
    var empresa = e.values[6];
    var rfc = e.values[7];
    var calle = e.values[8];
    var nExt = e.values[9];
    var nInt = e.values[10];
    var colonia = e.values[11];
    var municipio = e.values[12]
    var estado = e.values[1];
    var cp = e.values[14];
    var s = ","
    var membresia = "";
    
    // Correos de Secretarios Tesoreros
    var stClubE = "aprodesah@gmail.com";
    var stUniverso = "erikatorres@thermoply.com";
   
    // Correos de BNITA
    var dirLuis = "aprodesah@gmail.com";
    var dirCinthya = "cinthyadelangel.actividad13@gmail.com";
    var dirBNIC = "marco@ahs.mx";
    var asistenteBNITA = "amelia@agoris.com.mx";
    var dirAlex = "aobregon@bnimexico.com";
    
    // Armado de mails por Capítulo
    var mailsBNITA = dirAlex + s + asistenteBNITA + s + dirBNIC;
    var mailsClubE = mailsBNITA + s + stClubE + s + dirLuis;
    var mailsUniverso = mailsBNITA + s + stUniverso + s + dirCinthya;
    var mailsEmpresariosP = mailsBNITA + s + dirLuis;
	
  // Definicion de membresías por tipo y costo
  if (tipoPago == "Nueva Membresía 1 Año")
    {
		var monto = "$6,500.00 pesos";
		var membresia = tipoPago;
	}
	else if (tipoPago == "Nueva Membresía 2 Años")
    {
		var monto = "9,400.00 pesos";
		var membresia = tipoPago;
	}
	else if (tipoPago == "Renovación 1 Año")
    {
		var monto = "$4,700.00 pesos";
		var membresia = tipoPago;
	}
	else if (tipoPago == "Renovación 2 Años")
    {
		var monto = "$7,600.00 pesos";
		var membresia = tipoPago;
	}
	else if (tipoPago == "Renovación 1 Año Pago Tardío")
    {
		var monto = "$4,990.00 pesos";
		var membresia = tipoPago;
	}
	else if (tipoPago == "Renovación 2 Años Pago Tardío")
    {
		var monto = "$7,890.00 pesos";
		var membresia = tipoPago;
	}

	// Asunto del email
	var subject = "Registro de Pago para " + capitulo

	// Mensaje para dispositivos que no pueden renderear html
	var emailBody = "Este mensaje no es compatible con tu dispositivo"; 
	
	// Render de HTML
	var htmlBody =  "<h2><font color=\"#8A2629\">Registro de Pago BNI Quintana Roo</font></h2>" +
                    "Gracias, hemos recibido tu Registro para Pagos el <i>" + timestamp + "</i>" + 
                    "<br/><br/><h4>Tu Registro a BNI incluye los siguientes datos:</h4>" +
					"<br/><font color=\"#8A2629\"><strong>Tu Nombre: </strong></font>" + nombre +
					"<br/><font color=\"#8A2629\"><strong>Tu email: </strong></font>" + mail +
					"<br/><font color=\"#8A2629\"><strong>Capítulo al que aplicas: </strong></font>" + capitulo +
					"<br/><font color=\"#8A2629\"><strong>Tipo de Pago: </strong></font>" + membresia +
					"<br/><br/>---------------------------------------------" +
					"<br/><br/><h4>Tus datos para Factura:</h4>" +
                    "<br/><font color=\"#8A2629\"><strong>Razón Social: </strong></font>" + empresa +
                    "<br/><font color=\"#8A2629\"><strong>RFC: </strong></font>" + rfc +
                    "<br/><font color=\"#8A2629\"><strong>Calle: </strong></font>" + calle +
                    "<br/><font color=\"#8A2629\"><strong>Número Exterior: </strong></font>" + nExt +
                    "<br/><font color=\"#8A2629\"><strong>Número Interior: </strong></font>" + nInt +
                    "<br/><font color=\"#8A2629\"><strong>Colonia: </strong></font>" + colonia +
                    "<br/><font color=\"#8A2629\"><strong>Municipio: </strong></font>" + municipio +
                    "<br/><font color=\"#8A2629\"><strong>Estado: </strong></font>" + estado +
                    "<br/><font color=\"#8A2629\"><strong>Código Postal: </strong></font>" + cp +
					"<br/><br/>---------------------------------------------" +
					"<br/><br/><h4>Realiza tu Pago</h4>" +
                    "<br/><font color=\"#8A2629\"><strong>Banco: </strong></font>BBVA Bancomer" +
					"<br/><font color=\"#8A2629\"><strong>Depósito en Ventanilla a la cuenta: </strong></font>0110253707" +
					"<br/><font color=\"#8A2629\"><strong>Transferencia Bancaria (CLABE): </strong></font>012180001102537074" +
 					"<br/><font color=\"#8A2629\"><strong>Monto a Pagar: </strong></font>" + monto +
					"<br/><font color=\"#8A2629\"><strong>Referencia Numérica (indispensable): </strong></font>" + aleatorio +
					"<br/><font color=\"#8A2629\"><strong>Referencia Alfanumérica (opcional): </strong></font>BNIQR";
                    //"<br/><br/><i><Strong>¿Necesitas ayuda?</strong> Llama al (55) 5555-5555 o manda un email a " + asistenteBNITA + " .</i>";
	
    // Para más imformación de parámetros avanzados, visitar: 
	// https://developers.google.com/apps-script/reference/mail/mail-app#sendEmail(String,String,String,Object)
  
  if (capitulo == "BNI Club Empresarial")
    {
	var advancedOpts = { name: "Club Empresarial", htmlBody: htmlBody, cc: mailsClubE };
	}
	else if (capitulo == "BNI Universo")
    {
	var advancedOpts = { name: "BNI Universo", htmlBody: htmlBody, cc: mailsUniverso };
	}
	else if (capitulo == "BNI Empresarios Playa")
    {
	var advancedOpts = { name: "BNI Empresarios Playa", htmlBody: htmlBody, cc: mailsEmpresariosP };
	}

	// Esta instrucción envía el correo
	GmailApp.sendEmail(mail, subject, emailBody, advancedOpts);

}

// CREA UN NUMERO ALEATORIO DE 6 DÍGITOS EN LA HOJA DE CALCULO
function crearAleatorio() {
	var hoja = SpreadsheetApp.getActiveSheet();
	var fila = SpreadsheetApp.getActiveSheet().getLastRow();
	var random = Math.floor((Math.random()*1000000)+100001);
	
	hoja.getRange(fila,7).setValue(random);
	return random;
}
