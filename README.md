# Gruppenprojekt Warehouse-Management

## Aufgabe:

Unsere Lagerverwaltungs - App ist die perfekte Lösung, um dein Lager zu organisieren und einen Überblick über deinen Bestand zu behalten.

Mit dieser benutzerfreundlichen Anwendung kannst du mühelos all deine Waren erfassen, verwalten und organisieren.

Unsere Stock-App macht es einfach, dein Lager strukturiert und gut organisiert zu pflegen.

Entdecke, und genieße Organisation auf eine neue Art und Weise - mit unserer Stock-App!"

## Planung:

### Object Produkt
- id
- productId
- productName
- productCategory
- productQuantity

### Backend Endpoints ("/api/product")

- add product("/add")
- update product("/update")
- delete product("/delete")
- get products("getall")
- get product("get/{id}")

### Backend Database

- MongoDB
- Product speichern


### Frontend
- Tabelle mit ALLEN Producs
- Form für productAdd
- Form für productUpdate + Symbol in der Tabelle(Stift als Symbol?)
- Symbol für productDelete in der Tabelle (x)
- Suchleiste für Products (rechts an der Leiste productAdd)
- Dropdown mit (nach was möchtest du sortieren? Default:productCategory)

