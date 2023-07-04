export const paramsToQueryString = (obj: Object) => {
    const str = [];
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            // @ts-expect-error
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}
