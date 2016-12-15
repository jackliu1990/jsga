/**
 * Created by wongjimsan on 16-12-15.
 */
import inherits from '../inherits';
import extend from '../extend';
import Geometry from 'geometry';
import GeometryType from 'geometrytype';

export default function Rectangle() {
    this.minx = null;
    this.miny = null;
    this.maxx = null;
    this.maxy = null;
    if (arguments.length === 0) {
        Rectangle.call(this, 0.0, 0.0, 0.0, 0.0);
    } else if (arguments.length === 1) {
        let rectangle = arguments[0];
        Rectangle.call(this, rectangle.minx, rectangle.miny, rectangle.maxx, rectangle.maxy);
    } else if (arguments.length === 4) {
        let minx = arguments[0];
        let miny = arguments[1];
        let maxx = arguments[2];
        let maxy = arguments[3];
        this.minx = minx;
        this.miny = miny;
        this.maxx = maxx;
        this.maxy = maxy;
    }
}
inherits(Rectangle, Geometry)

extend(Rectangle.prototype, {})