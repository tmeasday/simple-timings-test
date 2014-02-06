if (Meteor.isServer) {
  Meteor.methods({
    timeInserts: function() {
      var begin = new Date();
      _.times(10, function() {
        var response = {"body":"Water sticks to the card and the bottle causing it to hang on.","studentId":"dgkRGdrPBDu6kobeG","flipId":"xg2DYYQ84z3bpnLQ9","responseGroupId":null,"flaggedByUserId":null,"meTooUserIds":[],"_id":"FgFYFfKTT56nERks3"};
        response._id = Random.id();
    
        Responses.insert(response);
      });
    
      console.log('It took ' + (new Date() - begin) / 1000 +  ' seconds');
    },
  
    timeUpdates: function() {

      var begin = new Date();
      _.times(10, function(i) {
        console.log(i)
        Meteor.users.update("dgkRGdrPBDu6kobeG", {$inc: {'profile.responseCount': 1}});
      });
    
      console.log('It took ' + (new Date() - begin) / 1000 +  ' seconds');

    },
    
    timeFinds: function() {

      var begin = new Date();
      _.times(10, function(i) {
        console.log(i)
        Meteor.users.find("dgkRGdrPBDu6kobeG").fetch()
      });
    
      console.log('It took ' + (new Date() - begin) / 1000 +  ' seconds');

    }
    
  })
}
