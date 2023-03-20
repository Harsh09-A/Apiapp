$(document).ready(function() {
    // Get data from API and populate container
    $.get('https://example.com/api/data', function(response) {
      if (response.success) {
        var data = response.data;
        var html = '';
  
        // Loop through data and create HTML
        for (var i = 0; i < data.length; i++) {
          html += '<div class="card">';
          html += '<div class="card-body">';
          html += '<h5 class="card-title">' + data[i].title + '</h5>';
          html += '<p class="card-text">' + data[i].description + '</p>';
          html += '</div></div>';
        }
  
        // Add HTML to container
        $('#data-container').html(html);
      } else {
        // Handle API error
        $('#data-container').html('<p>Error loading data</p>');
      }
    });
  
    // Handle form submission
    $('#data-form').submit(function(event) {
      event.preventDefault();
  
      // Get form data
      var name = $('#name').val();
      var email = $('#email').val();
  
      // Validate form data
      if (!name || !email) {
        alert('Please enter your name and email');
        return;
      }
  
      // Send POST request
      $.post('https://example.com/api/data', { name: name, email: email }, function(response) {
        if (response.success) {
          alert('Data saved successfully');
        } else {
          alert('Error saving data');
        }
      });
    });
  });
  