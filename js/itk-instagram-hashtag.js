(function($) {
  function initInstafeed(tag, id) {
    var feed = new Instafeed({
      get: 'tagged',
      tagName: tag,
      target: id,
      clientId: drupalSettings.itkInstagramHashtag.clientId,
      limit: drupalSettings.itkInstagramHashtag.limit,
      resolution: drupalSettings.itkInstagramHashtag.resolution,
      sortBy: drupalSettings.itkInstagramHashtag.sortBy,
      template: '<figure class="instagram-gallery--figure"><a href="{{link}}" title="{{caption}}" class="instagram-gallery--link"><img src="{{image}}" class="instagram-gallery--image"></a><figcaption class="instagram-gallery--caption">{{caption}}</figcaption></figure>'
    });
    feed.run();
  }

  $('.instagram-gallery--wrapper').each(function() {
    initInstafeed((this.id.split('--'))[1], this.id);
  });
}(jQuery));
