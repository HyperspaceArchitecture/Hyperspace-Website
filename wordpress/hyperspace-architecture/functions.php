<?php
/**
 * Theme setup and shared helpers.
 *
 * @package Hyperspace_Architecture
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function hyperspace_architecture_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support(
		'html5',
		array( 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' )
	);
}
add_action( 'after_setup_theme', 'hyperspace_architecture_setup' );

function hyperspace_architecture_assets() {
	wp_enqueue_style(
		'hyperspace-architecture',
		get_stylesheet_uri(),
		array(),
		wp_get_theme()->get( 'Version' )
	);
	wp_enqueue_script(
		'hyperspace-architecture',
		get_template_directory_uri() . '/assets/theme.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);
}
add_action( 'wp_enqueue_scripts', 'hyperspace_architecture_assets' );

function hyperspace_theme_asset( $path ) {
	return esc_url( get_template_directory_uri() . '/assets/' . ltrim( $path, '/' ) );
}

function hyperspace_site_data() {
	static $data = null;

	if ( null === $data ) {
		$path = get_template_directory() . '/inc/site-data.json';
		$data = json_decode( (string) file_get_contents( $path ), true );
	}

	return is_array( $data ) ? $data : array();
}

function hyperspace_page_url( $slug = '' ) {
	return esc_url( home_url( '/' . trim( $slug, '/' ) . ( $slug ? '/' : '' ) ) );
}

function hyperspace_social_links() {
	return array(
		'Houzz'     => array( 'https://www.houzz.com.au/professionals/architects/hyperspace-architecture-pfvwau-pf~1262899406', 'houzz.png' ),
		'LinkedIn'  => array( 'https://www.linkedin.com/company/hyperspacedesigns/?originalSubdomain=au', 'linkedin.png' ),
		'Pinterest' => array( 'https://au.pinterest.com/hyperspacearchitects/', 'pinterest.png' ),
		'YouTube'   => array( 'https://www.youtube.com/@Hyperspace-Architecture', 'youtube.png' ),
		'Facebook'  => array( 'https://www.facebook.com/Hyperspace.Architecture/', 'facebook.png' ),
		'Instagram' => array( 'https://www.instagram.com/hyperspace_architecture/', 'instagram.png' ),
		'TikTok'    => array( 'https://www.tiktok.com/@hyperspace_architecture', 'tiktok.png' ),
	);
}

function hyperspace_install_test_pages() {
	$pages = array(
		'home'             => 'Home',
		'about'            => 'About',
		'projects'         => 'Projects',
		'careers'          => 'Careers',
		'design-process'   => 'Design Process',
		'latestnews'       => 'Latest News',
		'contact'          => 'Contact',
		'blog'             => 'Blog',
		'press-outreach'   => 'Press & Outreach',
		'resources'        => 'Resources',
		'residential'      => 'Residential Architecture',
		'commercial'       => 'Commercial Architecture',
		'multi-dwelling'   => 'Multi-dwelling Architecture',
		'interiordesign'   => 'Interior Design',
		'heritage'         => 'Heritage Architecture',
		'planning'         => 'Planning & Urbanism',
	);

	foreach ( $pages as $slug => $title ) {
		if ( get_page_by_path( $slug ) ) {
			continue;
		}

		wp_insert_post(
			array(
				'post_type'    => 'page',
				'post_status'  => 'publish',
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_content' => '',
			)
		);
	}

	$home = get_page_by_path( 'home' );
	if ( $home ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home->ID );
	}

	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'hyperspace_install_test_pages' );

function hyperspace_meta_description() {
	$description = 'Award-winning Canberra architects for residential, commercial, multi-dwelling, interiors, heritage and planning projects across ACT and NSW.';
	?>
	<meta name="description" content="<?php echo esc_attr( $description ); ?>">
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
	<link rel="icon" href="<?php echo hyperspace_theme_asset( 'favicon.svg' ); ?>">
	<?php
}
add_action( 'wp_head', 'hyperspace_meta_description', 1 );
