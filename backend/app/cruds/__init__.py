import boto3


class CRUD:
    def __init__(self, table: str) -> None:
        self.dynamodb = boto3.resource("dynamodb")
        self.table = self.dynamodb.Table(table)
