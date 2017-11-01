$( function() {
  $( '#male10' ) .click(
    function() {
      var hostUrl= '/api/customer';
        $.ajax({
          url: hostUrl,
          type:'POST',
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify({sex: 'male', age: 10 }),
          timeout:10000,
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
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify({sex: 'male', age: 20 }),
          timeout:10000,
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
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({sex: 'male', age: 21 }),
        timeout:10000,
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
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({sex: 'female', age: 10 }),
        timeout:10000,
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
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({sex: 'female', age: 20 }),
        timeout:10000,
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
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({sex: 'female', age: 21 }),
        timeout:10000,
      })
    });
} );
