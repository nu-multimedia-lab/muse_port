from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_read_articles():
    response = client.get("/articles")
    assert response.status_code == 200


def test_create_article():
    response = client.post(
        "/articles",
        json={
            "user_id": "Pytest",
            "title": "test_article",
            "content": "This is a test article.",
        },
    )
    assert response.status_code == 201
    assert response.json()["title"] == "test_article"
