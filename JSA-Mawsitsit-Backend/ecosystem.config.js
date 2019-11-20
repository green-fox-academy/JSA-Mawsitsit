module.exports = {
  apps: [{
    name: 'jsa-mawsitsit-backend',
    script: './index.js',
    env_production: {
      PORT: 3001,
    },
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-199-17-156.ap-northeast-1.compute.amazonaws.com',
      key: '~/.ssh/jsa-mawsitsit-kp.pem',
      ref: 'origin/master',
      repo: 'git@github.com:green-fox-academy/JSA-Mawsitsit.git',
      path: '/home/ubuntu/jsa-mawsitsit-backend',
      'post-deploy': 'cd JSA-Mawsitsit-Backend && npm install && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
