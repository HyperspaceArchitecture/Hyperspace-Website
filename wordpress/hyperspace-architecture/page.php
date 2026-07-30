<?php
/**
 * Page router and editable fallback.
 *
 * @package Hyperspace_Architecture
 */

$slug        = get_post_field( 'post_name', get_queried_object_id() );
$disciplines = array(
	'residential',
	'commercial',
	'multi-dwelling',
	'interiordesign',
	'heritage',
	'planning',
);

if ( in_array( $slug, $disciplines, true ) ) {
	require get_template_directory() . '/page-discipline.php';
	return;
}

$data     = hyperspace_site_data();
$projects = $data['projects'];
$pages    = array(
	'about' => array(
		'About',
		'Context first. Disciplines connected.',
		'Hyperspace is an integrated architectural practice offering an end-to-end service from feasibility and planning advice to architecture, interiors, heritage and construction delivery.',
		$projects[0]['image'],
	),
	'projects' => array(
		'Projects',
		'Architecture shaped by context.',
		'Explore residential, commercial, multi-dwelling, interior, heritage and planning work across Canberra, the ACT, NSW and selected international locations.',
		$projects[4]['image'],
	),
	'careers' => array(
		'Careers',
		'Do careful work with people who care.',
		'Hyperspace is a growing, multidisciplinary studio. We welcome thoughtful architects, designers and technical practitioners who value clarity, collaboration and buildable outcomes.',
		$projects[20]['image'],
	),
	'design-process' => array(
		'Design process',
		'Clear stages. Fewer gaps.',
		'Our process connects feasibility, concept, approvals, documentation and delivery so that the early design intent survives the realities of approval and construction.',
		$projects[8]['image'],
	),
	'latestnews' => array(
		'Latest news',
		'Practice updates and project milestones.',
		'News from the studio, project approvals, construction progress, research and ideas shaping our work.',
		$projects[13]['image'],
	),
	'contact' => array(
		'Contact',
		'Tell us what you are planning.',
		'A site, an existing building, an early idea or a difficult approval—we can help define the right next step.',
		$projects[0]['image'],
	),
	'blog' => array(
		'Blog',
		'Practical thinking on design and delivery.',
		'Notes on planning, architecture, interiors, heritage, approvals and the details that turn concepts into buildable outcomes.',
		$projects[14]['image'],
	),
	'press-outreach' => array(
		'Press & outreach',
		'Projects, ideas and public conversations.',
		'Selected media, awards, speaking, community engagement and professional contributions from Hyperspace Architecture.',
		$projects[15]['image'],
	),
	'resources' => array(
		'Resources',
		'Useful information before a project begins.',
		'Guides and practical starting points for clients considering feasibility, approvals, architecture, interiors, heritage or construction documentation.',
		$projects[29]['image'],
	),
);

$content = isset( $pages[ $slug ] ) ? $pages[ $slug ] : array( get_the_title(), get_the_title(), '', $projects[0]['image'] );

get_header();
?>
<main>
	<section class="page-hero wrap">
		<div class="page-hero-copy">
			<p class="eyebrow"><?php echo esc_html( $content[0] ); ?></p>
			<h1><?php echo esc_html( $content[1] ); ?></h1>
			<p><?php echo esc_html( $content[2] ); ?></p>
		</div>
		<div class="page-hero-image">
			<img src="<?php echo esc_url( $content[3] ); ?>" alt="<?php echo esc_attr( $content[1] . ' — Hyperspace Architecture' ); ?>">
		</div>
	</section>

	<div class="page-content">
		<?php if ( 'contact' === $slug ) : ?>
			<section class="page-section wrap contact-grid">
				<div>
					<p class="eyebrow">Studio</p>
					<h2>G26 / 55 Currong Street North<br>Braddon ACT 2612</h2>
					<a class="text-link" href="https://maps.google.com/?q=G26%2F55+Currong+Street+North+Braddon+ACT+2612" target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
				</div>
				<div class="contact-actions">
					<a href="tel:+61290710499"><span>Phone</span><strong>02 9071 0499</strong></a>
					<a href="mailto:contact@hyper-space.com.au"><span>General enquiries</span><strong>contact@hyper-space.com.au</strong></a>
					<a href="mailto:vishal@hyper-space.com.au"><span>Director</span><strong>vishal@hyper-space.com.au</strong></a>
				</div>
			</section>
		<?php elseif ( 'about' === $slug ) : ?>
			<section class="page-section wrap split-copy">
				<div><p class="eyebrow">Our story</p><h2>Built across three countries and more than two decades of practice.</h2></div>
				<div class="body-copy">
					<p>Hyperspace was formally launched in Canberra in 2017, but the practice began when founders Meetu Sharma Saxena and Vishal Saxena entered the profession in 2000.</p>
					<p>Their experience across India, the United Arab Emirates and Australia includes complex, high-value projects requiring design leadership, stakeholder coordination and a strong understanding of how buildings are put together.</p>
					<p>Today, the studio brings that breadth to projects across Canberra, Sydney, regional NSW and selected national and international locations.</p>
				</div>
			</section>
		<?php else : ?>
			<section class="page-section wrap split-copy">
				<div><p class="eyebrow">Hyperspace Architecture</p><h2><?php echo esc_html( $content[1] ); ?></h2></div>
				<div class="body-copy">
					<?php
					while ( have_posts() ) :
						the_post();
						if ( trim( (string) get_the_content() ) ) {
							the_content();
						} else {
							echo '<p>' . esc_html( $content[2] ) . '</p>';
						}
					endwhile;
					?>
				</div>
			</section>
		<?php endif; ?>
		<section class="page-cta">
			<p class="eyebrow">Hyperspace Architecture</p>
			<h2>Have a project in mind?</h2>
			<a href="<?php echo hyperspace_page_url( 'contact' ); ?>">Start a conversation ↗</a>
		</section>
	</div>
</main>
<?php get_footer(); ?>
