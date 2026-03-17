from models import Dog, Cat

# Создаём объекты
dog = Dog("Шарик", 3, "Жанибек", breed="Лабрадор")
cat = Cat("Мурка", 5, "Камилла", indoor=True)

# Список животных
animals = [dog, cat]

# Проходим по списку
print("=== Все животные ===")
for animal in animals:
    print(animal)           # __str__
    print(animal.info())    # метод из базового класса
    print(animal.speak())   # полиморфизм — у каждого свой звук
    print()

# Уникальные методы дочерних классов
print("Уникальные методы:")
print(dog.fetch())
print(cat.mood())