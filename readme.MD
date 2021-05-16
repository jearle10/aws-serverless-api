# About

The code in this repository deploys a serverless api to AWS using a cloudformation template and the aws cli

## Prerequisites

- AWS account - https://aws.amazon.com/console/
- AWS cli - https://aws.amazon.com/cli/
- AWS SAM cli - https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

## How to use

Clone or download this repository

`git clone https://github.com/jearle10/aws-serverless-api.git`

The current template assumes you have not zipped and uploaded your lambda code to an s3 bucket.

1. Create an s3 bucket to store your code (insert this bucket name where you see `<bucket_name>` in steps 2 and 3 below)

`aws s3 mb s3://<bucket_name>`

2. Upload the code to s3 and generates a new template with codeUri populated with s3 bucket location

```sh
aws cloudformation package \
--s3-bucket <bucket_name> \
--template-file serverless-api.yaml \
--output-template-file dist/serverless-api.yaml
```

3. Deploys the api

```sh
aws cloudformation deploy \
--template-file dist/serverless-api.yaml \
--stack-name serverless-api
--capabilities CAPABILITY_IAM
```

The cloudfromation template creates the following resources

- API gateway
- Lambda function
