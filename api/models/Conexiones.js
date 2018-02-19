/**
 * Conexiones.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  	// Se le especifica a dónde conectarse
  	connection:'servidorMySQL',
  	tableName: 'conexiones',
  	autoCreatedAt: false,
  	autoUpdatedAt: false,

  	attributes: {
		id: {
			primaryKey: true,
			type: 'integer',
			autoIncrement: true,
			unique: true
		},
		mac: {
			type: 'string',
			required: true,
			size: 17
		},
		registrado: {
			type: 'string',
			size: 1
		},
		rssi: {
			type: 'string',
			required: true,
			size: 11
		},
		ssid: {
			type: 'string',
			required: true,
			size: '45'
		},
		latitud: {
			type: 'string',
			size: 10,
			required: true
		},
		longitud: {
			type: 'string',
			size: 10,
			required: true
		},
		sucursal_id: {
			type: 'integer',
			required: true
		}
  	},

  	getAll: function(cb) {
  		Conexiones.find().exec(function(err, data) {
  			if (err) return cb(false);

  			cb(data);
  		});
	},

	getCount: function(criterio, cb) {
	  	Conexiones.count(criterio).exec(function(err, data){
	        if (err) return cb(false);

	        cb(data);
	 	});
	},

	saver: function(vendor, data, sucursal, cb) {
		switch (vendor) {
			case 'meraki':
				Meraki.construct(data, sucursal, function(rows) {
					Conexiones.save(rows, cb);
				});
				break;
			case 'openmesh':
				//OpenMesh.construct(data, cb);
				break;
		}
		
	},

	save: function(rows, cb) {
		Conexiones.create(rows).exec(function(err, saved) {
			if (err) {
				cb (false);
			} else {
				cb(saved);
			}
		});
	}
};