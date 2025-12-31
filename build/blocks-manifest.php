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
		'description' => 'A block to showcase team members with their details and photos.',
		'example' => array(
			'attributes' => array(
				'columns' => 2
			),
			'innerBlocks' => array(
				array(
					'name' => 'create-block/sp-team-member',
					'attributes' => array(
						'name' => 'Mohammad',
						'bio' => 'Mos jeta Mac-er jonno shetar moto Windows e system-wide smooth/kinetic scrolling support er ekta perfect free version nai (dukkhojanok reality).',
						'url' => 'https://tse2.mm.bing.net/th/id/OIP.j7sZ8mcnlXSXVD_mNzlFvQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
						'socialLinks' => array(
							array(
								'icon' => 'facebook'
							),
							array(
								'icon' => 'instagram'
							)
						)
					)
				),
				array(
					'name' => 'create-block/sp-team-member',
					'attributes' => array(
						'name' => 'Mohammad',
						'bio' => 'Mos jeta Mac-er jonno shetar moto Windows e system-wide smooth/kinetic scrolling support er ekta perfect free version nai (dukkhojanok reality).',
						'url' => 'https://tse2.mm.bing.net/th/id/OIP.j7sZ8mcnlXSXVD_mNzlFvQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
						'socialLinks' => array(
							array(
								'icon' => 'facebook'
							),
							array(
								'icon' => 'instagram'
							)
						)
					)
				)
			)
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
