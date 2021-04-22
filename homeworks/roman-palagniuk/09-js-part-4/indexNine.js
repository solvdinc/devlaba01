/* was unable to understand everything in this task.
  at least found some solution for serialization on youtebe
  other solutions taken from npm packages with functionality which posibly suits this task.
  tried to understand those methods down below.
  of course here a lot of warnings as well as variables taken from context of npm module
 */

const serialize = (obj) => {
  const type = typeof obj;
  if (obj === null) return 'null';
  if (type === 'string') return `'${obj}'`;
  if (type === 'number') return obj.toString();
  if (type === 'boolean') return obj.toString();
  if (type !== 'object') return `${obj}`;
  if (Array.isArray(obj)) {
    return `[${obj}]`;
  }
  let s = '{';

  for (const key in obj) {
    const value = obj[key];
    if (s.length > 1) s += ',';
    s += `${key}:${serialize(value)}`;
  }
  return `${s}}`;
};

// usage
const obj1 = {
  field: 'Value',
  subObject: {
    arr: [7, 10, 3, 2],
    fn: (x) => x / 2,
  },
};

console.log(serialize(obj1));
/*
function serialize(o) {
  const r = function (k, v) {
    if (o[k] instanceof Date) {
      v = new DateProxyForClassSerializer(v);
    }
    return v;
  };
  return JSON.stringify(o, r);
}

function deserialize(json) {
  const r = function (k, v) {
    if (v instanceof Object && v.classname) {
      if (Serializable[srializable_classes][v.classname]) {
        const c = Serializable[srializable_classes][v.classname];

        v = Object.assign(new c(), v);
      } else if (v.classname === 'DateProxyForClassSerializer') {
        return new Date(v.value);
      }
    }
    return v;
  };

  return JSON.parse(json, r);
}
*/
