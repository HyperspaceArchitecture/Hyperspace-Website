<?php
/**
 * Site header.
 *
 * @package Hyperspace_Architecture
 */

$data        = hyperspace_site_data();
$disciplines = isset( $data['disciplines'] ) ? $data['disciplines'] : array();
$order       = isset( $data['disciplineOrder'] ) ? $data['disciplineOrder'] : array();
$paths       = isset( $data['disciplinePaths'] ) ? $data['disciplinePaths'] : array();
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header">
	<div class="header-identity">
		<a class="brand" href="<?php echo hyperspace_page_url(); ?>" aria-label="Hyperspace Architecture home">
			<img src="<?php echo hyperspace_theme_asset( 'brand/hyperspace-wordmark.png' ); ?>" alt="Hyperspace Contextual Urbanism">
		</a>
		<a class="institute-mark" href="https://members.architecture.com.au/faaprofile?profileid=020e7a21-0815-432a-9a7b-e5419f33e8f5" target="_blank" rel="noreferrer" aria-label="Hyperspace A+ practice profile at the Australian Institute of Architects">
			<img src="<?php echo hyperspace_theme_asset( 'brand/aia-logo.png' ); ?>" alt="Australian Institute of Architects">
		</a>
		<div class="social-links" aria-label="Hyperspace social profiles">
			<?php foreach ( hyperspace_social_links() as $label => $social ) : ?>
				<a href="<?php echo esc_url( $social[0] ); ?>" target="_blank" rel="noreferrer" aria-label="<?php echo esc_attr( $label ); ?>" title="<?php echo esc_attr( $label ); ?>">
					<img src="<?php echo hyperspace_theme_asset( 'brand/' . $social[1] ); ?>" alt="">
				</a>
			<?php endforeach; ?>
		</div>
	</div>
	<button class="menu-button" type="button" aria-expanded="false" aria-controls="primary-navigation">Menu</button>
	<nav id="primary-navigation" aria-label="Primary navigation">
		<a href="<?php echo hyperspace_page_url(); ?>">Home</a>
		<a href="<?php echo hyperspace_page_url( 'about' ); ?>">About</a>
		<div class="nav-group">
			<a href="<?php echo hyperspace_page_url( 'projects' ); ?>">Projects</a>
			<div class="nav-flyout">
				<?php foreach ( $order as $key ) : ?>
					<a href="<?php echo hyperspace_page_url( trim( $paths[ $key ], '/' ) ); ?>"><?php echo esc_html( $disciplines[ $key ]['shortTitle'] ); ?></a>
				<?php endforeach; ?>
			</div>
		</div>
		<a href="<?php echo hyperspace_page_url( 'careers' ); ?>">Careers</a>
		<a href="<?php echo hyperspace_page_url( 'design-process' ); ?>">Design process</a>
		<a href="<?php echo hyperspace_page_url( 'latestnews' ); ?>">News</a>
		<a href="<?php echo hyperspace_page_url( 'contact' ); ?>">Contact</a>
		<a href="<?php echo hyperspace_page_url( 'blog' ); ?>">Blog</a>
		<a href="<?php echo hyperspace_page_url( 'press-outreach' ); ?>">Press &amp; outreach</a>
		<a href="<?php echo hyperspace_page_url( 'resources' ); ?>">Resources</a>
	</nav>
	<a class="header-symbol" href="<?php echo hyperspace_page_url(); ?>" aria-label="Back to home">
		<img src="<?php echo hyperspace_theme_asset( 'brand/hyperspace-symbol.png' ); ?>" alt="">
	</a>
</header>
