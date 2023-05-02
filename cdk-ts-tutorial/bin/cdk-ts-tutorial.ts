#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkTsTutorialStack } from '../lib/cdk-ts-tutorial-stack';

const app = new cdk.App();
new CdkTsTutorialStack(app, 'CdkTsTutorialStack-dev', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});