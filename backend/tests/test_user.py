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


def test_update_user():
    # First, create a user to update
    response = client.post("/users", json={"username": "user_to_update"})
    assert response.status_code == 201
    user_id = response.json()["id"]

    # Update the user
    response = client.put(f"/users/{user_id}", json={"username": "updated_user"})
    assert response.status_code == 200
    assert response.json()["username"] == "updated_user"


def test_delete_user():
    # First, create a user to delete
    response = client.post("/users", json={"username": "user_to_delete"})
    assert response.status_code == 201
    user_id = response.json()["id"]

    # Delete the user
    response = client.delete(f"/users/{user_id}")
    assert response.status_code == 204
