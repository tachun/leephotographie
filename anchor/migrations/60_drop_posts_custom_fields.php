<?php

class Migration_drop_posts_custom_fields extends Migrations\Migration {

	public function up() {
		$table = $this->prefix('post_meta');

		if($this->has_table_column($table, 'custom_fields')) {
			$sql = 'ALTER TABLE `' . $table . '` DROP `custom_fields`';
			DB::ask($sql);
		}
	}

	public function down() {}

}