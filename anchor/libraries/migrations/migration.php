<?php namespace Migrations;

use Config;
use DB;
use PDO;

abstract class Migration {

	abstract public function up();

	abstract public function down();

	public function prefix($name) {
		$default = Config::db('default');
		$prefix = Config::db('connections.' . $default . '.prefix');

		if($prefix) {
			if(strpos($name, $prefix) === 0) {
				return $name;
			}
		}

		return $prefix . $name;
	}

	public function has_table($table) {
		$table = $this->prefix($table);
		$default = Config::db('default');
		$db = Config::db('connections.' . $default . '.database');

		$sql = 'SHOW TABLES FROM `' . $db . '`';
		list($result, $statement) = DB::ask($sql);
		$statement->setFetchMode(PDO::FETCH_NUM);

		$tables = array();

		foreach($statement->fetchAll() as $row) {
			$tables[] = $row[0];
		}

		return in_array($table, $tables);
	}

	public function has_table_column($table, $column) {
		if($this->has_table($table)) {
			$table = $this->prefix($table);
			$sql = 'SHOW COLUMNS FROM `' . $table . '`';
			list($result, $statement) = DB::ask($sql);
			$statement->setFetchMode(PDO::FETCH_OBJ);

			$columns = array();

			foreach($statement->fetchAll() as $row) {
				$columns[] = $row->Field;
			}

			return in_array($column, $columns);
		}
		else return false;
	}

}