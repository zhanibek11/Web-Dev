class Animal:
    def __init__(self, name, age, owner):
        self.name=name
        self.age=age
        self.owner=owner

    def speak(self):
        return "..."

    def info(self):
        return f"{self.name}, {self.age} лет, хозяин: {self.owner}"

    def __str__(self):
        return f"{self.name} ({self.__class__.__name__})"


class Dog(Animal):
    def __init__(self, name, age, owner, breed):
        super().__init__(name, age, owner)
        self.breed = breed

    def speak(self):
        return "Гав!"

    def fetch(self):
        return f"{self.name} принёс мячик!"


class Cat(Animal):
    def __init__(self, name, age, owner, indoor):
        super().__init__(name, age, owner)
        self.indoor = indoor

    def speak(self):
        return "Мяу!"

    def mood(self):
        return f"{self.name} недовольная"