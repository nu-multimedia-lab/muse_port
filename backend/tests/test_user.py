from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_read_users():
    response = client.get("/users")
    assert response.status_code == 200


def test_create_user():
    response = client.post("/users", json={"username": "test_user"})
    assert response.status_code == 201
    assert response.json()["username"] == "test_user"
