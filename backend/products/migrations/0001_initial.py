from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=200)),
                ("slug", models.SlugField(max_length=220, unique=True)),
                ("category", models.CharField(max_length=100)),
                ("subcategory", models.CharField(blank=True, max_length=100)),
                ("brand", models.CharField(blank=True, max_length=100)),
                ("sku", models.CharField(max_length=100, unique=True)),
                ("price", models.DecimalField(decimal_places=2, max_digits=10)),
                ("old_price", models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ("stock", models.PositiveIntegerField(default=0)),
                ("image", models.CharField(blank=True, max_length=255)),
                ("description", models.TextField(blank=True)),
                ("specifications", models.JSONField(blank=True, default=dict)),
                ("featured", models.BooleanField(default=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={"ordering": ["id"]},
        ),
    ]
