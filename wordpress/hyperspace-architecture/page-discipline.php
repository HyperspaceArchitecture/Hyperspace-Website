<?php
/**
 * Shared template for the six discipline pages.
 *
 * @package Hyperspace_Architecture
 */

$data     = hyperspace_site_data();
$slug     = get_post_field( 'post_name', get_queried_object_id() );
$slug_map = array(
	'residential'    => 'residential',
	'commercial'     => 'commercial',
	'multi-dwelling' => 'multidwelling',
	'interiordesign' => 'interiors',
	'heritage'       => 'heritage',
	'planning'       => 'planning',
);
$key      = isset( $slug_map[ $slug ] ) ? $slug_map[ $slug ] : 'residential';
$page     = $data['disciplines'][ $key ];
$order    = $data['disciplineOrder'];
$position = array_search( $key, $order, true );
$next_key = $order[ ( $position + 1 ) % count( $order ) ];
$next     = $data['disciplines'][ $next_key ];
$next_url = trim( $data['disciplinePaths'][ $next_key ], '/' );

get_header();
?>
<main>
	<section class="discipline-hero">
		<img src="<?php echo esc_url( $page['hero'] ); ?>" alt="<?php echo esc_attr( $page['title'] . ' by Hyperspace Architecture' ); ?>">
		<div class="discipline-hero-shade"></div>
		<div class="discipline-hero-copy wrap">
			<p><?php echo esc_html( $page['kicker'] ); ?></p>
			<h1><?php echo esc_html( $page['title'] ); ?></h1>
		</div>
	</section>

	<section class="discipline-intro wrap">
		<div>
			<p class="eyebrow">Hyperspace / <?php echo esc_html( $page['shortTitle'] ); ?></p>
			<h2><?php echo esc_html( $page['summary'] ); ?></h2>
		</div>
		<div class="discipline-copy">
			<p><?php echo esc_html( $page['intro'] ); ?></p>
			<p><?php echo esc_html( $page['statement'] ); ?></p>
		</div>
	</section>

	<section class="services wrap">
		<div class="services-heading">
			<p class="eyebrow">What we do</p>
			<h2>Integrated expertise from first study to built outcome.</h2>
		</div>
		<ol>
			<?php foreach ( $page['services'] as $index => $service ) : ?>
				<li>
					<span><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
					<p><?php echo esc_html( $service ); ?></p>
				</li>
			<?php endforeach; ?>
		</ol>
	</section>

	<section class="discipline-work">
		<div class="discipline-work-head wrap">
			<p class="eyebrow">Selected <?php echo esc_html( strtolower( $page['shortTitle'] ) ); ?> work</p>
			<h2>Projects, studies and built places.</h2>
		</div>
		<div class="discipline-gallery">
			<?php foreach ( $page['gallery'] as $index => $item ) : ?>
				<figure class="<?php echo ! empty( $item['wide'] ) ? 'wide' : ''; ?>">
					<div>
						<img <?php echo $index > 3 ? 'loading="lazy"' : ''; ?> src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['name'] . ' by Hyperspace Architecture' ); ?>">
					</div>
					<figcaption><?php echo esc_html( $item['name'] ); ?></figcaption>
				</figure>
			<?php endforeach; ?>
		</div>
	</section>

	<a class="next-discipline" href="<?php echo hyperspace_page_url( $next_url ); ?>">
		<span>Next discipline</span>
		<strong><?php echo esc_html( $next['title'] ); ?></strong>
		<b>↗</b>
	</a>

	<section class="discipline-cta">
		<p class="eyebrow">Start a conversation</p>
		<h2>Have a project in mind?</h2>
		<a href="mailto:contact@hyper-space.com.au">Tell us about it ↗</a>
	</section>
</main>
<?php get_footer(); ?>
