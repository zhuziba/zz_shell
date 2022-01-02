module.exports = {
  apps: [
    { 
      name: 'server',
      script: './server.js',
      watch: ['server.js'],
      // Delay between restart
      watch_delay: 2000,
      ignore_watch: ['node_modules', 'public'],
      watch_options: {
        followSymlinks: false,
      },
    },{ 
      name: 'web',
      script: './index.js',
      watch: ['index.js'],
      // Delay between restart
      watch_delay: 2000,
      ignore_watch: ['node_modules', 'web'],
      watch_options: {
        followSymlinks: false,
      },
    },
  ],
};
