/**
 * Vendors/Meraki.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {

	},

	construct: function(data, sucursal, cb) {
		var rows = [];
		for (index in data.data.observations) {
			var client = data.data.observations[index];
			rows.push({
				mac: client['clientMac'],
				registrado: '',
				ssid: client['ssid'],
				rssi: client['rssi'],
				lat: client['location']['lat'],
				lng: client['location']['lng'],
				sucursal_id: sucursal
			});
		}
		return cb(rows);
	}
};

