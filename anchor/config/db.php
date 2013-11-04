<?php

return array(
	'default' => 'mysql',
	'connections' => array(
		'mysql' => array(
			'driver' => 'mysql',
			'hostname' => 'localhost',
			'port' => 3306,
			'username' => 'root',
			'password' => 'root',
			'database' => 'anchor',
			'prefix' => 'anchor_',
			'charset' => 'utf8'
		)
	)
);