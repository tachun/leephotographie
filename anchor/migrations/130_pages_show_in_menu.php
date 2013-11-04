<?php

class Migration_pages_show_in_menu extends Migrations\Migration {

	public function up() {
		$table = $this->prefix('pages');

		if( ! $this->has_table_column($table, 'show_in_menu')) {
			$sql = 'ALTER TABLE `' . $table . '` ADD `show_in_menu` tinyint(1) NOT NULL';
			DB::ask($sql);
		}
	}

	public function down() {}

}