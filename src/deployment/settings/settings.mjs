/** @type {import('../types/settings').DeploymentSettings<'render.com'>} */
const deploymentSettings = {
  host: 'netlify',
  type: 'static',
  services: [],
  static: {
    basePath: '/'
  }
};

export default deploymentSettings;
