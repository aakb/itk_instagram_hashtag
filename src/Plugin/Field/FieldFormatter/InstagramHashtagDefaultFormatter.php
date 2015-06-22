<?php
/**
 * @file
 * Contains \Drupal\itk_instagram_hashtag\Plugin\Field\FieldFormatter\InstagramHashtagDefaultFormatter.
 */

namespace Drupal\itk_instagram_hashtag\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Component\Utility\String;

/**
 * Plugin implementation of the 'field_instagram_hashtag_default_formatter' formatter.
 *
 * @FieldFormatter(
 *   id = "field_instagram_hashtag_default_formatter",
 *   label = @Translation("Instagram hashtag default formatter"),
 *   module = "itk_instagram_hashtag",
 *   field_types = {
 *     "field_instagram_hashtag"
 *   }
 * )
 */
class InstagramHashtagDefaultFormatter extends FormatterBase {
  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items) {
    $elements = array();
    foreach ($items as $delta => $item) {
      // Render output using itk_instagram_hashtag_default theme.
      $source = array(
        '#theme' => 'itk_instagram_hashtag_default_theme',
        '#instagram_hashtag' => String::checkPlain($item->value),
      );

      $elements[$delta] = array('#markup' => drupal_render($source));
    }

    return $elements;
  }
}