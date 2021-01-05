const cdk = require('@aws-cdk/core');
const ec2 = require('@aws-cdk/aws-ec2');

class CdkVpcSubnetsAzStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // By default, a VPC will spread over at most 3 Availability Zones available to it. 
    // To change the number of Availability Zones that the VPC will spread over, 
    // specify the maxAzs property when defining it.
    // The number of Availability Zones that are available depends on the region and account of the Stack containing the VPC. If the region and account are specified on the Stack, the CLI will look up the existing Availability Zones and get an accurate count. If region and account are not specified, the stack could be deployed anywhere and it will have to make a safe choice, limiting itself to 2 Availability Zones.
    // Therefore, to get the VPC to spread over 3 or more availability zones, 
    // you must specify the environment where the stack will be deployed.

    const vpc1 = new ec2.Vpc(this, 'NCDE', {
      cidr: "172.7.0.0/16",
      //natGateways: 1,
      maxAzs: 3,

      subnetConfiguration: [{
          cidrMask: 24,
          name: 'public-rms-cde',
          subnetType: ec2.SubnetType.PUBLIC,
      },
        {
          cidrMask: 24,
          name: 'pri-rms-cde',
          subnetType: ec2.SubnetType.PRIVATE,
      }

      ]


    })


  }
}

module.exports = { CdkVpcSubnetsAzStack }
