module.exports = {
  apps : [{
    name: 'API',
    script: 'index.js',

    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host: '47.95.113.32',
      ref  : 'origin/master',
      repo: 'git@github.com:clm1100/little.git',
      path : '/home/test',
      ssh_options: "StrictHostKeyChecking=no",
      // 'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      "post-deploy": "git pull origin master && npm install && pm2 start index.js"
    }
  }
};
