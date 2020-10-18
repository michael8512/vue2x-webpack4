export function MP(ak) {
    return new Promise((resolve, reject)=> {
        window.init = function () {
            resolve(BMap);
        }
        
    })
}