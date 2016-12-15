/**
 * Created by wongjimsan on 16-12-15.
 */
import extend from '../extend';
import geometryType from 'geometrytype'

export default  function Geometry() {
    this.srid = null;
}

extend(Geometry.prototype, {
    setSRID: function (srid) {
        this.srid = srid;
    },

    getSRID: function () {
        return this.srid;
    },

    getGeometryType: function () {
        return geometryType.Geometry;
    },

    equals: function (geometry) {
        return false;
    },

    clone: function () {
        return new Geometry();
    },

    getBoundingBox: function () {
        return null;
    },

    fromWKT: function (wkt) {

    },

    asWKT: function () {
        return null;
    },

    fromGeoJson: function (geoJson) {

    },

    asGeoJson: function () {
        return null;
    }

})
