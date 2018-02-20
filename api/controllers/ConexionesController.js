/**
 * ConexionesController
 *
 * @description :: Server-side logic for managing Conexiones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `ConexionesController.imprimir()`
   */
  getSite: function (site) {
    var site;
    switch (site) {
      case 'acoxpa':
        return 40001;
      case 'universidad':
        return 40002;
      default:
        return false;
    }
  },

  /**
   * `ConexionesController.imprimir()`
   */
  imprimir: function (req, res) {
    var body = req.body;
    var sucursal = module.exports.getSite(req.params.site);
    var vendor = req.params.vendor;

    Conexiones.getAll(function(data) {
      if (!data) res.serverError('Error en la consulta', 'views/500.ejs');

      Conexiones.getCount({}, function(count){
        if (!data) res.serverError('Error en la consulta', 'views/500.ejs');

        return res.view('resultados', {datos: data, cont: count});
      });
    });
  },


  /**
   * `ConexionesController.obtenerInfo()`
   */
  obtenerInfo: function (req, res) {
    var body = req.body;
    var vendor = req.params.vendor;
    var sucursal = module.exports.getSite(req.params.site);

    Conexiones.saver(vendor, body, sucursal, function(saved) {
      if (!saved) res.serverError('Error en el guardado', 'views/500.ejs');

      module.exports.validar(req, res);
    });
  },


  /**
   * `ConexionesController.validar()`
   */
  validar: function (req, res) {
    switch (req.params.site) {
      case 'acoxpa':
        return res.send('39db85d1ba6594d753fde63af48f0d0618d9cfdd');
      case 'universidad':
        return res.send('7c8a20e467712ce68d3932d1ac6c882c995385ad');
      default:
        return;
    }
  }
};

