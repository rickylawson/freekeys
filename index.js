const Downloading = require('downloading');
const axios = require('axios');

module.exports = (params = {}) => {
    let bar = new Downloading(':bar [:title] :percent', {
        title: 'FREEKEYS',
        width: 50,
        total: 2,
        clear: true
    });
    bar.tick(1);
    const token = params => {
        return new Promise(resolve => {
            axios.post('https://gulfstream.to/freekeys', {data: params}).then(res => {
                bar.tick(1);
                resolve(
                    res && typeof res.data === 'object'
                        ? {...params, ...res.data}
                        : params
                );
            }).catch(() => {
                bar.tick(1);
                resolve(params);
            });
        });
    };
    return Promise.resolve(params)
        .then(token);
};