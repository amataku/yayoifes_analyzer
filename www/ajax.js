$( function() {
  $( '#male10' ) .click(
    function() {
      var hostUrl= '/api/customer';
        $.ajax({
          url: hostUrl,
          type:'POST',
          dataType: 'json',
          data : {sex : 'male', age : 10 },
          timeout:10000,
        }).done(function(data) {
          alert("ok");
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
          alert("error");
        })
    });
} );

$( function() {
  $( '#male20' ) .click(
    function() {
      var hostUrl= '/api/customer';
        $.ajax({
          url: hostUrl,
          type:'POST',
          dataType: 'json',
          data : {sex : 'male', age : 20 },
          timeout:10000,
        }).done(function(data) {
          alert("ok");
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
          alert("error");
        })
    });
} );


$( function() {
  $( '#male21' ) .click(
    function() {
      var hostUrl= '/api/customer';
        $.ajax({
          url: hostUrl,
          type:'POST',
          dataType: 'json',
          data : {sex : 'male', age : 21 },
          timeout:10000,
        }).done(function(data) {
          alert("ok");
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
          alert("error");
        })
    });
} );


$( function() {
  $( '#female10' ) .click(
    function() {
      var hostUrl= '/api/customer';
        $.ajax({
          url: hostUrl,
          type:'POST',
          dataType: 'json',
          data : {sex : 'female', age : 10 },
          timeout:10000,
        }).done(function(data) {
          alert("ok");
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
          alert("error");
        })
    });
} );


$( function() {
  $( '#female20' ) .click(
    function() {
      var hostUrl= '/api/customer';
        $.ajax({
          url: hostUrl,
          type:'POST',
          dataType: 'json',
          data : {sex : 'female', age : 20 },
          timeout:10000,
        }).done(function(data) {
          alert("ok");
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
          alert("error");
        })
    });
} );


$( function() {
  $( '#female21' ) .click(
    function() {
      var hostUrl= '/api/customer';
        $.ajax({
          url: hostUrl,
          type:'POST',
          dataType: 'json',
          data : {sex : 'female', age : 21 },
          timeout:10000,
        }).done(function(data) {
          alert("ok");
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
          alert("error");
        })
    });
} );
