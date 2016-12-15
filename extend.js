/**
 * Created by wongjimsan on 16-12-15.
 */
export default function (target, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key]
        }
    }
}
