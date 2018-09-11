import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'hello',
    uiExports: {
      app: {
              title: 'FileUpload',
              description: 'An awesome Kibana plugin',
              main: 'plugins/hello/app'
            },



    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }


  });
};
