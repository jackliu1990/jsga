/**
 * Created by wongjimsan on 16-12-15.
 */
export default function (c, p) {
    c.prototype = Object.create(p.prototype)
    c.prototype.constructure = c
}
