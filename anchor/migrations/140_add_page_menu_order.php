<?php

class Migration_add_page_menu_order extends Migrations\Migration {

	public function up() {
		$table = $this->prefix('pages');

		if( ! $this->has_table_column($table, 'menu_order')) {
			$sql = 'ALTER TABLE `' . $table . '` ADD `menu_order` int(4) NOT NULL';
			DB::ask($sql);
		}
	}

	public function down() {}

}