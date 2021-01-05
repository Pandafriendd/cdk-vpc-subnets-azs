#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkVpcSubnetsAzStack } = require('../lib/cdk-vpc-subnets-az-stack');

const app = new cdk.App();

const _env = { account: '457175632986', region: 'ap-southeast-1' };

new CdkVpcSubnetsAzStack(app, 'CdkVpcSubnetsAzStack', { env: _env });
