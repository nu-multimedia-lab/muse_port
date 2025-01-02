class CRUDError(Exception):
    """Base exception for CRUD operations"""

    pass


class ItemNotFoundError(CRUDError):
    """Raised when an item is not found"""

    pass


class DatabaseError(CRUDError):
    """Raised when a database operation fails"""

    pass
