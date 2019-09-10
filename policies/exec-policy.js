/**
 * ```yaml
 * policies:
 *     - exec:
 *         - action:
 *             filePath: "./config/scripts/script.js"
 *
 * ```
 */
module.exports = {
  name: 'exec',
  schema: {
    $id: '9208b270-4946-484c-b6ef-fdd928c6db77',
    properties: {
      filePath: {
        type: 'string'
      },
      params: {
        type: 'object'
      }
    },
    required: ['filePath']
  },
  policy: actionParams => {
    return (req, res, next) => {
      const middleware = require(`${__dirname}/../../../${
        actionParams.filePath
      }`);
      req.actionParams = actionParams;
      middleware(req, res, next);
    };
  }
};
