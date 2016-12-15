/**
 * Created by wongjimsan on 16-12-15.
 */

import inherits from '../inherits';
import extend from '../extend';
import Geometry from 'geometry';
import GeometryType from 'geometrytype';

export default  function Point() {
    this.x = null;
    this.y = null;
    if (arguments.length === 0) {
        Point.call(this, 0.0, 0.0);
    } else if (arguments.length === 1) {
        let point = arguments[0];
        Point.call(this, point.x, point.y);
    } else if (arguments.length === 2) {
        let x = arguments[0];
        let y = arguments[1];
        this.x = x;
        this.y = y;
    }
}

inherits(Point, Geometry)

extend(Point.prototype, {
    getGeometryType: function () {
        return GeometryType.Point;
    },

    equals: function (geometry) {
        return this.x === geometry.x && this.y === geometry.y;
    },

    clone: function () {
        return new Point(this);
    },

    getBoundingBox: function () {

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
