module.exports = {
  apps: [
    {
      name: 'wedding-invitation',
      script: 'npm',
      args: 'run preview -- --host 127.0.0.1 --port 4321',
      env: { NODE_ENV: 'production' },
    },
  ],
};
