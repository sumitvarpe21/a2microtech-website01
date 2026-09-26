# A2 Microtech Django Backend

## 1. Create and activate a virtual environment

Windows PowerShell:

```powershell
py -m venv venv
.\venv\Scripts\Activate.ps1
```

If PowerShell blocks activation, use:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\venv\Scripts\Activate.ps1
```

## 2. Install dependencies

```powershell
pip install -r requirements.txt
```

## 3. Create database tables

```powershell
python manage.py migrate
```

## 4. Add the existing A2 Microtech products

```powershell
python manage.py seed_products
```

## 5. Create an admin account

```powershell
python manage.py createsuperuser
```

## 6. Start Django

```powershell
python manage.py runserver
```

API: http://127.0.0.1:8000/api/products/
Admin: http://127.0.0.1:8000/admin/

## Product API examples

- GET `/api/products/`
- GET `/api/products/1/`
- GET `/api/products/?search=arduino`
- GET `/api/products/?category=Development%20Boards`
- GET `/api/products/?max_price=500`
- GET `/api/products/?featured=true`
- GET `/api/products/?ordering=price`
- POST `/api/products/`
- PUT `/api/products/1/`
- DELETE `/api/products/1/`

For now the API allows CRUD locally. Before production, add authentication/permissions to write operations.

## CORS

The backend is configured for the local Vite development server. For production, update `CORS_ALLOWED_ORIGINS` in `config/settings.py` to your deployed frontend domain.
