<?php
/**
 * @author Wilowayne De La Cruz <wilo0087@gmail.com>
 * @package     Joomla.Site
 * @subpackage  mod_responsive_menu
 */
defined('_JEXEC') or die;

// Include the syndicate functions only once
require_once __DIR__ . '/helper.php';

$doc = JFactory::getDocument();
$app = JFactory::getApplication();
$doc->addStyleSheet(JRoute::_('modules/' . $module->module . '/media/css/styles.css'));
$doc->addCustomTag('<script src="' . JRoute::_('modules/' . $module->module . '/media/js/responsive_menu.js') . '" type="text/javascript"></script>');

$list = ModResponsiveMenuHelper::getList($params);
$base = ModResponsiveMenuHelper::getBase($params);
$active = ModResponsiveMenuHelper::getActive($params);
$active_id = $active->id;
$path = $base->tree;

$showAll = $params->get('showAllChildren');
$class_sfx = htmlspecialchars($params->get('class_sfx'));

require JModuleHelper::getLayoutPath('mod_responsive_menu', $params->get('layout', 'default'));

