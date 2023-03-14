const { logger } = require('../../utils/logger');
const { validator } = require('../../utils/validator');
const { listSchema } = require('../schema/base');

async function service(data, _rave) {
  validator(listSchema, data);
  data.method = 'GET';
  const { body: response } = await _rave.request(
    `v3/bills?from=${data.from}&to=${data.to}`,
    data,
  );
  logger(`Fetch bill payments`, _rave);
  return response;
}

module.exports = service;
