#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkVpcSubnetsAzStack } = require('../lib/cdk-vpc-subnets-az-stack');

const app = new cdk.App();
new CdkVpcSubnetsAzStack(app, 'CdkVpcSubnetsAzStack');
