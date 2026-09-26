from django.core.management.base import BaseCommand
from products.models import Product

PRODUCTS = [
    {
        "name": "Arduino UNO R3", "slug": "arduino-uno-r3", "category": "Development Boards",
        "subcategory": "Arduino", "brand": "Arduino", "sku": "A2-ARD-UNO-R3", "price": 599,
        "old_price": 699, "stock": 25, "image": "arduino-uno-r3-aw5lXL8R.jpg",
        "description": "Arduino UNO R3 development board suitable for electronics projects, prototyping and learning embedded systems.",
        "specifications": {"Microcontroller": "ATmega328P", "Operating Voltage": "5V", "Digital I/O Pins": "14", "Analog Input Pins": "6", "USB": "USB Type-B"},
    },
    {
        "name": "ESP32 Development Board", "slug": "esp32-development-board", "category": "Development Boards",
        "subcategory": "ESP32", "brand": "ESP", "sku": "A2-ESP-32", "price": 449, "old_price": 499, "stock": 18,
        "image": "esp32-ktQVsPLt.jpg", "description": "ESP32 development board with Wi-Fi and Bluetooth connectivity for IoT and embedded applications.",
        "specifications": {"Processor": "Dual-core", "Wi-Fi": "2.4 GHz", "Bluetooth": "Bluetooth 4.2", "Operating Voltage": "3.3V", "GPIO": "Multiple GPIO pins"},
    },
    {
        "name": "HC-SR04 Ultrasonic Sensor", "slug": "hc-sr04-ultrasonic-sensor", "category": "Sensors & Modules",
        "subcategory": "Distance Sensors", "brand": "Generic", "sku": "A2-SEN-HC04", "price": 89, "old_price": 119, "stock": 50,
        "image": "hc-sr04-jyXQt__W.jpg", "description": "HC-SR04 ultrasonic distance sensor for measuring object distance in electronics and robotics projects.",
        "specifications": {"Operating Voltage": "5V", "Measuring Range": "2cm - 400cm", "Interface": "Digital", "Sensor Type": "Ultrasonic"},
    },
    {
        "name": "SG90 Servo Motor", "slug": "sg90-servo-motor", "category": "Motors", "subcategory": "Servo Motors",
        "brand": "TowerPro", "sku": "A2-MOT-SG90", "price": 129, "old_price": 149, "stock": 40, "image": "sg90-B0zwlqPo.jpg",
        "description": "Compact SG90 servo motor suitable for robotics, automation and small mechanical projects.",
        "specifications": {"Operating Voltage": "4.8V - 6V", "Rotation": "180°", "Motor Type": "Servo", "Weight": "Approx. 9g"},
    },
    {
        "name": "5mm LED Pack", "slug": "5mm-led-pack", "category": "LEDs", "subcategory": "LED Components", "brand": "Generic",
        "sku": "A2-LED-5MM", "price": 49, "old_price": 59, "stock": 100, "image": "led-5mm-DYkQV1UQ.jpg",
        "description": "5mm LED component pack suitable for indicators, prototypes and electronic circuits.",
        "specifications": {"LED Size": "5mm", "Type": "Through Hole", "Voltage": "Approx. 2V", "Pack": "Multiple LEDs"},
    },
    {
        "name": "220Ω Resistor Pack", "slug": "220-ohm-resistor-pack", "category": "Resistors", "subcategory": "Fixed Resistors", "brand": "Generic",
        "sku": "A2-RES-220", "price": 39, "old_price": 49, "stock": 100, "image": "resistor-220-rPQ6ytJy.jpg",
        "description": "220 ohm resistor pack for current limiting, LED circuits and electronics projects.",
        "specifications": {"Resistance": "220Ω", "Type": "Fixed Resistor", "Tolerance": "Standard", "Application": "Electronic Circuits"},
    },
    {
        "name": "16x2 LCD Display", "slug": "16x2-lcd-display", "category": "Displays", "subcategory": "LCD Displays", "brand": "Generic",
        "sku": "A2-DIS-16X2", "price": 149, "old_price": 179, "stock": 30, "image": "lcd-16x2-CFQRn6Uq.jpg",
        "description": "16x2 character LCD display for Arduino, microcontroller and embedded electronics projects.",
        "specifications": {"Display": "16x2 Characters", "Interface": "Parallel", "Backlight": "LED", "Operating Voltage": "5V"},
    },
    {
        "name": "830 Point Breadboard", "slug": "830-point-breadboard", "category": "Tools & Accessories", "subcategory": "Breadboards", "brand": "Generic",
        "sku": "A2-BRD-830", "price": 99, "old_price": 129, "stock": 35, "image": "breadboard-830-BQFTsexh.jpg",
        "description": "830-point solderless breadboard for quick circuit prototyping and electronics experiments.",
        "specifications": {"Points": "830", "Type": "Solderless", "Material": "ABS", "Application": "Circuit Prototyping"},
    },
]


class Command(BaseCommand):
    help = "Seed the A2 Microtech database with the existing products."

    def handle(self, *args, **options):
        for data in PRODUCTS:
            Product.objects.update_or_create(sku=data["sku"], defaults=data)
        self.stdout.write(self.style.SUCCESS(f"Seeded {len(PRODUCTS)} products successfully."))
