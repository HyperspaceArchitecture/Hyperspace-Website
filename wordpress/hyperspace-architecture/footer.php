<?php
/**
 * Site footer.
 *
 * @package Hyperspace_Architecture
 */
?>
<footer id="contact" class="wrap">
	<div class="footer-main">
		<a class="brand footer-brand" href="<?php echo hyperspace_page_url(); ?>" aria-label="Home">
			<img src="<?php echo hyperspace_theme_asset( 'brand/hyperspace-wordmark.png' ); ?>" alt="Hyperspace Contextual Urbanism">
		</a>
		<div>
			<p class="eyebrow">Contact</p>
			<a href="tel:+61290710499">+61 2 9071 0499</a>
			<a href="mailto:contact@hyper-space.com.au">contact@hyper-space.com.au</a>
		</div>
		<div>
			<p class="eyebrow">Studio</p>
			<p>G26 / 55 Currong Street North<br>Braddon ACT 2612</p>
		</div>
		<div class="footer-socials">
			<p class="eyebrow">Follow</p>
			<?php foreach ( hyperspace_social_links() as $label => $social ) : ?>
				<a href="<?php echo esc_url( $social[0] ); ?>" target="_blank" rel="noreferrer"><?php echo esc_html( $label ); ?></a>
			<?php endforeach; ?>
		</div>
	</div>
	<div class="footer-note">
		<span>© 2026 Hyperspace Designs Pty Ltd</span>
		<span>ACT 2456 · NSW 11796</span>
		<span>ABN 69 667 248 084</span>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
