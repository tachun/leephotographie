<?php

class Migration_drop_sessions_ip extends Migrations\Migration {

	public function up() {
		$table = $this->prefix('sessions');

		if($this->has_table_column($table, 'ip')) {
			$sql = 'ALTER TABLE `' . $table . '` DROP `ip`';
			DB::ask($sql);
		}
	}

	public function down() {}

}