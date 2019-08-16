const product = (params = {}) => {
    const {status = 200, data = null, error = ''} = params;
    return {
        status,
        data,
        error
    }
}

exports.product = product;