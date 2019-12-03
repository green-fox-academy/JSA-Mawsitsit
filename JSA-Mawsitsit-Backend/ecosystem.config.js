module.exports = {
  apps: [{
    name: 'jsa-mawsitsit-backend',
    script: './index.js',
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-197-107-239.ap-northeast-1.compute.amazonaws.com',
      key: '~/.ssh/jsa-mawsitsit-kp.pem',
      ref: 'origin/master',
      repo: 'git@github.com:green-fox-academy/JSA-Mawsitsit.git',
      path: '/home/ubuntu/jsa-mawsitsit-backend',
      'post-deploy': 'cd JSA-Mawsitsit-Backend && npm install && node migration.js refresh && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
