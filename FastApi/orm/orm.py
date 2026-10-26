# Object relational mapping (ORM)
# is a programming technique for converting data between incompatible
# type systems in object-oriented programming languages.
# This creates, in effect, a "virtual object database"
# that can be used from within the programming language.


class Inventory:

    def __init__(self, db):
        self.db = db

    def create_table(self):
        # create the inventory table if it doesn't exist
        query = """
            CREATE TABLE IF NOT EXISTS inventory (
                id SERIAL PRIMARY KEY,
                name VARCHAR(250) NOT NULL,
                qty integer NOT NULL,
                buying_price integer NOT NULL,
                selling_price integer NOT NULL,
                creaeted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """
        with self.db.get_cursor() as cursor:
            cursor.execute(query)
            print("Inventory table created successfully.")

    def add_item(self, name, qty, buying_price, selling_price):
        query = """
            INSERT INTO inventory (name, qty, buying_price, selling_price)
            VALUES (%s, %s, %s, %s);
        """
        with self.db.get_cursor() as cursor:
            cursor.execute(query, (name, qty, buying_price, selling_price))
            print(f"Item '{name}' added successfully.")

    def get_all_items(self):
        query = "SELECT * FROM inventory;"
        with self.db.get_cursor() as cursor:
            cursor.execute(query)
            items = cursor.fetchall()
            return items


if __name__ == "__main__":
    from db import Database
    db = Database()
    inventory = Inventory(db)
    inventory.create_table()
    inventory.add_item("Item1", 10, 5, 10)
    items = inventory.get_all_items()
    print(items)