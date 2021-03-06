$(function() {
    $.get('/config', function(response) {
        configureField(response, 'TWILIO_ACCOUNT_SID','twilioAccountSID',false);
        configureField(response, 'TWILIO_API_KEY','twilioAPIKey',false);
        configureField(response, 'TWILIO_API_SECRET','twilioAPISecret',true);
        configureField(response, 'TWILIO_CONFIGURATION_SID','twilioConfigurationSID',false);
        configureField(response, 'TWILIO_NOTIFICATION_SERVICE_SID','twilioNotificationServiceSID',false);
        configureField(response, 'TWILIO_APN_CREDENTIAL_SID','twilioAPNCredentialSID',false);
        configureField(response, 'TWILIO_GCM_CREDENTIAL_SID','twilioGCMCredentialSID',false);
        configureField(response, 'TWILIO_IPM_SERVICE_SID','twilioIPMServiceSID',false);
        configureField(response, 'TWILIO_SYNC_SERVICE_SID','twilioSyncServiceSID',false);

        //configure individual product buttons
        if (response.TWILIO_ACCOUNT_SID && response.TWILIO_ACCOUNT_SID != '' &&
            response.TWILIO_API_KEY && response.TWILIO_API_KEY != '' && response.TWILIO_API_SECRET) {

            if (response.TWILIO_CONFIGURATION_SID && response.TWILIO_CONFIGURATION_SID != '') {
                $('#videoDemoButton').addClass('btn-success');
            } else {
                $('#videoDemoButton').addClass('btn-danger');  
            }

            if (response.TWILIO_IPM_SERVICE_SID && response.TWILIO_IPM_SERVICE_SID != '') {
                $('#ipmDemoButton').addClass('btn-success');
            } else {
                $('#ipmDemoButton').addClass('btn-danger');  
            }

            if (response.TWILIO_SYNC_SERVICE_SID && response.TWILIO_SYNC_SERVICE_SID != '') {
                $('#syncDemoButton').addClass('btn-success');
            } else {
                $('#syncDemoButton').addClass('btn-danger');  
            }

            if (response.TWILIO_NOTIFICATION_SERVICE_SID && response.TWILIO_NOTIFICATION_SERVICE_SID != '') {
                $('#notifyDemoButton').addClass('btn-success');
            } else {
                $('#notifyDemoButton').addClass('btn-danger');  
            }
        }
        else {
            $('#videoDemoButton').addClass('btn-danger');
            $('#ipmDemoButton').addClass('btn-danger');
            $('#syncDemoButton').addClass('btn-danger');
            $('#notifyDemoButton').addClass('btn-danger');   
        }
        

        
    });

    var configureField = function(response, keyName,elementId,masked) {
        if (masked) {
            if (response[keyName]) {
                $('#' + elementId).html('Configured properly');
                $('#' + elementId).addClass('set');
            } else {
                $('#' + elementId).html('Not configured in .env');
                $('#' + elementId).addClass('unset');
            }
        } else {
            if (response[keyName] && response[keyName] != '') {
                $('#' + elementId).html(response[keyName]);
                $('#' + elementId).addClass('set');
            } else {
                $('#' + elementId).html('Not configured in .env');
                $('#' + elementId).addClass('unset');
            }
        }

    };
});