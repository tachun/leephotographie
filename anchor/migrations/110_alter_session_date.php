<?php

class Migration_alter_session_date extends Migrations\Migration {

	public function up() {
		$table = $this->prefix('sessions');

		if($this->has_table_column($table, 'date')) {
			$sql = 'ALTER TABLE `' . $table . '` CHANGE `date` `expire` int(10) NOT NULL AFTER `id`';
			DB::ask($sql);
		}
	}

	public function down() {}

}