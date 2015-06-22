(function($) {
  console.log(drupalSettings);

  function initInstafeed(tag, id) {
    var feed = new Instafeed({
      get: 'tagged',
      tagName: tag,
      target: id,
      clientId: drupalSettings.itkInstagramHashtag.clientId,
      limit: drupalSettings.itkInstagramHashtag.limit,
      resolution: drupalSettings.itkInstagramHashtag.resolution,
      sortBy: drupalSettings.itkInstagramHashtag.sortBy,
      template: '<a href="{{link}}" class="itk_instagram_hashtag--link"><img class="itk_instagram_hashtag--image" src="{{image}}" /></a>'
    });
    feed.run();
  }

  $('.instagram-hashtag--content').each(function() {
    initInstafeed((this.id.split('--'))[1], this.id);
  });
}(jQuery));
