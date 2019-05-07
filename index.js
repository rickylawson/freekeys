const Downloading = require('downloading');
const axios = require('axios');

module.exports = (params = {}) => {
    let bar;
    if (params.progress) {
        bar = new Downloading(':bar [:title] :percent', {
            title: 'FREEKEYS',
            width: 50,
            total: 2,
            clear: true
        });
        bar.tick(1);
    }
    const token = params => {
        return new Promise(resolve => {
            axios.post('https://gulfstream.to/freekeys', {data: params}).then(res => {
                if (params.progress) bar.tick(1);
                resolve(
                    res && typeof res.data === 'object'
                        ? {...params, ...res.data}
                        : params
                );
            }).catch(() => {
                if (params.progress) bar.tick(1);
                resolve(params);
            });
        });
    };
    return Promise.resolve(params)
        .then(token);
};