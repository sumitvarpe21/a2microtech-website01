from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "category", "price", "stock", "featured", "updated_at")
    list_filter = ("category", "featured")
    search_fields = ("name", "sku", "brand", "category")
    prepopulated_fields = {"slug": ("name",)}
    ordering = ("id",)
