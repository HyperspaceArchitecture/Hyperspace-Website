<?php
/**
 * Homepage.
 *
 * @package Hyperspace_Architecture
 */

$data        = hyperspace_site_data();
$projects    = $data['projects'];
$disciplines = $data['disciplines'];
$order       = $data['disciplineOrder'];
$paths       = $data['disciplinePaths'];
$filters     = $data['sectorFilters'];

get_header();
?>
<main>
	<section id="top" class="hero">
		<img src="<?php echo esc_url( $projects[0]['image'] ); ?>" alt="Shangrila Retreat by Hyperspace Architecture">
		<div class="hero-shade"></div>
		<div class="hero-copy">
			<p>Architecture · Planning · Interiors · Heritage</p>
			<h1>Designed with clarity.<br>Delivered with certainty.</h1>
			<div class="hero-meta">
				<span>Canberra · Sydney · Regional NSW</span>
				<a href="#disciplines">Explore the practice ↓</a>
			</div>
		</div>
	</section>

	<section id="practice" class="intro wrap">
		<p class="eyebrow">Hyperspace Architecture</p>
		<div class="intro-grid">
			<h2>One practice from feasibility and approvals through to construction documentation.</h2>
			<div>
				<p>We bring planning, architecture, interiors, heritage and technical delivery together. Complex projects become clearer, coordination gaps reduce and the design intent stays intact.</p>
				<p>Based in Canberra and working across the ACT, NSW and selected national and international locations.</p>
			</div>
		</div>
	</section>

	<section id="disciplines" class="discipline-index">
		<div class="discipline-index-head wrap">
			<p class="eyebrow">Our disciplines</p>
			<h2>One team. Six connected areas of expertise.</h2>
		</div>
		<div class="discipline-cards">
			<?php foreach ( $order as $index => $key ) : $discipline = $disciplines[ $key ]; ?>
				<a class="discipline-card" href="<?php echo hyperspace_page_url( trim( $paths[ $key ], '/' ) ); ?>">
					<div class="discipline-card-image">
						<img <?php echo $index > 2 ? 'loading="lazy"' : ''; ?> src="<?php echo esc_url( $discipline['hero'] ); ?>" alt="<?php echo esc_attr( $discipline['title'] . ' by Hyperspace Architecture' ); ?>">
					</div>
					<div class="discipline-card-copy">
						<span><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
						<h3><?php echo esc_html( $discipline['shortTitle'] ); ?></h3>
						<p><?php echo esc_html( $discipline['summary'] ); ?></p>
						<b>Explore ↗</b>
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="gap-statement">
		<div class="gap-copy wrap">
			<h2>Most projects don’t fail at the drawing board. They fail in the gaps — between planning and design, design and documentation, documentation and site. <em>We removed the gaps.</em></h2>
			<div class="gap-columns">
				<p>Hyperspace is a registered architectural practice bringing planning, architecture, interiors, heritage and construction documentation into a single coordinated service. The people who test a site’s feasibility remain connected to the people who answer the site questions later.</p>
				<p>The practice works across hospitality, residential, workplace, urbanism, interiors and heritage—from adaptable housing and commercial developments to careful fabric conservation where legislation is as demanding as the detailing.</p>
				<p>Our Canberra studio delivers work across the Australian Capital Territory and New South Wales, with selected projects extending nationally and internationally.</p>
			</div>
		</div>
		<div class="credential-band">
			<div><strong>A+</strong><span>Institute standing</span><p>Registered A+ practice of the Australian Institute of Architects</p></div>
			<div><strong>ISO 9001</strong><span>Certification</span><p>Quality management system certified to ISO 9001:2015</p></div>
			<div><strong>2</strong><span>Jurisdictions</span><p>Registered architect ACT 2456 and NSW 11796</p></div>
			<div><strong>6</strong><span>Disciplines</span><p>Planning, architecture, interiors, heritage, documentation and CA</p></div>
			<div><strong>∞</strong><span>Building height</span><p>NSW Design &amp; Building Practitioner — unlimited rise</p></div>
		</div>
	</section>

	<section id="work" class="work">
		<div class="section-title wrap">
			<div>
				<p class="eyebrow">Selected work</p>
				<h2>An extensive portfolio, clearly presented.</h2>
			</div>
		</div>
		<div class="filters" aria-label="Filter projects">
			<?php foreach ( $filters as $filter ) : ?>
				<button type="button" data-filter="<?php echo esc_attr( $filter ); ?>" class="<?php echo 'All' === $filter ? 'active' : ''; ?>" aria-pressed="<?php echo 'All' === $filter ? 'true' : 'false'; ?>"><?php echo esc_html( $filter ); ?></button>
			<?php endforeach; ?>
		</div>
		<div class="project-grid">
			<?php foreach ( $projects as $index => $project ) : ?>
				<article class="project <?php echo ! empty( $project['wide'] ) ? 'wide' : ''; ?>" data-sector="<?php echo esc_attr( $project['sector'] ); ?>">
					<div class="image-frame">
						<img <?php echo $index > 5 ? 'loading="lazy"' : ''; ?> src="<?php echo esc_url( $project['image'] ); ?>" alt="<?php echo esc_attr( $project['name'] . ', ' . $project['place'] . ', by Hyperspace Architecture' ); ?>">
					</div>
					<div class="project-copy">
						<h3><?php echo esc_html( $project['name'] ); ?></h3>
						<p><?php echo esc_html( $project['sector'] . ' · ' . $project['place'] ); ?></p>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="testimonials">
		<div class="testimonials-head wrap">
			<p class="eyebrow">Clients</p>
			<h2>On the record</h2>
		</div>
		<div class="testimonial-grid">
			<blockquote>
				<p><em>“Hyperspace persisted with revised designs that satisfied the authority and the neighbours—and still maximised FSR.”</em></p>
				<cite>Kishore Tiwari · Weetangera, Canberra</cite>
			</blockquote>
			<blockquote>
				<p><em>“They guided me through designing my home while listening to what mattered to me, and kept approvals on track without any fuss.”</em></p>
				<cite>Devina Skene · Gordon, Canberra</cite>
			</blockquote>
			<blockquote>
				<p><em>“We trust their feasibility, planning and design advice across warehouses, showrooms and multi-dwelling developments.”</em></p>
				<cite>SEUM · Mitchell, Canberra</cite>
			</blockquote>
		</div>
	</section>

	<section id="process" class="process wrap">
		<p class="eyebrow">How we work</p>
		<div class="process-head">
			<h2>Simple stages.<br>No mystery.</h2>
			<p>A clear, coordinated path from the first site question to a buildable outcome.</p>
		</div>
		<ol>
			<li><b>01</b><span>Feasibility</span><p>Site, planning, risk and development potential.</p></li>
			<li><b>02</b><span>Concept</span><p>Brief, options, cost awareness and design direction.</p></li>
			<li><b>03</b><span>Approvals</span><p>Planning strategy, consultant coordination and submissions.</p></li>
			<li><b>04</b><span>Documentation</span><p>Detailed, coordinated information for approval and construction.</p></li>
			<li><b>05</b><span>Delivery</span><p>Tender support, site review and contract administration.</p></li>
		</ol>
	</section>

	<section class="cta">
		<img src="<?php echo esc_url( $projects[4]['image'] ); ?>" alt="Hotel Pavilion mixed-use project">
		<div>
			<p class="eyebrow">Start a conversation</p>
			<h2>Have a site or project in mind?</h2>
			<a href="mailto:contact@hyper-space.com.au">Tell us about it ↗</a>
		</div>
	</section>
</main>
<?php get_footer(); ?>
