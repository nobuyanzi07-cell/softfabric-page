"""
Inheritance in Python
Can extend a class using another class
-> a class inherits methods and properties of another class.
-. Dry<Dont Repeat Yourself>


Biology classification

Shapes
Rectangle and square . <triangle>
---- shapes .<shape_name>
---- sides .<rectangle, square,trampezium> sidea, sideb, sidec
---- area .<>
---- methods. peerimeter of the rectangle

"""

class Rectangle:

    def __init__(self, length, width):
        self.length = length
        self.width = width
        self.shape_name = "Rectangle"

    def area(self):
        area=self.length*self.width
        print(f"Area of rectangel lenght {self.length} and width {self.width} is {area}")

class Square:

    def __init__(self, side):
        self.length = side
        self.width = side
        self.shape_name = "Square"

    def area(self):
        area=self.length*self.width
        print(f"Area of square lenght {self.length} and width {self.width} is {area}")

r1=Rectangle(length=5, width=3)
r1.area()

s1=Square(side=4)
s1.area()

