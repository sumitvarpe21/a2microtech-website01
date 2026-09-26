from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id", "name", "slug", "category", "subcategory", "brand", "sku",
            "price", "old_price", "stock", "image", "description", "specifications",
            "featured", "created_at", "updated_at",
        ]
