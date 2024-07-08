from animals.mammals import Dog
from animals.birds import Eagle

def main():
    # Dog 인스턴스 생성
    my_dog = Dog(name="Buddy", age=5)
    print(my_dog.info())
    print(my_dog.speak())

    # Eagle 인스턴스 생성
    my_eagle = Eagle(name="Sky", age=3)
    print(my_eagle.info())
    print(my_eagle.speak())

if __name__ == "__main__":
    main()
