<?php echo $header; ?>

<section class="content">
	<article>
		<h1>Hello. Willkommen. Bonjour. Croeso.</h1>

		<p>If you were looking for a truly lightweight blogging experience, you&rsquo;ve
		found the right place. Simply fill in the details below, and you&rsquo;ll have your
		new blog set up in no time.</p>
	</article>

	<form method="post" action="<?php echo uri_to('start'); ?>" autocomplete="off">
		<?php echo $messages; ?>

		<fieldset>
			<p>
				<label for="lang">
					<strong>Language</strong>
					<span class="info">Anchor's language.</span>
				</label>
				<select id="lang" name="language">
					<?php foreach($languages as $lang): ?>
					<?php $selected = ($lang == $prefered_language) ? ' selected' : ''; ?>
					<option<?php echo $selected; ?>><?php echo $lang; ?></option>
					<?php endforeach; ?>
				</select>
			</p>

			<p>
				<label for="timezone">
					<strong>Timezone</strong>
					<span class="info">Your current time zone.</span>
				</label>
				<select id="timezone" name="timezone">
					<?php foreach($timezones as $ident): ?>
					<?php $selected = ($ident == $prefered_timezone) ? ' selected' : ''; ?>
					<option<?php echo $selected; ?>><?php echo $ident; ?></option>
					<?php endforeach; ?>
				</select>
			</p>
		</fieldset>

		<section class="options">
			<button type="submit" class="btn">Next Step &raquo;</button>
		</section>
	</form>
</section>

<?php echo $footer; ?>