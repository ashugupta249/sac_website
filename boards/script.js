function vertical_tabs()
  {
  if ($('.ux-vertical-tabs').length > 0)
    {
    $('.ux-vertical-tabs .tabs button').on("click", function()
      {
      var temp_tab = $(this).data('tab');
      var temp_tab_js = this.getAttribute('data-tab');
      var temp_content = $('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab + '"]');
      var temp_content_js = document.querySelector('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab_js + '"]');
      var temp_content_active_js = document.querySelector('.ux-vertical-tabs .maincontent .tabcontent.active');

      $('.ux-vertical-tabs .tabs button').removeClass('active');
      $('.ux-vertical-tabs .tabs button[data-tab="' + temp_tab + '"]').addClass('active');

      var animation_start = anime({ duration: 400, targets: temp_content_active_js, opacity:[1,0], translateX: [0,'100%'], easing: 'easeInOutCubic',
      complete: function()
        {
          $('.ux-vertical-tabs .maincontent .tabcontent').removeClass('active');
        temp_content.addClass('active');
        var animation_end = anime({ duration: 400, targets: temp_content_js, opacity:[0,1], translateX: ['100%','0'], easing: 'easeInOutCubic' });
          }
      });
      });
    }
  }

$(function() 
  {
  vertical_tabs();
  });