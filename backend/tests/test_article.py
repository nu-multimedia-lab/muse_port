from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_get_works():
    response = client.get("/works")
    assert response.status_code == 200


def test_get_work():
    # First, create an work to get
    response = client.post(
        "/works",
        json={
            "user_id": "Pytest",
            "title": "work_to_get",
            "content": "This is an work to get.",
        },
    )
    assert response.status_code == 201
    work_id = response.json()["id"]

    # Get the work
    response = client.get(f"/works/{work_id}")
    assert response.status_code == 200
    assert response.json()["title"] == "work_to_get"


def test_create_work():
    response = client.post(
        "/works",
        json={
            "user_id": "Pytest",
            "tags": ["test", "pytest", "fastapi"],
            "title": "test_work",
            "content": "This is a test work.",
        },
    )
    assert response.status_code == 201
    assert response.json()["title"] == "test_work"


def test_update_work():
    # First, create an work to update
    response = client.post(
        "/works",
        json={
            "user_id": "Pytest",
            "title": "work_to_update",
            "content": "This is an work to update.",
        },
    )
    assert response.status_code == 201
    work_id = response.json()["id"]

    # Update the work
    response = client.put(
        f"/works/{work_id}",
        json={
            "title": "updated_work",
            "content": "This is an updated work.",
        },
    )
    assert response.status_code == 200
    assert response.json()["title"] == "updated_work"


def test_delete_work():
    # First, create an work to delete
    response = client.post(
        "/works",
        json={
            "user_id": "Pytest",
            "title": "work_to_delete",
            "content": "This is an work to delete.",
        },
    )
    assert response.status_code == 201
    work_id = response.json()["id"]

    # Delete the work
    response = client.delete(f"/works/{work_id}")
    assert response.status_code == 204
