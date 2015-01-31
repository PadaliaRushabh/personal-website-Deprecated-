var express = require('express');
var mail = express.Router();
var nodemailer = require('nodemailer');

/* POST mail page. */
mail.post('/', function(req, res, next) {
	
	setUpEmail(req,res, sendEmail);

		//console.log("Rushabh")
});

function setUpEmail(req,res,callback){
		
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	

	if((name || email || message) == ""){
		res.render('mail', {
			result:false
  		});
	}
	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
    service: 'Gmail',
    	auth: {
        user: 'padalia.rushabh@gmail.com',
        pass: 'Creatives@321.com'
    	}
	});
	
	// setup e-mail data
	var mailOptions = {
    from: 'Rushabh Padalia <padalia.rushabh@gmail.com>', // sender address
    to: 'padalia.rushabh@gmail.com', // list of receivers
    subject: 'Website:Message from ' + name, // Subject line
    text: message+"\n\nname:"+name+"\nemail:"+email // plaintext body

	};
	
	callback(transporter,mailOptions,res);
}

var sendEmail = function(transporter,mailOptions,res){
	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
		var result;
   	if(error){
        result = false	
    	}else{
    		result = true;
    	}
  		res.render('mail', {
			result:result
  		});
	});
}

module.exports = mail;
