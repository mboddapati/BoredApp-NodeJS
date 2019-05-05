var request = require("request");

class BoredApp{

    getActivityByTypeandParticipants(n, type) {
        var url = "https://www.boredapi.com/api/activity?participants=" + n + "&type=" + type;
        request(url, function (error, response, body) {
            var x = JSON.parse(body);
            console.log('If you are bored : ' + x.activity);
        });
    }
    
    
    getActivityByType(type) {
        var url = "https://www.boredapi.com/api/activity?type=" + type;
        request(url, function (error, response, body) {
            var x = JSON.parse(body);
            console.log('If you are bored : ' + x.activity);
        });
    }
    
    
    getActivityByParticipants(n) {
        var url = "https://www.boredapi.com/api/activity?participants=" + n;
        request(url, function (error, response, body) {
            var x = JSON.parse(body);
            console.log('If you are bored : ' + x.activity);
        });
    }
    
    getActivity() {
        var url = "https://www.boredapi.com/api/activity";
        request(url, function (error, response, body) {
            var x = JSON.parse(body);
            console.log('If you are bored : ' + x.activity);
        });
    }
    
}

function main()
{
    var myobject = new BoredApp();
    myobject.getActivity();
    myobject.getActivityByParticipants(5);
}

main();
