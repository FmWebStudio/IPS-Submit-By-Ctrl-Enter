/**

  * Submit By Ctrl+Enter 
  * By Fm Web (Recouse)
  * http://fm-web.studio

 */

$(function(){
    var forms = 'div.cTopicPostArea > form.ipsForm, div#elMessageViewer div[data-controller="core.front.core.commentFeed"] form.ipsForm';
    
    $(forms).keydown(function(event) {
        if(event.ctrlKey && event.which == 13) {
           $(forms).submit();
        };
    });
});