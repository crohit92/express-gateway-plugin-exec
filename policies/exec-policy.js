/**
 * ```yaml
 * policies:
 *     - exec:
 *         - action:
 *             filePath: "./config/scripts/script.js"
 * ```
 */
module.exports = {
  name: 'exec',
  schema: {
    $id: '9208b270-4946-484c-b6ef-fdd928c6db77',
    properties: {
      filePath: {
        type: 'string'
      }
    },
    required: ['filePath']
  },
  policy: actionParams => {
    return (req, res, next) => {
      const middleware = require(`${__dirname}/../../../${
        actionParams.filePath
      }`);
      middleware(req, res, next);
    };
  }
};
