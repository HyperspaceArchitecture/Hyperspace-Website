<?php
/**
 * Theme fallback.
 *
 * @package Hyperspace_Architecture
 */

get_header();
?>
<main class="page-content">
	<section class="page-section wrap">
		<p class="eyebrow">Hyperspace Architecture</p>
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<article <?php post_class(); ?>>
					<h1><?php the_title(); ?></h1>
					<?php the_content(); ?>
				</article>
			<?php endwhile; ?>
		<?php else : ?>
			<h1>Nothing found</h1>
		<?php endif; ?>
	</section>
</main>
<?php get_footer(); ?>
