/*
  Contents:
    * Main scripts for theme
      * Toggle for tabs in small devices
      * Scroll action when clicked on tabs
    * Initiatives
    * Boards dropwdown
    * Minutes of Meet
*/
var tab_show = function(){
  var tab_col = $(".tabs")[0];
  var tabtoggle = $(".tab-toggle")[0];
  var downarrow = $(".tab-toggle i")[0];
  tabtoggle.classList.add("tab-toggle-active");
  tab_col.setAttribute("style","transform:scaleY(1)");
  tabtoggle.setAttribute("style","margin-top:"+(tab_col.clientHeight)+"px");
  // downarrow.setAttribute("style","transform:rotateZ(180deg)")
  $(".dim-caller").addClass("dimmer");
}
var tab_hide = function(){
  var tab_col = $(".tabs")[0];
  var tabtoggle = $(".tab-toggle")[0];
  var downarrow = $(".tab-toggle i")[0];
  tabtoggle.classList.remove("tab-toggle-active");
  tab_col.setAttribute("style","@media (max-width: 50rem) {transform:scaleY(0)}");
  tabtoggle.setAttribute("style","margin-top:0");
  // downarrow.setAttribute("style","transform:rotateZ(0deg)")
  $(".dim-caller").removeClass("dimmer");
}
var tab_toggle = function(){
  // alert("Clicked");
  var tabtoggle = $(".tab-toggle")[0];
  var tab_col = $(".tabs")[0];
  state = tab_col.style.transform;
  $(".dim-caller").toggleClass("dimmer");
  if(state == "scaleY(1)"){
    tab_hide();
  }
  else{
    tab_show();
  }
}
$(window).resize(function(){
    var tab_col = $(".tabs")[0];
    var tabtoggle = $(".tab-toggle")[0];
    var state = tab_col.style.transform;
    if(state == "scaleY(1)"){
      setTimeout(() => { 
        tabtoggle.setAttribute("style","margin-top:"+(tab_col.clientHeight)+"px");
      }, 1005);
    }
});
$('.container').on("click", ".ux-vertical-tabs .tabs button", function(){
    $('html, body').animate({
        scrollTop: $('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + $(this).data('tab') + '"]').offset().top - $('header').outerHeight() + 2
    }, 500); //adjust with header
    return false;
});
$(window).scroll(function (e){
    var q = $(".ux-vertical-tabs .tabs button:not(.empty)");
    var len = q.length;
    var i = 0;
    for (i = 0; i < len; i++) {
      q.eq(i).removeClass("active");
    }
    var top = $(window).scrollTop() + $('header').outerHeight();
    for (i = 0; i < len; i++){
      if (top < $('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + q.eq(i).data('tab') + '"]').offset().top)
        break;
    }
    // Handle i = 0 case
    if (i==0)
      i=1;
    q.eq(i-1).addClass("active");
});
/***************************** Initiatives ********************************/
/* By Subhalingam */
$(".container").on("click",".init-item",function(){
  var data = $(this).data("init-index");
  var book_item = $(this);
  var book_container = book_item.parent();
  if ($(this).hasClass('init-item-active')){
    $('.init-index-container[data-init-index="'+data+'"]').slideUp(function(){
      book_item.removeClass('init-item-active');
      book_container.css("white-space", "normal");  
    });
  }
  else{
    $(this).siblings().removeClass("init-item-active");
    $(this).parent().parent().find('.init-index-container:not([data-init-index="'+data+'"])').css("display","none");      
    book_container.css("white-space", "nowrap");
    book_item.addClass('init-item-active');
    if ($(window).scrollTop() + $('header').height() + 5 > book_container.offset().top){
      //alert('triggered');
      $('html,body').animate({
        scrollTop: book_container.offset().top - $('header').height() - 5
       }, 500);
    } 
    $('.init-index-container[data-init-index="'+data+'"]').slideDown(function(){
      book_container.animate({
            scrollLeft: book_item.offset().left - 50
        }, 500);
    });
  } 
})
$(".container").on("click",".init-index-container-close",function(){
  $(this).parent().slideUp(function(){
    $(this).parent().parent().find(".init-container").css("white-space", "normal");
    $(this).parent().parent().find(".init-item").removeClass("init-item-active");
  }); 
})
$(".init-item-read").click(function(e){
  e.preventDefault();
})
/********************************* Boards dropdown ********************************/
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
    var $listItems = $list.children('li');
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});
$.toggler = function(val){ 
  //$('.container').fadeOut(function(){
    //$(".container").html("");
    $(".container").load("./partials/"+val.toLowerCase()+".html .ux-vertical-tabs",function(){
      var timelines = $('.cd-horizontal-timeline');
      (timelines.length > 0) && initTimeline(timelines);
    }); 
    $("title").html(val+" :: Boards | SAC, IIT Delhi");
    //$('.container').fadeIn(function(){
      /***********  Minutes of Meet ********/
    //});
    history.replaceState(undefined, undefined, "#"+val.toLowerCase());
 //}) 
}
$.hashChanger = function(){
  var val = window.location.hash.substring(1).toLowerCase();
  var univ_set = ['bhm','brca','bsa','bsp','bsw'];
  val = (univ_set.indexOf(val) > -1) ? val : univ_set[Math.floor(Math.random() * univ_set.length)];
  val = val.toUpperCase();
  $('#drop .select-styled').html(val);
  $.toggler(val);
}
$.hashChanger(); 
$('#drop .select-styled').on('DOMSubtreeModified',function(){
   if ($('#drop .select-styled').html() != window.location.hash.substring(1))
        $.toggler($('#drop .select-styled').html());
});
/*****************************  Minutes of Meet ********************************/
  var timelines = $('.cd-horizontal-timeline'),
    eventsMinDistance = 60;
  function initTimeline(timelines) {
    timelines.each(function(){
      var timeline = $(this),
        timelineComponents = {};
      //cache timeline components 
      timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
      timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
      timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
      timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
      timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
      timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
      timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
      timelineComponents['eventsContent'] = timeline.children('.events-content');
      //assign a left postion to the single events along the timeline
      setDatePosition(timelineComponents, eventsMinDistance);
      //assign a width to the timeline
      var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
      //the timeline has been initialize - show it
      timeline.addClass('loaded');
      //detect click on the next arrow
      timelineComponents['timelineNavigation'].on('click', '.next', function(event){
        event.preventDefault();
        updateSlide(timelineComponents, timelineTotWidth, 'next');
      });
      //detect click on the prev arrow
      timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
        event.preventDefault();
        updateSlide(timelineComponents, timelineTotWidth, 'prev');
      });
      //detect click on the a single event - show new event content
      timelineComponents['eventsWrapper'].on('click', 'a', function(event){
        event.preventDefault();
        timelineComponents['timelineEvents'].removeClass('selected');
        $(this).addClass('selected');
        updateOlderEvents($(this));
        updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
        updateVisibleContent($(this), timelineComponents['eventsContent']);
      });
      //on swipe, show next/prev event content
      timelineComponents['eventsContent'].on('swipeleft', function(){
        var mq = checkMQ();
        ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
      });
      timelineComponents['eventsContent'].on('swiperight', function(){
        var mq = checkMQ();
        ( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
      });
      //keyboard navigation
      $(document).keyup(function(event){
        if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
          showNewContent(timelineComponents, timelineTotWidth, 'prev');
        } else if( event.which=='39' && elementInViewport(timeline.get(0))) {
          showNewContent(timelineComponents, timelineTotWidth, 'next');
        }
      });
    });
  }
  function updateSlide(timelineComponents, timelineTotWidth, string) {
    //retrieve translateX value of timelineComponents['eventsWrapper']
    var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
      wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
    //translate the timeline to the left('next')/right('prev') 
    (string == 'next') 
      ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
      : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
  }
  function showNewContent(timelineComponents, timelineTotWidth, string) {
    //go from one event to the next/previous one
    var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
      newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();
    if ( newContent.length > 0 ) { //if there's a next/prev event - show it
      var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
        newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
      updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
      updateVisibleContent(newEvent, timelineComponents['eventsContent']);
      newEvent.addClass('selected');
      selectedDate.removeClass('selected');
      updateOlderEvents(newEvent);
      updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
    }
  }
  function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
    //translate timeline to the left/right according to the position of the selected event
    var eventStyle = window.getComputedStyle(event.get(0), null),
      eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
      timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
      timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
    var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);
        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
          translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
        }
  }
  function translateTimeline(timelineComponents, value, totWidth) {
    var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
    value = (value > 0) ? 0 : value; //only negative translate value
    value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
    setTransformValue(eventsWrapper, 'translateX', value+'px');
    //update navigation arrows visibility
    (value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
    (value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
  }
  function updateFilling(selectedEvent, filling, totWidth) {
    //change .filling-line length according to the selected event
    var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
      eventLeft = eventStyle.getPropertyValue("left"),
      eventWidth = eventStyle.getPropertyValue("width");
    eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
    var scaleValue = eventLeft/totWidth;
    setTransformValue(filling.get(0), 'scaleX', scaleValue);
  }
  function setDatePosition(timelineComponents, min) {
    for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
        var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
          distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
        timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
    }
  }
  function setTimelineWidth(timelineComponents, width) {
    var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
      timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
      timeSpanNorm = Math.round(timeSpanNorm) + 4,
      totalWidth = timeSpanNorm*width;
    timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
    updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);
    return totalWidth;
  }
  function updateVisibleContent(event, eventsContent) {
    var eventDate = event.data('date'),
      visibleContent = eventsContent.find('.selected'),
      selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
      selectedContentHeight = selectedContent.height();
    if (selectedContent.index() > visibleContent.index()) {
      var classEnetering = 'selected enter-right',
        classLeaving = 'leave-left';
    } else {
      var classEnetering = 'selected enter-left',
        classLeaving = 'leave-right';
    }
    selectedContent.attr('class', classEnetering);
    visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
      visibleContent.removeClass('leave-right leave-left');
      selectedContent.removeClass('enter-left enter-right');
    });
    eventsContent.css('height', selectedContentHeight+'px');
  }
  function updateOlderEvents(event) {
    event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
  }
  function getTranslateValue(timeline) {
    var timelineStyle = window.getComputedStyle(timeline.get(0), null),
      timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
            timelineStyle.getPropertyValue("-moz-transform") ||
            timelineStyle.getPropertyValue("-ms-transform") ||
            timelineStyle.getPropertyValue("-o-transform") ||
            timelineStyle.getPropertyValue("transform");
        if( timelineTranslate.indexOf('(') >=0 ) {
          var timelineTranslate = timelineTranslate.split('(')[1];
        timelineTranslate = timelineTranslate.split(')')[0];
        timelineTranslate = timelineTranslate.split(',');
        var translateValue = timelineTranslate[4];
        } else {
          var translateValue = 0;
        }
        return Number(translateValue);
  }
  function setTransformValue(element, property, value) {
    element.style["-webkit-transform"] = property+"("+value+")";
    element.style["-moz-transform"] = property+"("+value+")";
    element.style["-ms-transform"] = property+"("+value+")";
    element.style["-o-transform"] = property+"("+value+")";
    element.style["transform"] = property+"("+value+")";
  }
  //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
  function parseDate(events) {
    var dateArrays = [];
    events.each(function(){
      var dateComp = $(this).data('date').split('/'),
        newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
      dateArrays.push(newDate);
    });
      return dateArrays;
  }
  function parseDate2(events) {
    var dateArrays = [];
    events.each(function(){
      var singleDate = $(this),
        dateComp = singleDate.data('date').split('T');
      if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
        var dayComp = dateComp[0].split('/'),
          timeComp = dateComp[1].split(':');
      } else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
        var dayComp = ["2000", "0", "0"],
          timeComp = dateComp[0].split(':');
      } else { //only DD/MM/YEAR
        var dayComp = dateComp[0].split('/'),
          timeComp = ["0", "0"];
      }
      var newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
      dateArrays.push(newDate);
    });
      return dateArrays;
  }
  function daydiff(first, second) {
      return Math.round((first-second));
  }
  function minLapse(dates) {
    //determine the minimum distance among events
    var dateDistances = [];
    for (i = 1; i < dates.length; i++) { 
        var distance = daydiff(dates[i-1], dates[i]);
        dateDistances.push(distance);
    }
    return Math.min.apply(null, dateDistances);
  }
  /*
    How to tell if a DOM element is visible in the current viewport?
    http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  */
  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
  }
  function checkMQ() {
    //check if mobile or desktop device
    return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
  }
