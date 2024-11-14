import boto3

TABLE_NAME = 'test_table'
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)
