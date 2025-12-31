<?php
// This file is generated. Do not modify it manually.
return array(
	'sp-team-members' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/sp-team-members',
		'version' => '0.1.0',
		'title' => 'Sp Team Members',
		'category' => 'text',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'center',
				'full'
			)
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 2
			)
		),
		'textdomain' => 'sp-team-members',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
