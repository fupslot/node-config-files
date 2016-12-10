'use strict';
const expect = require('expect');

describe('node-config-files', () => {
  describe('"development" environment', () => {
    const config = require('../')(
      './tests/config',
      { debug: true }
    );

    it('should load config files', () => {
      expect(config).toBeA('object');

      expect(config.common.default).toBeA('object');
      expect(config.common.default.title).toBe(config.packageConfig.name);
      expect(config.common.database.driver).toBe('mongodb');

      expect(config.env.database).toBeA('object');
      expect(config.env.database.address).toBe('localhost');
    });
  });

  describe('"production" environment', () => {
    const config = require('../')(
      './tests/config',
      {
        debug: true,
        NODE_ENV: 'production'
      }
    );

    it('should load config files', () => {
      expect(config).toBeA('object');

      expect(config.env.database).toBeA('object');
      expect(config.env.database.address).toBe('realserver.mongodb');
    });
  });
});
