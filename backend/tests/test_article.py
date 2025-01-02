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


def test_update_article():
    # First, create an article to update
    response = client.post(
        "/articles",
        json={
            "user_id": "Pytest",
            "title": "article_to_update",
            "content": "This is an article to update.",
        },
    )
    assert response.status_code == 201
    article_id = response.json()["id"]

    # Update the article
    response = client.put(
        f"/articles/{article_id}",
        json={
            "title": "updated_article",
            "content": "This is an updated article.",
        },
    )
    assert response.status_code == 200
    assert response.json()["title"] == "updated_article"


def test_delete_article():
    # First, create an article to delete
    response = client.post(
        "/articles",
        json={
            "user_id": "Pytest",
            "title": "article_to_delete",
            "content": "This is an article to delete.",
        },
    )
    assert response.status_code == 201
    article_id = response.json()["id"]

    # Delete the article
    response = client.delete(f"/articles/{article_id}")
    assert response.status_code == 204
